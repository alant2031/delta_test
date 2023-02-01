import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import * as S from "./styled"
import { api } from '../../api'

export const Students = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()
  const fetchApi = useCallback(async () => {
    try {
      const response = await api.get("/students")
      const ordered = response.data.students.reverse()
      setStudents(ordered)
    } catch(err) {}

  }, [])

  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <S.Container data-testid="students-comp">
      <S.Main>
        <S.Title>Our Students. Click to see Details</S.Title>
        <Button handle={() => navigate("/students/new")}>
          + Add Student
        </Button>
      </S.Main>
      <S.Br />
      <S.Cards>
        {students.length && students.map((student, key) => {
          return (
            <S.Card key={key} onClick={() => navigate(`/students/${student.id}`)}>
              <div>Name: {student.name}</div>
              <div>ID: {student.id}</div>
            </S.Card>
          )
        })}
      </S.Cards>
    </S.Container>
  )
}
