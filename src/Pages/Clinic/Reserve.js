import React, { useEffect, useState, forwardRef} from 'react';
import styled from 'styled-components';
import Radio from './components/Radio';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { addDays, getDay } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const varietyOptions = ['狗', '貓', '其他'];
const genderOptions = ['公', '母'];
const controlOptions = ['未節育', '已節育'];

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

const PhotographerForm = styled.div`
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
  .reserve_form {
    .dayTime {
      display: flex;
      align-items: center;
      margin: 0 30px;
      width: 300px;
      h3 {
        font-weight: bold;
        font-family: art;
        color: #727171;
        margin-right: 65px;
        width: 218px;
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
    .address {
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

function Reserve() {
  const [clinicDetail, setClinicDetail] = useState([{
    name:'',
    address:'',
    mobile:'',
    code:''
  }]);

  const [variety, setVariety] = useState('');
  const [gender, setGender] = useState('');
  const [control, setControl] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [datepicker, setDatepicker] = useState(4);

  //取得qureyString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');

  if (!sid) {
    sid = '';
  } else {
    sid = `/reserve/${sid}`;
  }

  const getClinicData = async () => {
    try {
      const res = await axios.get(`http://localhost:6001/clinic/${sid}`);

      const clinicData = res.data.rows;

      setClinicDetail(clinicData);
    } catch (e) {
      console.log(e.message);
    }
  };
  const final = {...clinicDetail}
  
  console.log();

  useEffect(() => {
    getClinicData();
  }, [location]);


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
    <ReserveBox>
      <BreadcrumbBox>
        <Breadcrumb
          routes={Clinicroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <PhotographerForm>
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
              <h3>日期時段</h3>
              {datepicker === 4 ? (
                <DatePicker
                  selected={startDate}
                  dateFormat="yyyy/MM/dd"
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput/>}
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
                  customInput={<ExampleCustomInput />}
                  includeDateIntervals={[
                    {
                      start: addDays(new Date(), 0),
                      end: addDays(new Date(), 7),
                    },
                  ]}
                />
              )}

              <select name="time" id="time">
                <option value="A">上午</option>
                <option value="B">下午</option>
              </select>
            </div>
          </div>

          {/* <!-- 會員資料 --> */}
          <div className="member-data">
            <h2 className="text_main_dark_color2">飼主資料</h2>
            <div className="name">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" value="艾蜜莉" />
            </div>
            <div className="email">
              <label htmlFor="email">信箱</label>
              <input type="email" id="email" />
            </div>
            <div className="mobile">
              <label htmlFor="mobile">手機</label>
              <input type="text" id="mobile" />
            </div>
            <div className="address">
              <label htmlFor="address">地址</label>
              <select type="text" id="address">
                <option value="taipei">台北市</option>
              </select>
              <select type="text" id="address">
                <option value="1">大安區</option>
              </select>
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
                return (
                  <Radio
                    key={i}
                    value={v}
                    checkedValue={variety}
                    setCheckedValue={setVariety}
                  />
                );
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
                return (
                  <Radio
                    key={i}
                    value={v}
                    checkedValue={gender}
                    setCheckedValue={setGender}
                  />
                );
              })}
            </div>
            {/* <!-- 節育狀況 --> */}
            <div className="pet-control">
              <h1 htmlFor="control">性別</h1>
              {controlOptions.map((v, i) => {
                return (
                  <Radio
                    key={i}
                    value={v}
                    checkedValue={control}
                    setCheckedValue={setControl}
                  />
                );
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
                onclick="document.reservation.image.click()"
              >
                <i className="fa-regular fa-upload"></i>
                <p>上傳圖片</p>
              </div>
              <div
                className="img-file-wrap"
                onclick="document.reservation.image.click()"
              >
                <i className="fa-regular fa-upload"></i>
                <p>上傳圖片</p>
              </div>
              <div
                className="img-file-wrap"
                onclick="document.reservation.image.click()"
              >
                <i className="fa-regular fa-upload"></i>
                <p>上傳圖片</p>
              </div>
            </div>
          </div>
        </form>
      </PhotographerForm>
    </ReserveBox>
  );
}

export default Reserve;
