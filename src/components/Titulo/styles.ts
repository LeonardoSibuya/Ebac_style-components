import styled from 'styled-components'

import { Propstype } from './index'

export const TitleStyle = styled.h3<Propstype>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  color: ${(props) => props.theme.corPrincipal};
  margin-bottom: 16px;
`
