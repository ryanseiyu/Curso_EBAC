import { ThemeProvider } from 'styled-components'
// import Teste from './Teste'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/style'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      {/* <Teste /> */}
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
