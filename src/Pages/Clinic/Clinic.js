import React from 'react';
import ClinicList from './components/ClinicList';
import ClinicMap from './components/ClinicMap';
import styled from 'styled-components';

const ClinicBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClinicBoxContainer = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: space-between;
`

function Clinic() {
  return (
    <ClinicBox>
      <ClinicBoxContainer>
        <ClinicList />
        <ClinicMap />
      </ClinicBoxContainer>
    </ClinicBox>
  );
}

export default Clinic;
