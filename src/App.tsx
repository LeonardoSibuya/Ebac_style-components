import Teste from './Teste'
import EstiloGlobal from './styles' //AQUI IMPORTAMOS O RESET DOS ESTILOS

function App() {
  return (
    <>
      {/* AQUI RENDERIZAMOS O RESET, COMO SE FOSSE UM COMPONENTE */}
      <EstiloGlobal />
      <Teste />
    </>
  )
}

export default App
