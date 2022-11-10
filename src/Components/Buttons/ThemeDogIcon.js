import React from 'react'
import styled from 'styled-components'

const I = styled.i`
  font-size: 30px;
  color: #f8b62b;
  &:hover{
    color: #ea5514;
  }
`

function ThemeDogIcon() {
  return (
    <I className="fa-light fa-shield-dog"></I>
  )
}

export default ThemeDogIcon