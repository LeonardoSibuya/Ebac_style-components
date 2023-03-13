import { useState } from 'react'
import { ThemeProvider } from 'styled-components' //IMPORT PARA CRIAÇÃO DO TEMA LIGHT E DARK

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles' //AQUI IMPORTAMOS O RESET DOS ESTILOS

import temaLight from './themes/light' //AQUI IMPORTAMOS OS TEMAS, LIGHT E DARK
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    // UTILIZANDO ThemeProvider IMPORTADO LA EM CIMA, COLOCAMOS ENTRE <> </> PARA ENGLOBAR TODO O CONTEUDO, PODEMOS CRIAR OS TEMAS DARK E LIGHT DA PAGINA
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      {/* AQUI RENDERIZAMOS O RESET, COMO SE FOSSE UM COMPONENTE */}
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
