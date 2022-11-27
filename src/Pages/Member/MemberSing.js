import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import './MemberSing.css';
import axios from 'axios';
import styled from 'styled-components';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import { useNavigate } from 'react-router';

const JoinPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const Memberroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/member/memberShipAdd',
    label: '會員註冊',
  },
];

function MemberSing() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    account: '',
    password: '',
    name: '',
    email: '',
    mobile: '',
    city: '',
    area: '',
    address: '',
    gender: '',
    birthday: '',
    avatar: '',
  });
  const genderWrap = ['生理男', '生理女', '其他'];
  const [gender, setGender] = useState('');
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [city, setCity] = useState(0);
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');

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

  //拿到縣市資料
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
  // console.log(cityData);
  // console.log(areaData);

  useEffect(() => {
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

  const postUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUser = async () => {
    const newUser = { ...user };
    let newMonth = month;
    let newDay = day;
    newMonth = newMonth.split('月')[0];
    newDay = newDay.split('日')[0];
    const d = dayjs(Date.parse(`${year}-${newMonth}-${newDay}`)).format(
      'YYYY/MM/DD'
    );

    const fd = new FormData();

    fd.append('account', user.account);
    fd.append('password', user.password);
    fd.append('name', user.name);
    fd.append('mail', user.email);
    fd.append('mobile', user.mobile);
    fd.append('city', user.city);
    fd.append('area', user.area);
    fd.append('address',user.address)
    fd.append('date', d);
    fd.append('member_photo', selectedFile);

    console.log(fd);
    const { data } = await axios.post('http://localhost:6001/member/add', fd);
    console.log(data);
    if (data.success) {
      alert('註冊成功')
      navigate('/member/memberLogIn')
    }
  };
  return (
    <JoinPage>
      {/* <div className="fill"></div>
      <div className="success">
        <h1>註冊成功</h1>
      </div> */}
      <BreadcrumbBox>
        <Breadcrumb
          routes={Memberroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <div className="member-page">
        <div className="singUp-page">
          <div className="page">
            <div className="page-left">
              <div className="enter-A">
                <h2 className="text_main_dark_color2">使用者帳號</h2>
                <input
                  type="text"
                  className="cc"
                  name="account"
                  value={user.account}
                  onChange={(e) => {
                    postUser(e);
                  }}
                  style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <div className="enter-A">
                <h2 className="text_main_dark_color2">設定密碼</h2>
                <input
                  type="text"
                  className="cc"
                  name="password"
                  value={user.password}
                  onChange={(e) => {
                    postUser(e);
                  }}
                  style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <div className="enter-A">
                <h2 className="text_main_dark_color2">確認密碼</h2>
                <input type="text" className="cc" style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}/>
              </div>
              <div className="enter-A">
                <h2 className="text_main_dark_color2">姓名</h2>
                <input
                  type="text"
                  className="cc"
                  name="name"
                  value={user.name}
                  onChange={(e) => {
                    postUser(e);
                  }}
                  style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <div className="enter-A">
                <h2 className="text_main_dark_color2">信箱</h2>
                <input
                  type="text"
                  className="cc"
                  name="email"
                  value={user.email}
                  onChange={(e) => {
                    postUser(e);
                  }}
                  style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <div className="enter-A">
                <h2 className="text_main_dark_color2">手機</h2>
                <input
                  type="text"
                  className="cc"
                  name="mobile"
                  value={user.mobile}
                  onChange={(e) => {
                    postUser(e);
                  }}
                  style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <div className="enter-A" style={{ display: 'flex' }}>
                <div
                  className="text_main_dark_color2"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    height: '60px',
                    fontWeight: '700',
                  }}
                  
                >
                  地址
                </div>

                <div
                  className="address"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <div className="enter-C">
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
                    <div className="enter-C">
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
                    className="cc addressText"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    style={{
                    border: '1px solid #727171',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                  />
                </div>
              </div>

              <div className="enter-A">
                <h2 className="text_main_dark_color2">性別</h2>
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
                        />
                        <label htmlFor="">{v}</label>
                      </span>
                    );
                  })}
                  {/* <input type="radio" />
                  <label for="">生理男</label>
                  <input type="radio" />
                  <label for="">生理女</label>
                  <input type="radio" />
                  <label for="">其他</label> */}
                </div>
              </div>
              <div className="enter-A">
                <h2 className="text_main_dark_color2">生日</h2>
                <div className="address">
                  <div className="enter-D">
                    <select
                      name=""
                      id=""
                      value={year}
                      className="year"
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    >
                      <option value="">年</option>
                      {Array(2022 - 1922 + 1)
                        .fill(1)
                        .map((v, i) => {
                          return (
                            <option value={i + 1922} key={i}>
                              {i + 1922}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="enter-D">
                    <select
                      name=""
                      id=""
                      value={month}
                      onChange={(e) => {
                        setMonth(e.target.value);
                      }}
                    >
                      <option>月</option>
                      {Array(12)
                        .fill(1 + '月')
                        .map((v, i) => {
                          return (
                            <option value={`${i + 1}月`} key={i}>{`${
                              i + 1
                            }月`}</option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="enter-D">
                    <select
                      name=""
                      id=""
                      value={day}
                      onChange={(e) => {
                        setDay(e.target.value);
                      }}
                    >
                      <option>日</option>
                      {Array(31)
                        .fill(1 + '日')
                        .map((v, i) => {
                          return (
                            <option value={`${i + 1}日`} key={i}>{`${
                              i + 1
                            }日`}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="button-A">
                <button
                  className="button bg_main_light_color1"
                  onClick={addUser}
                >
                  註冊
                </button>
              </div>
            </div>
            <div className="photo">
              <div className="up-photo" style={{ overflow: 'hidden' }}>
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
      </div>
    </JoinPage>
  );
}

export default MemberSing;
