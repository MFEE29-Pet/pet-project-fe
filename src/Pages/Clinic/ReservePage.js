import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Clinicroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/clinic',
    label: '地圖診所',
  },
  {
    to: '/clinic/reserve',
    label: '預約掛號',
  },
];

const ReserveBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const ReserveForm = styled.div`
  background-color: #fff;
  width: 1000px;
  border-radius: 15px;
  padding: 50px 80px;
  input {
    border-radius: 20px;
    border: 2px solid #dcdddd;
    padding: 5px 15px;
    color: #727171;
    font-size: 14px;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    font-family: art;
  }
  .content_box {
    display: flex;
    .address {
      display: flex;
      margin: 20px 0;
      align-items: center;
      margin-right: 20px;
      i {
        margin-right: 20px;
        font-size: 24px;
      }
      p {
        font-size: 14px;
        font-family: art;
      }
    }
    .mobile {
      display: flex;
      margin: 20px 0;
      align-items: center;
      i {
        margin-right: 20px;
        font-size: 24px;
      }
      p {
        font-size: 14px;
        font-family: art;
      }
    }
  }
`;

function ReservePage() {
  const [clinicDetail, setClinicDetail] = useState([
    {
      name: '',
      address: '',
      mobile: '',
      code: '',
    },
  ]);
  const [memberId, setMemberId] = useState(0);
  const [petId, setPetId] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(0);
  const [memberName, setMemberName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [memberMobile, setMemberMobile] = useState('');
  const [city, setCity] = useState(0);
  const [area, setArea] = useState(0);
  const [address, setAddress] = useState('');
  const [variety, setVariety] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [gender, setGender] = useState('');
  const [control, setControl] = useState('');
  const [petPid, setPetPid] = useState('');
  const [textArea, setTextArea] = useState('');
  const [preview, setPreview] = useState('');

  console.log(startDate);
  //取得qureyString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');

  if (!sid) {
    sid = '';
  } else {
    sid = `/reserve/${sid}`;
  }
  //拿到clinicSingle資料
  const getClinicData = async () => {
    try {
      const res = await axios.get(`http://localhost:6001/clinic/${sid}`);
      console.log(res);

      const clinicData = res.data.rows;

      setClinicDetail(clinicData);
    } catch (e) {
      console.log(e.message);
    }
  };
  const final = { ...clinicDetail };
  useEffect(() => {
    getClinicData();
  }, []);
  return (
    <ReserveBox>
      <BreadcrumbBox>
        <Breadcrumb
          routes={Clinicroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <ReserveForm>
        <h1 className="text_main_dark_color2">{final[0].name}</h1>
        <div className="content_box">
          <div className="address">
            <i className="fa-sharp fa-solid fa-location-dot text_main_light_color1"></i>
            <p className="text_main_dark_color2">
              {final[0].code}
              {final[0].address}
            </p>
          </div>
          <div className="mobile">
            <i className="fa-sharp fa-solid fa-phone text_main_light_color1"></i>
            <p className="text_main_dark_color2">{final[0].mobile}</p>
          </div>
        </div>
        <Outlet
          context={[
            memberId,
            setMemberId,
            petId,
            setPetId,
            clinicDetail,
            setClinicDetail,
            startDate,
            setStartDate,
            time,
            setTime,
            memberName,
            setMemberName,
            memberEmail,
            setMemberEmail,
            memberMobile,
            setMemberMobile,
            city,
            setCity,
            area,
            setArea,
            address,
            setAddress,
            variety,
            setVariety,
            petName,
            setPetName,
            petAge,
            setPetAge,
            gender,
            setGender,
            control,
            setControl,
            petPid,
            setPetPid,
            textArea,
            setTextArea,
            preview,
            setPreview,
          ]}
        />
      </ReserveForm>
    </ReserveBox>
  );
}

export default ReservePage;
