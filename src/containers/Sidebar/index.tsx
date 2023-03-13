import Avatar from '../../components/Avatar'
import { SidebarContainer } from '../../components/Avatar/style'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao } from './styles'

type Props = {
  trocaTema: () => void //AQUI É A TIPAGEM QUE RECEBERÁ A FUNÇÃO CRIADA NO App.tsx DE TROCAR DE TEMA, E O VOID É POIS RECEBE UM RETORNO VAZIO DE INICIO, E ENTÃO TEMOS QUE PASSAR PARA A CONST ABAIXO RECEBER ESTA TIPAGEM, SENDO props: Props.
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      {/* Podemos escrever dentro da tag, dependendo se tipamos a prop com children */}
      <Titulo fontSize={20}>Leonardo Sibuya</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Leonardosibuya
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Engenheiro Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
