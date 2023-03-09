import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles' //AQUI IMPORTAMOS O RESET DOS ESTILOS

function App() {
  return (
    <>
      {/* AQUI RENDERIZAMOS O RESET, COMO SE FOSSE UM COMPONENTE */}
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
