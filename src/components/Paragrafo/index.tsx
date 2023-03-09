//Aqui importei a estilização do titulo deste arquivo.
import { P } from './styles'

//AQUI É ONDE CRIAMOS OS COMPONENTS QUE SERÃO REUTILIZADOS EM OUTRAS ESTRUTURAS:
export type Propstype = {
  children: string //Aqui passamos children, para podermos escrever dentro da tag <Titulo> que exportamos
  tipo?: 'principal' | 'secundario'
}

//Assim usamos o props recebendo a tipagem do Propstype criada, e também renderizamos o styledComponents atráves das tags, neste caso TitleStyle.
const Paragrafo = ({ children, tipo = 'principal' }: Propstype) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
