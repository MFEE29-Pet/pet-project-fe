import React from 'react';
import './style/photo.scss';
import { PHOTOGRAPH_FORM } from './my-config';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { addDays, getDay } from 'date-fns';
import DatePicker from 'react-datepicker';
import { MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';

// import Radio from '../../Pages/Clinic/'

const varietyOptions = ['狗', '貓', '其他'];
const genderOptions = ['公', '母'];
const controlOptions = ['未節育', '已節育'];

const PhotoRoutes = [
  {
    to: '/product',
    label: '所有商品',
  },
  {
    to: '/product/photographers',
    label: '攝影服務',
  },
  {
    to: `/product/photographers`,
    label: '預約攝影',
  },
];

const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const PhotographersForm = styled.div`
  background-color: #fff;
  width: 1200px;
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
    .form_address {
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
  .reserve_form {
    .dayTime {
      display: flex;
      align-items: center;
      margin: 0 30px;
      width: 440px;
      h3 {
        font-weight: bold;
        font-family: art;
        color: #727171;
        margin-right: 65px;
      }
    }
    .reserve-time {
      h2 {
        font-size: 18px;
        font-family: art;
        font-weight: bold;
        margin: 50px 30px;
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
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
      }
      input {
        margin-left: 30px;
      }
    }
    .email {
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
      }
      input {
        margin-left: 30px;
      }
    }
    .mobile {
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
      }
      input {
        margin-left: 30px;
      }
    }
    .form_address {
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
      }
      select {
        margin-left: 30px;
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
      height: 30px;
      h1 {
        font-weight: bold;
        margin: 0 110px 0 30px;
        font-family: art;
        color: #727171;
        font-size: 16px;
      }
      input {
        margin-left: 30px;
      }
    }
    .pet-name {
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
      }
      input {
        margin-left: 30px;
      }
    }
    .pet-age {
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
      }
      input {
        margin-left: 30px;
      }
    }
    .pet-gender {
      display: flex;
      align-items: center;
      height: 30px;
      h1 {
        font-weight: bold;
        margin: 0 110px 0 30px;
        font-family: art;
        color: #727171;
        font-size: 16px;
      }
      input {
        margin-left: 30px;
      }
    }
    .pet-control {
      display: flex;
      align-items: center;
      height: 30px;
      h1 {
        font-weight: bold;
        margin: 0 110px 0 30px;
        font-family: art;
        color: #727171;
        font-size: 16px;
      }
      input {
        margin-left: 30px;
      }
    }
    .pet-pid {
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
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
        color: #727171;
      }
      textarea {
        border-radius: 20px;
        border: 1px solid #dcdddd;
      }
    }
    .pet-image {
      display: flex;
      align-items: flex-start;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #727171;
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
        cursor: pointer;
        border-radius: 10px;
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

function PhotographerForm() {
  const [variety, setVariety] = useState('');
  const [gender, setGender] = useState('');
  const [control, setControl] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [datepicker, setDatepicker] = useState(4);
  const [selectedTime, setSelectedTime] = useState('');

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [data, setData] = useState([{ name: '' }]);
  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');
  if (!sid) {
    sid = '';
  } else {
    sid = `/${sid}`;
  }
  console.log({ sid });

  // 取得攝影師資料
  const getPhotoGraphData = async () => {
    try {
      const res = await axios.get(`${PHOTOGRAPH_FORM}${sid}`);

      // console.log(res);

      const photoData = res.data.rows;
      setData(photoData);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(data);
  // didMount 載入資料
  useEffect(() => {
    getPhotoGraphData();
  }, []);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 1;
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        fontFamily: 'art',
        border: '2px solid #dcdddd',
        padding: '5px 15px',
      }}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      {value}
    </button>
  ));

  return (
    <>
      <main>
        {/* <!-- breadcrumb --> */}
        {/* <nav className="nav-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">購物商城</a>
            </li>
            <li className="breadcrumb-item">其他</li>
            <li className="breadcrumb-item">
              <a href="#">寵物攝影</a>
              <span>{'>'}</span>
            </li>
            <li className="breadcrumb-item">預約表單</li>
          </ol>
        </nav> */}

        {/* <div className="photographer-form">
          <h1>預約寵物攝影</h1>
          <div className="photographer-name">
            <i className="fa-solid fa-camera"></i>
            <p>
              攝影師 <span>{data[0].name}</span>
            </p>
          </div> */}
        {/* <div className="photographer-form"> */}

        <PhotographersForm className="photographer-form">
          <BreadcrumbBox>
            <Breadcrumb
              routes={PhotoRoutes}
              separator={<BreadcrumbRightArrowIcon />}
            />
          </BreadcrumbBox>
          <h1>預約寵物攝影</h1>
          <div className="photographerInfo" style={{ display: 'flex' }}>
            <div className="photographer-name">
              <i
                className="fa-solid fa-camera text_main_light_color1"
                style={{ fontSize: '20px' }}
              ></i>
              <p style={{ marginRight: '10px' }}>
                攝影師 <span>{data[0].name}</span>
              </p>
            </div>
            <div className="content_box">
              <div className="mobile">
                <i
                  className="fa-sharp fa-solid fa-phone text_main_light_color1"
                  style={{ fontSize: '20px', marginRight: '15px' }}
                ></i>
                <p className="text_main_dark_color2">{data[0].phone}</p>
              </div>
            </div>
          </div>
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
                <h3 style={{ marginRight: '80px' }}>日期時段</h3>
                {datepicker === 4 ? (
                  <DatePicker
                    selected={startDate}
                    dateFormat="yyyy/MM/dd"
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    filterDate={isWeekday}
                    includeDateIntervals={[
                      {
                        start: addDays(new Date(), 0),
                        end: addDays(new Date(), 7),
                      },
                    ]}
                  />
                ) : (
                  <DatePicker
                    selected={startDate}
                    dateFormat="yyyy/MM/dd"
                    onChange={(date) => setStartDate(date)}
                    // customInput={<ExampleCustomInput />}
                    includeDateIntervals={[
                      {
                        start: addDays(new Date(), 0),
                        end: addDays(new Date(), 7),
                      },
                    ]}
                  />
                )}
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    id="demo-select-small"
                    value={age}
                    onChange={handleChange}
                    style={{
                      borderRadius: '20px',
                      height: '30px',
                      border: '2px solid #dcdddd',
                      fontFamily: 'art',
                    }}
                  >
                    <MenuItem value={1} style={{ fontFamily: 'art' }}>
                      早上
                    </MenuItem>
                    <MenuItem value={2} style={{ fontFamily: 'art' }}>
                      下午
                    </MenuItem>
                    <MenuItem value={3} style={{ fontFamily: 'art' }}>
                      晚上
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* <!-- 會員資料 --> */}
            <div className="member-data">
              <h2 className="text_main_dark_color2">飼主資料</h2>
              <div className="name">
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" defaultValue="艾蜜莉" />
              </div>
              <div className="email">
                <label htmlFor="email">信箱</label>
                <input type="email" id="email" />
              </div>
              <div className="mobile">
                <label htmlFor="mobile">手機</label>
                <input type="text" id="mobile" />
              </div>
              <div className="form_address">
                <label htmlFor="address">地址</label>
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  style={{ margin: 0 }}
                  size="small"
                >
                  <Select
                    id="demo-select-small"
                    value={age}
                    onChange={handleChange}
                    style={{
                      borderRadius: '20px',
                      height: '30px',
                      border: '2px solid #dcdddd',
                      fontFamily: 'art',
                      margin: 0,
                    }}
                  >
                    <MenuItem value={1} style={{ fontFamily: 'art' }}>
                      早上
                    </MenuItem>
                    <MenuItem value={2} style={{ fontFamily: 'art' }}>
                      下午
                    </MenuItem>
                    <MenuItem value={3} style={{ fontFamily: 'art' }}>
                      晚上
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  style={{ margin: 0, border: 'none' }}
                  size="small"
                >
                  <Select
                    id="demo-select-small"
                    value={age}
                    onChange={handleChange}
                    style={{
                      borderRadius: '20px',
                      height: '30px',
                      border: '2px solid #dcdddd',
                      fontFamily: 'art',
                      margin: 0,
                    }}
                  >
                    <MenuItem value={1} style={{ fontFamily: 'art' }}>
                      早上
                    </MenuItem>
                    <MenuItem value={2} style={{ fontFamily: 'art' }}>
                      下午
                    </MenuItem>
                    <MenuItem value={3} style={{ fontFamily: 'art' }}>
                      晚上
                    </MenuItem>
                  </Select>
                </FormControl>
                <input type="text" name="road" id="address" />
              </div>
            </div>

            {/* <!-- 寵物資料 --> */}
            <div className="pet-data">
              <h2 className="text_main_dark_color2">寵物資料</h2>
              <div className="pet-variety">
                {/* <!-- 寵物種類 --> */}
                <h1 htmlFor="variety">種類</h1>
                {varietyOptions.map((v, i) => {
                  // return (
                  //   // <Radio
                  //   //   key={i}
                  //   //   value={v}
                  //   //   checkedValue={variety}
                  //   //   setCheckedValue={setVariety}
                  //   // />
                  // );
                })}
              </div>
              {/* <!-- 寵物名稱 --> */}
              <div className="pet-name">
                <label htmlFor="pet-name">名稱</label>
                <input type="tezt" id="pet-name" />
              </div>
              {/* <!-- 寵物年紀 --> */}
              <div className="pet-age">
                <label htmlFor="pet-age">年紀</label>
                <input type="number" id="pet-age" />
              </div>
              {/* <!-- 寵物性別 --> */}
              <div className="pet-gender">
                <h1 htmlFor="gender">性別</h1>
                {genderOptions.map((v, i) => {
                  // return (
                  //   // <Radio
                  //   //   key={i}
                  //   //   value={v}
                  //   //   checkedValue={gender}
                  //   //   setCheckedValue={setGender}
                  //   // />
                  // );
                })}
              </div>
              {/* <!-- 節育狀況 --> */}
              <div className="pet-control">
                <h1 htmlFor="control">性別</h1>
                {controlOptions.map((v, i) => {
                  // return (
                  //   // <Radio
                  //   //   key={i}
                  //   //   value={v}
                  //   //   checkedValue={control}
                  //   //   setCheckedValue={setControl}
                  //   // />
                  // );
                })}
              </div>
              {/* 晶片編號 */}
              <div className="pet-pid">
                <label htmlFor="pet-pid">晶片編號</label>
                <span style={{ fontFamily: 'art', marginRight: '5px' }}>
                  PID-
                </span>
                <input type="text" id="pet-pid" />
              </div>
              {/* 不適症狀 */}
              <div className="pet-symptom">
                <label htmlFor="pet-symptom">不適症狀</label>
                <textarea
                  name="pet-symptom"
                  id="pet-symptom"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="pet-image">
                <label htmlFor="pet-image">上傳圖片</label>
                <input type="file" name="image" multiple hidden />
                <div
                  className="img-file-wrap"
                  // onClick={document.reservation.image.click()}
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
                <div
                  className="img-file-wrap"
                  // onClick={document.reservation.image.click()}
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
                <div
                  className="img-file-wrap"
                  // onClick={document.reservation.image.click()}
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
              </div>
            </div>
          </form>
        </PhotographersForm>
      </main>

      <div className="go-to-top">
        <svg
          width="333"
          height="460"
          viewBox="0 0 333 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 64H300.5C318.2 64 332.5 49.7 332.5 32C332.5 14.3 318.2 0 300.5 0H32C14.3 0 0 14.3 0 32C0 49.7 14.3 64 32 64ZM48.7 212.5C36.2 225 36.2 245.3 48.7 257.8C61.2 270.3 81.5 270.3 94 257.8L135.3 216.4V321.75V427.1C135.3 444.8 149.6 459.1 167.3 459.1C185 459.1 199.3 444.8 199.3 427.1V216.4L240.7 257.8C253.2 270.3 273.5 270.3 286 257.8C298.5 245.3 298.5 225 286 212.5L190 116.5C177.5 104 157.2 104 144.7 116.5L48.7 212.5Z"
            fill="#fff"
          />
        </svg>
      </div>
    </>
  );
}

export default PhotographerForm;
