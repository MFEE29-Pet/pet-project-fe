import React, { useEffect, useState } from 'react';
import Select from '../../../Components/Select/Select';
import CheckBox from './CheckBox';
import GlassIcon from './GlassIcon';
import styled from 'styled-components';
import axios from 'axios';
import ClinicItem from './ClinicItem';

const AreaOptions = [
  {
    label: '中正區',
    value: 1,
  },
  {
    label: '大同區',
    value: 2,
  },
  {
    label: '中山區',
    value: 3,
  },
  {
    label: '松山區',
    value: 4,
  },
  {
    label: '大安區',
    value: 5,
  },
  {
    label: '萬華區',
    value: 6,
  },
  {
    label: '信義區',
    value: 7,
  },
  {
    label: '士林區',
    value: 8,
  },
  {
    label: '北投區',
    value: 9,
  },
  {
    label: '內湖區',
    value: 10,
  },
  {
    label: '南港區',
    value: 11,
  },
  {
    label: '文山區',
    value: 12,
  },
];

const checkOptions = ['非犬貓', '24小時急診'];

const Check = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InfiniteScroll = styled.div`
  font-family: art;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: 480px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
  }
`;

const Button = styled.button`
  border: none;
  color: #fff;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 18px;
  cursor: pointer;
`;

function ClinicSelect({ setDataFromSelect, setLocation }) {
  const [selectedArea, setSelectedArea] = useState('');
  // const [selectedClinic, setSelectedClinic] = useState('');
  const [likeList, setLikeList] = useState([]);

  const [clinicList, setClinicList] = useState([]);
  const [showList, setShowList] = useState([]);

  const getClinic = async () => {
    try {
      const res = await axios.get('http://localhost:6001/clinic/list');
      setClinicList(res.data.rows);

      setShowList(res.data.rows);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getClinic();
  }, []);

  // useEffect(() => {
  //   const ClinicOptions = clinicList.filter((e, i) => {
  //     const { area } = e;
  //     return area === selectedArea;
  //   });
  //   setShowList(ClinicOptions);
  //   setDataFromSelect(ClinicOptions);
  // }, [selectedArea]);

  const filterClinic = () => {
    const clinicOptions = clinicList.filter((e, i) => {
      const { area } = e;
      return area === selectedArea;
    });
    setShowList(clinicOptions);

    const data = likeList;

    console.log(likeList);


    if (data.length === 0) {
      setShowList(clinicOptions);

      // console.log(clinicOptions);
    } else if (data.length === 1 && data[0] === '非犬貓') {
      const data1 = clinicOptions.filter((e, i) => {
        return e.type === 1;
      });
      setShowList(data1);

      // console.log(data1);
    } else if (data.length === 1 && data[0] === '24小時急診') {
      const data1 = clinicOptions.filter((e, i) => {
        return e.allday === 1;
      });
      setShowList(data1);

      // console.log(data1);
    } else {
      const data1 = clinicOptions.filter((e, i) => {
        return e.allday === 1 && e.type === 1;
      });
      setShowList(data1);

      // console.log(data1);
    }
  };
  setDataFromSelect(showList);
  return (
    <>
      <Select
        value={selectedArea}
        options={AreaOptions}
        placeholder="請選擇行政區"
        onSelect={(value) => setSelectedArea(value)}
      />
      {/* <Select
        value={selectedClinic}
        options={ClinicOptions}
        placeholder="請選擇診所"
        onSelect={(value) => setSelectedClinic(value)}
      /> */}
      <Check>
        {checkOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              value={v}
              checkedValueList={likeList}
              setCheckedValueList={setLikeList}
            />
          );
        })}
        <Button className="bg_main_light_color1" onClick={filterClinic}>
          <GlassIcon />
        </Button>
      </Check>
      <InfiniteScroll>
        {/* {console.log(dataFromItem)} */}
        {showList.map((e, i) => {
          const { name, address, mobile, code, sid, lat, lng } = e;
          return (
            <ClinicItem
              name={name}
              address={address}
              mobile={mobile}
              code={code}
              key={i}
              sid={sid}
              lat={lat}
              lng={lng}
              setLocation={setLocation}
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
}

export default ClinicSelect;
