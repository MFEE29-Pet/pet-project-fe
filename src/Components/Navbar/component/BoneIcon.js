import React from 'react'
import styled from 'styled-components'

const I = styled.i`
  font-size: 20px;
  color: #f8b62b;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -30px;
  opacity:0;
  &:hover{
    color: #ea5514;
  }
`

function BoneIcon() {
  return (
    <I className="fa-duotone fa-bone icon"></I>
  )
}

export default BoneIcon