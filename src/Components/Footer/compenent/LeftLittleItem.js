import React from "react";
import styled from "styled-components";

const LITTLE_ITEM = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
`;

const H2 = styled.h2`
  width: 100%;
  color: #40220f;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  line-height: 35px;
  border-bottom: 2px solid #40220f;
  margin-bottom: 5px;
  font-family: art;
`;

const LI = styled.li`
  color: #40220f;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  font-family: art;
`;

function LeftLittleItem({ ItemData, Title }) {
  return (
    <LITTLE_ITEM>
      <H2>{Title}</H2>
      <ul>
        {ItemData.map((e, i) => {
          const { id, name } = e;
          return <LI key={id}>{name}</LI>;
        })}
      </ul>
    </LITTLE_ITEM>
  );
}

export default LeftLittleItem;
