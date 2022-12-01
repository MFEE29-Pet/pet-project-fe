import React from 'react';
import styled from 'styled-components';

const BTN = styled.button`
  border: none;
  color: #fff;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 18px;
  cursor: pointer;
  align-self: center;
`;

function DogButton({ Text, ClassName, nav }) {
  return (
    <BTN className={ClassName} onClick={nav}>
      {Text}
    </BTN>
  );
}

export default DogButton;
