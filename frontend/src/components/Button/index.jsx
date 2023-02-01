import * as S from "./styled"

export const Button = ({isForm, handle, children, isDelete}) => {
  return (
    <div>
      <S.Button type={isForm ? "submit" : "button"} onClick={isForm ? () => {} : handle} isDelete={isDelete}>
        {children}
      </S.Button>
    </div>
  )
}
