import React from 'react';
import styled from 'styled-components';

const BTN = styled.button`
  border: none;
  color: #fff;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 18px;
  margin-right: 10px;
  cursor: pointer;
`;

function DogButton({ Text, ClassName }) {
  return <BTN className={ClassName}>{Text}</BTN>;
}

export default DogButton;
