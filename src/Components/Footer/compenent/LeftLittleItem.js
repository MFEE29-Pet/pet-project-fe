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
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  line-height: 35px;
  margin-bottom: 5px;
  font-family: art;
  color: #fff;
  border-bottom: 2px solid #fff;
`;

const LI = styled.li`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  font-family: art;
  color: #fff;
`;

function LeftLittleItem({ ItemData, Title }) {
  return (
    <LITTLE_ITEM>
      <H2>{Title}</H2>
      <ul>
        {ItemData.map((e, i) => {
          const { id, name } = e;
          return <LI key={id} className="">{name}</LI>;
        })}
      </ul>
    </LITTLE_ITEM>
  );
}

export default LeftLittleItem;
