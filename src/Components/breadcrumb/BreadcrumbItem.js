import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.$isClickable && 'cursor: pointer;'}
  & > *:not(:first-child) {
    margin-left: 4px;
  }
  font-family: art;
  color: #727171;
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
      <Link to={to}>{label}</Link>
    </StyledItem>
  );
}

export default BreadcrumbItem;
