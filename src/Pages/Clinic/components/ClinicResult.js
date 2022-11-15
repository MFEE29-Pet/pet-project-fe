import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from './InfiniteScroll';
import ClinicItem from './ClinicItem';

const ResultBox = styled.div`
  width: 100%;
  height: 500px;
`;

function ClinicResult() {


  return (
    <ResultBox>
      <InfiniteScroll/>
    </ResultBox>
  );
}

export default ClinicResult;
