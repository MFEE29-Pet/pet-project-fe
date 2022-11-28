import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { textAlign } from '@mui/system';
import AuthContext from '../../contexts/AuthContext';

function MemberProfileUp() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [gender, setGender] = useState('');
  const { setMyAuth, myAuth } = useContext(AuthContext);
  const [memberData, setMemberData] = useState([
    {
      sid: '',
      name: '',
      account: '',
      gender: '',
      password: '',
      member_photo: '',
      city: '',
      area: '',
      address: '',
      level: '',
      birthday: '',
      email: '',
      mobile: '',
      create_at: '',
    },
  ]);
  const genderWrap = ['生理男', '生理女', '其他'];

  const yearList = [];
  const monthList = [];
  const dayList = [];
  const days = new Date(year, month, 0).getDate();

  for (let i = 1900; i <= 2055; i++) {
    yearList.push(i);
  }
  for (let i = 1; i <= 12; i++) {
    monthList.push(i);
  }
  for (let i = 1; i <= days; i++) {
    dayList.push(i);
  }

  const [cityData, setCityData] = useState([
    {
      sid: '',
      city_name: '',
    },
  ]);

  const [areaData, setAreaData] = useState([
    {
      sid: '',
      city_name: '',
      city_sid: '',
    },
  ]);

  const [filterAreaData, setFilterAreaData] = useState([
    {
      sid: '',
      name: '',
      city_sid: '',
    },
  ]);

  //圖片上傳
  //選擇檔案
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log(selectedFile);
  //是否有檔案被選到
  const [isFilePicked, setIsFilePicked] = useState(null);
  //預覽圖片
  const [preview, setPreview] = useState('');

  //當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);

    console.log(objectUrl);

    setPreview(objectUrl);

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
  //上傳圖片Button
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const memberID = JSON.parse(localStorage.getItem('auth'));
  const getMemberData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:6001/member/memberdata/${memberID.sid}`
      );

      const data = res.data.rows;

      const m_data = data.map((e, i) => {
        const { birthday } = e;
        return { ...data[0], birthday: dayjs(birthday).format('YYYY/M/D') };
      });

      // console.log(m_data);

      setMemberData(m_data);

      setName(m_data[0].name);
      setMail(m_data[0].email);
      setMobile(m_data[0].mobile);
      setCity(m_data[0].city);
      setArea(m_data[0].area);
      setAddress(m_data[0].address);
      setGender(m_data[0].gender);
      const birthSplit = m_data[0].birthday.split('/');
      setYear(birthSplit[0]);
      setMonth(birthSplit[1]);
      setDay(birthSplit[2]);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getCityData = async () => {
    try {
      const res = await axios(`http://localhost:6001/member/citydata`);

      const citydata = res.data.rows;

      setCityData(citydata);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getAreaData = async () => {
    try {
      const res = await axios(`http://localhost:6001/member/areadata`);

      const areadata = res.data.rows;

      setAreaData(areadata);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMemberData();
    getCityData();
    getAreaData();
  }, []);

  useEffect(() => {
    // console.log(areaData);
    const filterData = areaData.filter((e, i) => {
      const { city_sid } = e;
      return city_sid == city;
    });
    setFilterAreaData(filterData);
  }, [city]);

  const saveData = async () => {
    const d = dayjs(Date.parse(`${year}-${month}-${day}`)).format('YYYY/MM/DD');

    const fd = new FormData();

    fd.append('name', name);
    fd.append('mail', mail);
    fd.append('mobile', mobile);
    fd.append('city', city);
    fd.append('area', area);
    fd.append('address', address);
    fd.append('birthday', d);
    fd.append('gender', gender);
    fd.append('member_photo', selectedFile);
    fd.append('sid', memberID.sid);

    const { data } = await axios.put('http://localhost:6001/member/edit', fd);
    console.log(data);

    setMyAuth({ ...myAuth, member_photo: data.img });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        marginTop: '80px',
        fontSize: '20px',
      }}
    >
      <div className="pageProfileUp">
        <div className="page-left">
          <div className="enter-P user">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>使用者帳號</h2>
            <div style={{ fontSize: '18px', color: '#727171', width: '250px' }}>
              {memberData[0].account}
            </div>
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>姓名</h2>
            <div
              style={{
                display: 'flex',
                width: '250px',
                justifyContent: 'start',
              }}
            >
              <input
                type="text"
                className="dd"
                value={name}
                style={{
                  width: '100px',
                  border: '1px solid #727171',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>信箱</h2>
            <input
              type="text"
              className="dd"
              value={mail}
              style={{
                border: '1px solid #727171',
                outline: 'none',
                backgroundColor: 'transparent',
              }}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>手機</h2>
            <input
              type="text"
              className="dd"
              value={mobile}
              style={{
                border: '1px solid #727171',
                outline: 'none',
                backgroundColor: 'transparent',
              }}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <div className="enter-P">
            <h2
              style={{
                fontSize: '18px',
                color: '#727171',
                verticalAlign: 'top"',
              }}
            >
              地址
            </h2>
            <div className="addressA">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div className="enter-M">
                  <select
                    name=""
                    id=""
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  >
                    {cityData.map((e, i) => {
                      const { sid, city_name } = e;
                      return (
                        <option value={sid} key={i}>
                          {city_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="enter-M">
                  <select
                    name=""
                    id=""
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                    }}
                  >
                    {filterAreaData.map((e, i) => {
                      const { area_name, sid } = e;
                      return (
                        <option value={sid} key={i}>
                          {area_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <input
                type="text"
                className="dd"
                value={address}
                style={{
                  border: '1px solid #727171',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="enter-P" style={{ marginTop: '50px' }}>
            <h2 style={{ fontSize: '18px', color: '#727171' }}>性別</h2>
            <div className="radio">
              {genderWrap.map((v, i) => {
                return (
                  <span key={i}>
                    <input
                      type="radio"
                      value={v}
                      checked={gender === v}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      style={{ margin: '0px' }}
                    />
                    <label
                      htmlFor=""
                      style={{ color: '#727171', fontSize: '16px' }}
                    >
                      {v}
                    </label>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>生日</h2>
            <div className="member_date">
              <div className="enter-L">
                <select
                  name=""
                  id=""
                  value={year}
                  className="year"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  <option>年</option>
                  {yearList.map((e, i) => {
                    return (
                      <option value={e} key={i}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="enter-L">
                <select
                  name=""
                  id=""
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                >
                  <option>月</option>
                  {monthList.map((e, i) => {
                    return (
                      <option value={e} key={i}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="enter-L">
                <select
                  name=""
                  id=""
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                >
                  <option value="">日</option>
                  {dayList.map((e, i) => {
                    return (
                      <option value={e} key={i}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="button bg_main_light_color1"
              style={{ marginLeft: '189px' }}
              onClick={saveData}
            >
              儲存
            </button>
          </div>
        </div>
        <div className="photo">
          <div
            className="up-photo"
            style={{ overflow: 'hidden', marginTop: '20px' }}
          >
            {isFilePicked ? (
              <img src={preview} alt="" style={{ width: '100%' }} />
            ) : (
              <i className="fa-thin thin fa-user"></i>
            )}
          </div>
          <div
            style={{
              border: '1px solid #727171',
              borderRadius: '15px',
              padding: '5px 10px',
              color: '#727171',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'center',
            }}
            onClick={handleClick}
          >
            上傳照片
          </div>
          <input
            type="file"
            onChange={changeHandler}
            ref={hiddenFileInput}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberProfileUp;
