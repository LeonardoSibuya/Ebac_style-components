import styled from 'styled-components'

import { Propstype } from './index'

export const TitleStyle = styled.h3<Propstype>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  color: #282a35;
  margin-bottom: 16px;
`
