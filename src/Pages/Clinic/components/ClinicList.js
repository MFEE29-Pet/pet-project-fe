import React from 'react';
import ClinicSelect from './ClinicSelect';
import ClinicResult from './ClinicResult';
import styled from 'styled-components';

const ListBox = styled.div`
  
`

function ClinicList() {
  return (
    <ListBox>
      <ClinicSelect />
      <ClinicResult />
    </ListBox>
  );
}

export default ClinicList;
