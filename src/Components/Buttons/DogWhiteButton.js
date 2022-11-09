import React from "react";
import styled from "styled-components";

const BTN = styled.button`
  background: #ffff;
  border: 1px solid #f3b524;
  color: #f3b524;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 18px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background: #f3b524;
    border: 1px solid #fff;
    color: #fff;
  }
`;

function DogWhiteButton({Text}) {
  return <BTN color='blue'>{Text}</BTN>;
}

export default DogWhiteButton;
