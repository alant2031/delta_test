import { Formik, Form as FormComp, useField } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../Button"
import { studentSchema } from "../../schema"
import { useCallback, useEffect, useRef, useState } from "react"
import * as S from "./styled"
import { api } from "../../api"
import { Modal } from "../Modal"



const Field = ({label, ...inputProps}) =>{
  const [field, meta] = useField(inputProps)
  // const [fName, setFName] = useState("Select File")
  
  const { type, filename } = inputProps

  const isFile = type === "file"

  return (
    <>
      { isFile ?
      <S.FileField>
        <label>{filename}
          <input {...field} {...inputProps} />
        </label>
        
      </S.FileField>
      :
      <S.TextField color={(meta.error && meta.touched) ? "red" : "#222"}>
        <label>{label}</label>
        
        <input {...field} {...inputProps} />
        {meta.error && <p>{meta.error}</p>}
      </S.TextField>}
    </>
  )
}

export const Form = ({isNew}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  
  const [show, setShow] = useState(false)
  const [fName, setFName] = useState("Select File")
  const [loading, setLoading] = useState(<p>Loading data...</p>)
  const [initialValues, setInitialvalues] = useState({
    name: "",
    address: "",
    phone: ""
  })
  const [src, setSrc] = useState("")
  const file = useRef({
    filename: "Select file"
  })

  const handleFileSelect = useCallback((event) => {
    file.current = event.target.files[0]
    setFName(file.current.name)
  }, [])

  const handleDelete = useCallback(async () => {
    try {
      await api.delete(`/students/${id}`)
      navigate("/students")
    } catch(err) {}
  }, [])

  const onSubmit = useCallback(async (values, actions) => {
    const method = isNew ? "post" : "patch"
    const url = isNew ? "/students" : `/students/${id}`
    try {
      const formData = new FormData()
      formData.append("file", file.current)
      formData.append("name", values.name)
      formData.append("address", values.address)
      formData.append("phone", values.phone)
      
      const resp = await api[method](url, formData)
      navigate("/students")
    } catch (err) {
      console.log(err)
    }
    finally {
      actions.resetForm()
    }
  }, [])

  const fetchImg = useCallback(async () => {
    try {
      const response = await api.get(`/students/${id}/pfp`, { responseType: 'blob' })
      const f = new Blob([response.data], { type: response.headers['content-type'] });
      setSrc(URL.createObjectURL(f))
    } catch(err) {
    }
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const {data} = await api.get(`/students/${id}`)
      setLoading(<></>)
      setInitialvalues({
        name: data.name,
        address: data.address,
        phone: data.phone
      })
    } catch(err) {
      if(!isNew) navigate("not_found") 
    }
  }, [])

  useEffect(() => {
    fetchData()
    fetchImg()
  }, [isNew])

  return (
    <>
      {!isNew && loading}
      <Formik initialValues={initialValues} validationSchema={studentSchema} onSubmit={onSubmit} enableReinitialize={true}>
        {(props) => (
          <FormComp onSubmit={props.handleSubmit}>
            <S.FieldsContainer>

              <Field label="Name:" name="name" type="text" placeholder="Type your name" />
              <Field label="Address:" name="address" type="text" placeholder="Type your address" />
              <Field label="Phone:" name="phone" type="text" placeholder="Type your phone" />
              <div style={{display: "flex", gap: "50px"}}>
                <Field label="Image" name="file" type="file" onChange={handleFileSelect} filename={fName}/>

                {!isNew && 
                  <S.Image>
                    <img src={src} alt="profile image" />
                  </S.Image>
                }
              </div>
            </S.FieldsContainer>
            <S.ButtonsContainer>

              <Button isForm >Save</Button>
              { !isNew && <Button isDelete handle={() => setShow(true)}>Delete</Button> }
              <Modal show={show} studentId={id} setShow={setShow} handle={handleDelete} disabled={props.isSubmitting}/>
            </S.ButtonsContainer>
          </FormComp>
        )}
      </Formik>
    </>
  )
}
