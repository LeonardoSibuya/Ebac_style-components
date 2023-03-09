import Avatar from '../../components/Avatar'
import { SidebarContainer } from '../../components/Avatar/style'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
