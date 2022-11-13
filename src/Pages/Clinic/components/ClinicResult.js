import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from './InfiniteScroll';

const ResultBox = styled.div`
  width: 100%;
  height: 400px;
`;

function ClinicResult() {
  return (
    <ResultBox>
      <InfiniteScroll />
    </ResultBox>
  );
}

export default ClinicResult;
