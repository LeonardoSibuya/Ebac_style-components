// ASSIM É FEITO PARA CRIAMOS UMA ESTILIZAÇÃO GERAL DO DOM, NESTE CASO PARA CRIAR A ESTILIZAÇÃO QUE FAZEMOS NORMALMENTE DO *{} E REDEFINIR O MARGIN, PADDING E ESSAS COISAS.
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    padding-top: 80px;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`

export default EstiloGlobal

//AQUI CRIAMOS A ESTILIZAÇÃO DO CONTAINER

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`
