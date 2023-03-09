//Aqui importei a estilização do titulo deste arquivo.
import { TitleStyle } from './styles'

//AQUI É ONDE CRIAMOS OS COMPONENTS QUE SERÃO REUTILIZADOS EM OUTRAS ESTRUTURAS:
export type Propstype = {
  children: string //Aqui passamos children, para podermos escrever dentro da tag <Titulo> que exportamos
  fontSize?: number
}

//Assim usamos o props recebendo a tipagem do Propstype criada, e também renderizamos o styledComponents atráves das tags, neste caso TitleStyle.
const Titulo = (props: Propstype) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Titulo
