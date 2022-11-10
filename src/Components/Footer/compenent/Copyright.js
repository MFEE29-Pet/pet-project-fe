import React from "react";
import styled from "styled-components";

const COPYRIGHT = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const COPYRIGHTBOX = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: art;
`;

function Copyright() {
  return (
    <COPYRIGHT>
      <COPYRIGHTBOX className="text_main_dark_color2">
        <div>©</div>
        <div>All</div>
        <div>Right</div>
        <div>Reserved</div>
        <div>By</div>
        <div>PetBan.</div>
      </COPYRIGHTBOX>
    </COPYRIGHT>
  );
}

export default Copyright;
