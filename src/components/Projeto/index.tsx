import styled from 'styled-components' //AQUI MOSTRA QUE PODEMOS UTILIZAR A ESTILIZAÇÃO NO MESMO ARQUIVO DO COMPONENTE, SEM PRECISAR SEPARAR E FAZER NUM ARQUIVO STYLE.

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

//SE FORMOS UTILIZAR DESTA FORMA, DE ESTILIZAR NO MESMO ARQUIVO DO COMPONENTE, PRECISAMOS SEMPRE FAZER A ESTILIZAÇÃO ANTES DO CODIGO DO COMPONENTE, IGUAL DESTA FORMA.
const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  cursor: pointer;
  display: inline-block;
  margin-top: 24px;
`

const Projeto = () => (
  <Card>
    <Titulo> Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefa feita com VueJS</Paragrafo>
    <LinkBotao>Visulizar</LinkBotao>
  </Card>
)

export default Projeto
