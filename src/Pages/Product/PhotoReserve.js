import React, { useEffect, useState, forwardRef, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { addDays, getDay } from 'date-fns';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useOutletContext } from 'react-router-dom';

import Radio from '../Clinic/components/Radio';
import Select from '../Clinic/components/Select';

const varietyOptions = ['狗', '貓', '其他'];
const genderOptions = ['公', '母'];
const controlOptions = ['未節育', '已節育'];

const ReserveForm = styled.div`
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
        width: 293px;
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
      display: flex;
      align-items: center;
      justify-content: start;
      height: 30px;
      label {
        font-weight: bold;
        margin: 0 110px 0 30px;
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
      margin: 0px 30px;
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
        margin: 0 80px 0 30px;
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
      align-items: center;
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

function PhotoReserve() {
  const [
    memberId,
    setMemberId,
    petId,
    setPetId,
    photographerDetail,
    setPhotographerDetail,
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
    which,
    setWhich,
  ] = useOutletContext();
  const final = { ...photographerDetail };
  console.log(final);

  const [cityData, setCityData] = useState([
    {
      sid: '',
      city_name: '',
    },
  ]);
  const [areaData, setAreaData] = useState([
    {
      sid: '',
      area_name: '',
      city_sid: '',
    },
  ]);

  const [memberData, setMemberData] = useState([
    {
      sid: '',
      name: '',
    },
  ]);

  const [petData, setPetData] = useState([
    {
      sid: '',
      name: '',
    },
  ]);

  const timeData = [
    {
      label: '早上',
      value: 1,
    },
    {
      label: '下午',
      value: 2,
    },
  ];

  // const [filterArea, setFilterArea] = useState([]);
  const [filterTime, setFilterTime] = useState([]);

  //圖片上傳
  //選擇檔案
  const [selectedFile, setSelectedFile] = useState(null);
  //是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false);
  //預覽圖片

  //取出localStorage memberID

  const memberID = JSON.parse(localStorage.getItem('auth'));
  // console.log(memberID.sid);

  // console.log(usp.toString());

  //拿到會員基本資料
  const getMemberData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:6001/clinic/member/${memberID.sid}`
      );

      const memberData = res.data.rows[0];

      // console.log(memberData);

      setMemberData(memberData);
      console.log(memberData.area_sid);
      setMemberId(memberData.sid);
      setMemberName(memberData.name);
      setMemberEmail(memberData.email);
      setMemberMobile(memberData.mobile);
      setCity(memberData.city_sid);
      setArea(memberData.area_sid);
      setAddress(memberData.address_detail);
    } catch (e) {
      console.log(e.message);
    }
  };
  // console.log(areaData);

  //拿到寵物基本資料
  const getPetData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:6001/clinic/pet/${memberID.sid}`
      );
      const petData = res.data.rows;

      //處理寵物年紀
      const data = petData.map((e, i) => {
        const { pet_birthday } = e;
        const birth = dayjs(pet_birthday).valueOf();

        const now = Date.now();

        const final = Math.ceil((now - birth) / (365.25 * 24 * 60 * 60 * 1000));

        return { ...petData[i], pet_age: final };
      });

      console.log(final);


      // console.log(petData);
      setPetData(data);
      setPetId(petData[which].sid);
      setPetName(petData[which].pet_name);
      setVariety(petData[which].Kind_of_pet);
      setGender(petData[which].pet_gender);
      setControl(petData[which].birth_control);
      setPetPid(petData[which].pet_pid);
    } catch (e) {
      console.log(e.message);
    }
  };

  setPetAge(petData[which].pet_age);

  useEffect(() => {
    setPetId(petData[which].sid);
    setPetAge(petData[which].pet_age);
    setPetName(petData[which].pet_name);
    setVariety(petData[which].Kind_of_pet);
    setGender(petData[which].pet_gender);
    setControl(petData[which].birth_control);
    setPetPid(petData[which].pet_pid);
  }, [which]);

  //拿到city資料
  const getCityData = async () => {
    try {
      const res = await axios.get(`http://localhost:6001/clinic/citydata`);
      const cityData = res.data.rows;

      const data = cityData.map((e) => {
        return {
          value: e.sid,
          label: e.city_name,
        };
      });
      setCityData(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  //拿到area資料
  const getAreaData = async () => {
    try {
      const res = await axios.get(`http://localhost:6001/clinic/areadata`);
      const areaData = res.data.rows;

      const data = areaData.map((e) => {
        return {
          value: e.sid,
          label: e.area_name,
          cityid: e.city_sid,
        };
      });

      setAreaData(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getCityData();
    getAreaData();
    getMemberData();
    getPetData();
  }, []);

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 1;
  };

  const filterTimeA = () => {
    const day = getDay(startDate);
    const type = final[0].time;
    // console.log(day, type);

    if (
      (type === 2 && day === 2) ||
      (type === 2 && day === 3) ||
      (type === 2 && day === 4) ||
      (type === 2 && day === 0) ||
      (type === 4 && day === 6) ||
      (type === 4 && day === 0)
    ) {
      const filte = timeData.filter((e) => {
        return e.value !== 1;
      });
      return setFilterTime(filte);
    } else if (
      (type === 2 && day === 0) ||
      (type === 3 && day === 1) ||
      (type === 3 && day === 2) ||
      (type === 3 && day === 3) ||
      (type === 3 && day === 4) ||
      (type === 3 && day === 5) ||
      (type === 3 && day === 6)
    ) {
      const filte = timeData.filter((e) => {
        return e.value !== 3;
      });
      return setFilterTime(filte);
    }

    setFilterTime(timeData);
  };

  useEffect(() => {
    filterTimeA();
  }, [startDate]);

  //當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);
    console.log(objectUrl);

    //當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsFilePicked(true);
      setSelectedFile(file);
    } else {
      setIsFilePicked(false);
      setSelectedFile(null);
    }
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

  //上傳圖片Button
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // const date = dayjs(startDate).format('YYYY/MM/DD');

  return (
    <ReserveForm>
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
            {final[0].time === 4 ? (
              <DatePicker
                className="date_picker"
                selected={startDate}
                dateFormat="yyyy/MM/dd"
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
                filterDate={isWeekday}
                includeDateIntervals={[
                  {
                    start: addDays(new Date(), 0),
                    end: addDays(new Date(), 30),
                  },
                ]}
              />
            ) : (
              <DatePicker
                className="date_picker"
                selected={startDate}
                dateFormat="yyyy/MM/dd"
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
                includeDateIntervals={[
                  {
                    start: addDays(new Date(), 0),
                    end: addDays(new Date(), 30),
                  },
                ]}
              />
            )}
            <Select
              value={time}
              options={filterTime}
              placeholder="請選擇時段"
              onSelect={(value) => setTime(value)}
            />
          </div>
        </div>

        {/* <!-- 會員資料 --> */}
        <div className="member-data">
          <input type="hidden" value={memberId} />
          <h2 className="text_main_dark_color2">飼主資料</h2>
          <div className="name">
            <label htmlFor="name">姓名</label>
            <input type="text" id="name" value={memberName} disabled />
          </div>
          <div className="email">
            <label htmlFor="email">信箱</label>
            <input
              type="email"
              id="email"
              value={memberEmail}
              onChange={(e) => {
                setMemberEmail(e.target.value);
              }}
            />
          </div>
          <div className="mobile">
            <label htmlFor="mobile">手機</label>
            <input
              type="text"
              id="mobile"
              value={memberMobile}
              onChange={(e) => {
                setMemberMobile(e.target.value);
              }}
            />
          </div>
        </div>

        {/* <!-- 寵物資料 --> */}
        <div className="pet-data">
          <input type="hidden" value={petId} />
          <div
            style={{
              display: 'flex',
              margin: '50px 0px',
              alignItems: 'center',
            }}
          >
            <h2 className="text_main_dark_color2">寵物資料</h2>
            <select
              name=""
              id=""
              onChange={(e) => {
                setWhich(e.target.value);
              }}
              style={{
                borderRadius: '10px',
                width: '100px',
                height: '20px',
                marginLeft: '40px',
              }}
            >
              {petData.map((e, i) => {
                const { pet_name } = e;
                return (
                  <option value={i} key={i}>
                    {pet_name}
                  </option>
                );
              })}
            </select>
          </div>

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
                  disabled
                />
              );
            })}
          </div>
          {/* <!-- 寵物名稱 --> */}
          <div className="pet-name">
            <label htmlFor="pet-name">名稱</label>
            <input
              type="tezt"
              id="pet-name"
              value={petName}
              onChange={(e) => {
                setPetName(e.target.value);
              }}
              disabled
            />
          </div>
          {/* <!-- 寵物年紀 --> */}
          <div className="pet-age">
            <label htmlFor="pet-age">年紀</label>
            <input type="number" id="pet-age" value={petAge} disabled />
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
                  disabled
                />
              );
            })}
          </div>
          <div className="pet-image">
            <label htmlFor="pet-image">上傳圖片</label>
            <div className="img-file-wrap" onClick={handleClick}>
              {isFilePicked ? (
                <img src={preview} alt="" style={{ width: '100%' }} />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
              )}
            </div>
            <input
              type="file"
              name="file"
              className="img-file-wrap"
              onChange={changeHandler}
              ref={hiddenFileInput}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <Link to="/product/photographers/check">
          <button
            className="bg_main_light_color1"
            style={{
              borderRadius: '20px',
              padding: '10px 20px',
              border: 'none',
              fontFamily: 'art',
              color: '#fff',
              fontSize: '16px',
              marginLeft: '200px',
              width: '150px',
            }}
          >
            確認預約
          </button>
        </Link>
      </form>
    </ReserveForm>
  );
}

export default PhotoReserve;
