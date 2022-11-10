import React from 'react'
import styled from 'styled-components'

const I = styled.i`
  font-size: 30px;
  color: #00a29a;
  &:hover{
    color: #18334e;
  }
`

function ThemeDogIcon() {
  return (
    <I className="fa-light fa-shield-cat"></I>
  )
}

export default ThemeDogIcon