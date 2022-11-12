import React, { useState } from 'react';
import Select from '../../../Components/Select/Select';
import CheckBox from './CheckBox';
import DogButton from '../../../Components/Buttons/DogButton';
import GlassIcon from './GlassIcon';
import styled from 'styled-components';

const AreaOptions = [
  {
    label: '我全都要',
    value: 'all',
  },
  {
    label: 'AZ 疫苗',
    value: 'AZ',
  },
  {
    label: 'BNT 疫苗',
    value: 'BNT',
  },
  {
    label: '莫德納疫苗',
    value: 'Moderna',
  },
  {
    label: '高端疫苗',
    value: 'Vaccine',
  },
];

const ClinicOptions = [
  {
    label: '我全都要',
    value: 'all',
  },
  {
    label: 'AZ 疫苗',
    value: 'AZ',
  },
  {
    label: 'BNT 疫苗',
    value: 'BNT',
  },
  {
    label: '莫德納疫苗',
    value: 'Moderna',
  },
  {
    label: '高端疫苗',
    value: 'Vaccine',
  },
];

const checkOptions = ['非犬貓', '24小時急診'];

const Check = styled.div`
  display: flex;
`

function ClinicSelect() {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const [likeList2, setLikeList2] = useState([]);
  return (
    <>
      <Select
        value={selectedArea}
        options={AreaOptions}
        placeholder="請選擇行政區"
        onSelect={(value) => setSelectedArea(value)}
      />
      <Select
        value={selectedClinic}
        options={ClinicOptions}
        placeholder="請選擇診所"
        onSelect={(value) => setSelectedClinic(value)}
      />
      <Check>
        {checkOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              value={v}
              checkedValueList={likeList2}
              setCheckedValueList={setLikeList2}
            />
          );
        })}
        <DogButton ClassName="bg_main_light_color1" Text={<GlassIcon/>}/>
      </Check>
    </>
  );
}

export default ClinicSelect;
