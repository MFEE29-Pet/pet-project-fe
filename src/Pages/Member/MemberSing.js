import React, { useState } from 'react';
import dayjs from 'dayjs';
import './MemberSing.css';
import axios from 'axios';
function MemberSing() {
  const [user, setUser] = useState({
    account: '',
    password: '',
    name: '',
    email: '',
    mobile: 0,
    city: '',
    area: '',
    address: '',
    gender: '',
    birthday: '',
  });
  const genderWrap = ['生理男', '生理女', '其他'];
  const [gender, setGender] = useState('');
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');

  const postUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUser = async() => {
    const newUser = { ...user };
    let newMonth = month;
    let newDay = day;
    newMonth = newMonth.split('月')[0];
    newDay = newDay.split('日')[0];
    const d = dayjs(Date.parse(`${year}-${newMonth}-${newDay}`)).format(
      'YYYY-MM-DD'
    );
    newUser.gender = gender;
    newUser.city = city;
    newUser.area = area;
    newUser.address = address;
    newUser.birthday = d;
    console.log(newUser);
    const {data} = await axios.post('http://localhost:6001/member/add',newUser)
    console.log(data)
  };
  return (
    <>
      {/* <div className="fill"></div>
      <div className="success">
        <h1>註冊成功</h1>
      </div> */}
      <div className="member-page">
        <div className="singUp-page">
          <div className="page">
            <div className="page-left">
              <div className="enter-A">
                <h2>使用者帳號</h2>
                <input
                  type="text"
                  className="cc"
                  name="account"
                  value={user.account}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className="enter-A">
                <h2>設定密碼</h2>
                <input
                  type="text"
                  className="cc"
                  name="password"
                  value={user.password}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className="enter-A">
                <h2>確認密碼</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>姓名</h2>
                <input
                  type="text"
                  className="cc"
                  name="name"
                  value={user.name}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className="enter-A">
                <h2>信箱</h2>
                <input
                  type="text"
                  className="cc"
                  name="email"
                  value={user.email}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className="enter-A">
                <h2>手機</h2>
                <input
                  type="text"
                  className="cc"
                  name="mobile"
                  value={user.mobile}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className="enter-A">
                <h2>地址</h2>
                <div className="address">
                  <div className="enter-C">
                    <select
                      name=""
                      id=""
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">縣/市</option>
                      <option value="台北市">台北市</option>
                      <option value="新北市">新北市</option>
                      <option value="桃園市">桃園市</option>
                      <option value="台中市">台中市</option>
                      <option value="">台南市</option>
                      <option value="">高雄市</option>
                    </select>
                  </div>
                  <div className="enter-C">
                    <div className="input-Choose">
                      <select
                        name=""
                        id=""
                        value={area}
                        onChange={(e) => {
                          setArea(e.target.value);
                        }}
                      >
                        <option value="">行政區</option>
                        <option value="台北市">台北市</option>
                        <option value="新北市">新北市</option>
                        <option value="">桃園市</option>
                        <option value="">台中市</option>
                        <optio value="">台南市</optio>
                        <option value="">高雄市</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="enter-A">
                <input
                  type="text"
                  className="cc addressText"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="enter-A">
                <h2>性別</h2>
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
                        <label for="">{v}</label>
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
                <h2>生日</h2>
                <div className="address">
                  <div className="enter-C">
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
                  <div className="enter-C">
                    <div className="input-Choose">
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
                  </div>
                  <div className="enter-C">
                    <div className="input-Choose">
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
              </div>
              <div className="button-A">
                <button className="button" onClick={addUser}>
                  註冊
                </button>
              </div>
            </div>
            <div className="photo">
              <div className="up-photo">
                <i className="fa-thin thin fa-user"></i>
              </div>
              <input type="button" value="上傳照片" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSing;
