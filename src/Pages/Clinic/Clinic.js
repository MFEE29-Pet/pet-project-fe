import React, { useState } from 'react';
import ClinicSelect from './components/ClinicSelect';
import ClinicMap from './components/ClinicMap';
import styled from 'styled-components';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';

const ClinicBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom:50px;
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
const Clinicroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/clinic',
    label: '醫療診所',
  },
];

function Clinic() {
  const [dataFromSelect, setDataFromSelect] = useState([]);
  return (
    <ClinicBox>
      <BreadcrumbBox>
        <Breadcrumb
          routes={Clinicroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
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
