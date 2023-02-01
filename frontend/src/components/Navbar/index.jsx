import * as S from './styled'

export const Navbar = () => {
  return (
    <S.Nav data-testid="navbar-comp">
      <S.Logo data-testid="logo">
        <S.Link to={"/"}>Delta</S.Link>
      </S.Logo>
      <S.Links data-testid="links">
        <S.Link to={"/"} data-testid="link">home</S.Link>
        <S.Link to={"/students"} data-testid="link">students</S.Link>
        <S.Link to={"/about"} data-testid="link">about</S.Link>
      </S.Links>
    </S.Nav>
  )
}
