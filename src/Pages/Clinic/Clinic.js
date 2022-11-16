import React, { useState } from 'react';
import ClinicSelect from './components/ClinicSelect';
import ClinicMap from './components/ClinicMap';
import styled from 'styled-components';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';

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
  margin-bottom: 100px;
`;

const ListBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function Clinic() {
  const [dataFromSelect, setDataFromSelect] = useState([]);
  return (
    <ClinicBox>
      <Breadcrumb />
      <ClinicBoxContainer>
        <ListBox>
          <ClinicSelect setDataFromSelect={setDataFromSelect} />
          {/* {console.log(dataFromSelect)} */}
        </ListBox>
        <ClinicMap dataFromSelect={dataFromSelect} />
      </ClinicBoxContainer>
    </ClinicBox>
  );
}

export default Clinic;
