import React, { useState } from 'react';
import ClinicSelect from './components/ClinicSelect';
import ClinicMap from './components/ClinicMap';
import styled from 'styled-components';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import './style.scss'

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
  margin-bottom: 50px;
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
    label: '地圖診所',
  },
];

function Clinic() {
  const [dataFromSelect, setDataFromSelect] = useState([]);
  const [location, setLocation] = useState({
    lat: '25.033671',
    lng: '121.564427',
  });
  return (
    <ClinicBox className='clinic_3'>
      <div className="p_space" style={{ height: '100px' }}></div>
      <BreadcrumbBox className='clinic_2'>
        <Breadcrumb
          routes={Clinicroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <ClinicBoxContainer className='clinic_1'>
        <ListBox>
          <ClinicSelect
            setDataFromSelect={setDataFromSelect}
            setLocation={setLocation}
          />
          {/* {console.log(dataFromSelect)} */}
          {/* {console.log(location)} */}
        </ListBox>
        <ClinicMap dataFromSelect={dataFromSelect} location={location} />
      </ClinicBoxContainer>
    </ClinicBox>
  );
}

export default Clinic;
