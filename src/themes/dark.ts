//AQUI É ONDE CRIAMOS O OBJETO QUE IRÁ ARMAZENAR AS CORES DO TEMA DARK DA PAGINA, E EXPORTAMOS PARA PODER USAR O (props) => props.theme.corDesejada, assim podemos utilizar esses valores.

const temaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#eee',
  corDeFundo: '#282a35',
  corDeFundoBotao: '#fff',
  corDaBorda: '#c1c1c1'
}

export default temaDark

//AQUI CRIAMOS A TIPAGEM DO TYPESCRIPT PARA PODER EXPORTAR PARA O STYLES.TS GLOBAL DO PROJETO
export type Theme = {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDeFundoBotao: string
  corDaBorda: string
}
