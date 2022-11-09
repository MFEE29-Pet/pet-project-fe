import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.$isClickable && "cursor: pointer;"}
  & > *:not(:first-child) {
    margin-left: 4px;
  }
  font-family: art;
`;

function BreadcrumbItem({ label, icon, to }) {
  const navigate = console.log;
  const handleClickPath = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <StyledItem
      role="presentation"
      key={label}
      $isClickable={!!to}
      onClick={() => handleClickPath(to)}
    >
      {icon}
      <span>{label}</span>
    </StyledItem>
  );
}

export default BreadcrumbItem;
