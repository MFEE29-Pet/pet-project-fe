import React from 'react';
import styled from 'styled-components';

const I = styled.i`
  font-size: 20px;
  color: #00a29a;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -30px;
  opacity: 0;
  &:hover {
    color: #18334e;
  }
`;

function FishIcon() {
  return <I className="fa-sharp fa-solid fa-fish icon"></I>;
}

export default FishIcon;
