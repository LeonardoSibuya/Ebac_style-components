import styled from 'styled-components'

import { Propstype } from './index'

export const P = styled.p<Propstype>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
