// ASSIM É FEITO PARA CRIAMOS UMA ESTILIZAÇÃO GERAL DO DOM, NESTE CASO PARA CRIAR A ESTILIZAÇÃO QUE FAZEMOS NORMALMENTE DO *{} E REDEFINIR O MARGIN, PADDING E ESSAS COISAS.
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

export default EstiloGlobal
