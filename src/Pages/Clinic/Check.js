import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';

const CheckForm = styled.div`
  font-family: art;
  .reserve_form {
    .dayTime {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-family: art;
        color: #727171;
        margin-right: 30px;
        font-weight: 500;
      }
    }
    .reserve-time {
      h2 {
        font-size: 18px;
        font-family: art;
        font-weight: bold;
        margin: 50px 30px;
      }
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
    }
  }
  .member-data {
    div {
      margin: 30px 0;
    }
    h2 {
      font-size: 18px;
      font-family: art;
      font-weight: bold;
      margin: 50px 30px;
    }
    .name {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .email {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .mobile {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .address {
      display: flex;
      align-items: center;
      justify-content: start;
      height: 30px;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
  }
  .pet-data {
    div {
      margin: 30px 0;
    }
    h2 {
      font-size: 18px;
      font-family: art;
      font-weight: bold;
      margin: 50px 30px;
    }
    .pet-variety {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-name {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-age {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-gender {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-control {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-pid {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-symptom {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-image {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      .img-file-wrap {
        width: 150px;
        height: 120px;
        border: 1px dashed #dcdddd;
        margin: 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        p,
        i {
          color: #dcdddd;
          margin-bottom: 10px;
        }

        p {
          font-weight: bold;
        }
      }
    }
  }
`;

function Check() {
  const navigate = useNavigate();
  const [
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
  ] = useOutletContext();

  const [cityName, setCityName] = useState('');
  const [areaName, setAreaName] = useState('');

  const final = { ...clinicDetail };
  // console.log(final);
  const clinicId = final[0].sid;
  const date = dayjs(startDate).format('YYYY/MM/DD');

  console.log({ memberId, petId, textArea, date, time, clinicId });

  let datatime = '';

  if (time === 1) {
    datatime = '早診';
  } else if (time === 2) {
    datatime = '午診';
  } else if (time === 3) {
    datatime = '晚診';
  }

  // //傳送表單
  const handleSubmission = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append('clinic_sid', clinicId);
    fd.append('member_sid', memberId);
    fd.append('pet_sid', petId);
    fd.append('symptom', textArea);
    fd.append('date', date);
    fd.append('time', time);

    const { data } = await axios.post('http://localhost:6001/clinic/add', fd);
    if (data.success === true) {
      navigate('/');
    }

    console.log(data);
  };


  const getCityName = async () => {
    const res = await axios.get(
      `http://localhost:6001/clinic/cityname/${city}`
    );
    const data = res.data.rows[0];

    console.log(data);

    setCityName(data.city_name) ;
  };
  console.log(cityName);

  const getAreaName = async () => {
    const  res  = await axios.get(
      `http://localhost:6001/clinic/areaname/${area}`
    );
    const data = res.data.rows[0];

    console.log(data);

    setAreaName(data.area_name) ;
  };

  useEffect(() => {
    getCityName();
    getAreaName();
  }, []);

  return (
    <CheckForm>
      <form
        id="reservation"
        name="reservation"
        action=""
        className="reserve_form"
      >
        {/* <!-- 預約時段 --> */}
        <div className="reserve-time">
          <h2 className="text_main_dark_color2">預約時間</h2>
          <div className="dayTime">
            <label>日期時段</label>
            <h3>{date}</h3>
            <h3>{datatime}</h3>
          </div>
        </div>

        {/* <!-- 會員資料 --> */}
        <div className="member-data">
          <h2 className="text_main_dark_color2">飼主資料</h2>
          <div className="name">
            <label htmlFor="name">姓名</label>
            <h3>{memberName}</h3>
          </div>
          <div className="email">
            <label htmlFor="email">信箱</label>
            <h3>{memberEmail}</h3>
          </div>
          <div className="mobile">
            <label htmlFor="mobile">手機</label>
            <h3>{memberMobile}</h3>
          </div>
          <div className="address">
            <label htmlFor="address">地址</label>
            <h3>{cityName}</h3>
            <h3>{areaName}</h3>
            <h3>{address}</h3>
          </div>
        </div>

        {/* <!-- 寵物資料 --> */}
        <div className="pet-data">
          <h2 className="text_main_dark_color2">寵物資料</h2>
          <div className="pet-variety">
            {/* <!-- 寵物種類 --> */}
            <label htmlFor="variety">種類</label>
            <h3>{variety}</h3>
          </div>
          {/* <!-- 寵物名稱 --> */}
          <div className="pet-name">
            <label htmlFor="pet-name">名稱</label>
            <h3>{petName}</h3>
          </div>
          {/* <!-- 寵物年紀 --> */}
          <div className="pet-age">
            <label htmlFor="pet-age">年紀</label>
            <h3>{petAge}歲</h3>
          </div>
          {/* <!-- 寵物性別 --> */}
          <div className="pet-gender">
            <label htmlFor="gender">性別</label>
            <h3>{gender}</h3>
          </div>
          {/* <!-- 節育狀況 --> */}
          <div className="pet-control">
            <label htmlFor="control">節育狀況</label>
            <h3>{control}</h3>
          </div>
          {/* 晶片編號 */}
          <div className="pet-pid">
            <label htmlFor="pet-pid">晶片編號</label>
            <h3>PID-{petPid}</h3>
          </div>
          {/* 不適症狀 */}
          <div className="pet-symptom">
            <label htmlFor="pet-symptom">不適症狀</label>
            <div style={{ maxWidth: '400px', margin: '0px' }}>{textArea}</div>
          </div>
          <div className="pet-image">
            <label htmlFor="pet-image">上傳圖片</label>
            <div className="img-file-wrap">
              <div>
                <img src={preview} alt="" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        <Link to="/clinic/reserve" style={{ marginLeft: '200px' }}>
          <button
            className=""
            style={{
              borderRadius: '20px',
              padding: '10px 20px',
              border: 'none',
              fontFamily: 'art',
              color: '#000000',
              fontSize: '16px',
              backgroundColor: 'transparent',
            }}
          >
            <i
              className="fa-light fa-arrow-rotate-left"
              style={{
                fontSize: '20px',
                textAlign: 'center',
                lineHeight: '20px',
                marginRight: '5px',
              }}
            ></i>
            返回修改
          </button>
        </Link>
        <Link to="/clinic/check" style={{ marginLeft: '200px' }}>
          <button
            className="bg_main_light_color1"
            style={{
              borderRadius: '20px',
              padding: '10px 20px',
              border: 'none',
              fontFamily: 'art',
              color: '#fff',
              fontSize: '16px',
              width: '150px',
            }}
            onClick={handleSubmission}
          >
            確認送出
          </button>
        </Link>
      </form>
    </CheckForm>
  );
}

export default Check;
