import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

//AQUI UTILIZAMOS O () PARA INFORMAR QUE É UMA FUNÇÃO, PARA REAPROVEITARMOS O STYLE CRIADO NO COMPONENTE DE PARAGRAFO
export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  border-radius: 12px;
  border: none;
  font-weight: bold;
  font-size: 10px;
  padding: 8px;
  cursor: pointer;
`
