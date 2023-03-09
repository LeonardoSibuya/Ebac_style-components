import Titulo from '../../components/Titulo'

const Sidebar = () => (
  <aside>
    <img src="https://github.com/leonardosibuya.png" alt="" />
    {/* Podemos escrever dentro da tag, dependendo se tipamos a prop com children */}
    <Titulo fontSize={20}>Leonardo Sibuya</Titulo>
  </aside>
)

export default Sidebar
