import React from "react";
import styled from "styled-components";

const BTN = styled.button`
background: #f3b524;
border: 1px solid #f3b524;
color:#fff;
padding: 8px 15px;
font-size: 18px;
border-radius: 18px;
margin-right: 10px;
cursor: pointer;
&:hover {
  background: #fff;
  border: 1px solid #f3b524;
  color:#f3b524;
}
`;

const DogYellowButton = ({ Text }) => {
  
  return <BTN>{Text}</BTN>;
};

export default DogYellowButton
