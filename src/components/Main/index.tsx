import * as S from './styles'

// interface MainProps {
//   title: string;
//   description: string
// }

const Main = ({
  title = 'Boilerplate NextJs Apps Router',
  description = 'Boilerplate criado no curso React Avançado'
}) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </S.Wrapper>
)

export default Main
