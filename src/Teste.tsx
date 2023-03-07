import styled from 'styled-components'

//Aqui criamos a tipagem dos props que iremos utilizar no botao:
//Caso a propriedade seja opcional, usamos o ? após o nome da propriedade
type BotaoProps = {
  Botaoprincipal: boolean
  fontSize?: string
}

//Aqui criamos a const, que neste caso será para estilizar o button, e passamos entre <> nosso type da tipagem:
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.Botaoprincipal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
// Podemos criar outra const de botão, que irá herdar as configurações da const criada acima, e podemos alterar os valores caso necessário, apenas precisamos que após o styled, ao invés do . recebemos entre () a const que queremos herdar:
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
    //AQUI PODEMOS ESTILIZAR COMO SE FOSSE O SASS
  }
`

function Teste() {
  return (
    <>
      {/* Aqui renderizamos a const Botao como se fosse uma tag HTML, e passamos as props que foram criadas */}
      <Botao fontSize="30px" Botaoprincipal>
        Enviar
      </Botao>
      <Botao fontSize="14px" Botaoprincipal={false}>
        Cancelar
      </Botao>
      {/* Aqui renderizamos o novo botão que herdou as props e valores do botão criado anteriormente, e recebeu apenas a propriedade que não é opcional, no caso Botaoprincipal */}
      <BotaoPerigo as="a" Botaoprincipal>
        <span>Não clique Aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
