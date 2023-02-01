import * as S from './styled'

export const Home = () => {
  return (
    <div data-testid="home-comp">
      <S.Jumbotron>
        <S.Container>
          <h1>Delta School</h1>
        </S.Container>
      </S.Jumbotron>
      <S.Container>
        <h2>Bacon Ipsum</h2>
        <p>Bacon ipsum dolor sit amet bresaola shoulder ribeye jerky tongue andouille kevin meatloaf fatback shank bacon turkey turducken spare ribs chuck. Porchetta prosciutto pork chop, jowl andouille tri-tip rump kielbasa. Capicola ground round cow, drumstick shankle turducken pastrami. Flank bresaola meatball doner short ribs beef ribs ham hock pancetta. Prosciutto chuck andouille, spare ribs pork loin turkey jowl pastrami landjaeger corned beef doner tail strip steak. Brisket rump shank, doner pork chop leberkas turducken tri-tip ribeye shoulder spare ribs.</p>
      </S.Container>
    </div>
  )
}
