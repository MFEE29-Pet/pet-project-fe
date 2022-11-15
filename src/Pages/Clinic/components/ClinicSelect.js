import React, { useState } from 'react';
import Select from '../../../Components/Select/Select';
import CheckBox from './CheckBox';

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


const fruitOptions2 = ['西瓜', '芒果', '香蕉', '龍眼']


function ClinicSelect() {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const [likeList2, setLikeList2] = useState([])
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
      {fruitOptions2.map((v, i) => {
        return (
          <CheckBox
            key={i}
            value={v}
            checkedValueList={likeList2}
            setCheckedValueList={setLikeList2}
          />
        )
      })}
    </>
  );
}

export default ClinicSelect;
