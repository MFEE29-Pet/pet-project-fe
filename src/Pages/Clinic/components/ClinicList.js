import React, { useState } from 'react';
import ClinicSelect from './ClinicSelect';
// import ClinicResult from './ClinicResult';
import styled from 'styled-components';

const ListBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

function ClinicList() {
  const [dataFromSelect,setDataFromSelect] = useState([])
  return (
    <ListBox>
      <ClinicSelect setDataFromSelect={setDataFromSelect}/>
      {console.log(dataFromSelect)}
    </ListBox>
  );
}

export default ClinicList;
