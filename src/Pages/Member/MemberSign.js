import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import './MemberSign.css';
import axios from 'axios';
function MemberSign() {
  const nav = useNavigate();
  const [signSuccess, setSignSuccess] = useState(false);
  const [photos, setPhotos] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [user, setUser] = useState({
    account: '',
    password: '',
    name: '',
    email: '',
    mobile: 0,
    city: 0,
    area: '',
    address: '',
    gender: '',
    birthday: '',
    photo: '',
  });
  const [allCity, setAllCity] = useState([{}]);
  const [allArea, setAllArea] = useState([{}]);
  const genderWrap = ['生理男', '生理女', '其他'];
  //性別
  const [whatGender, setWhatGender] = useState('');
  //生日年
  const [year, setYear] = useState(0);
  //生日月
  const [month, setMonth] = useState(0);
  //生日天
  const [day, setDay] = useState(0);
  const days = [];
  const howDay = new Date(year, month, 0).getDate();
  for (let i = 1; i <= howDay; i++) {
    days.push(i + '日');
  }
  //城市
  const [whoArea, setWhoArea] = useState(0);
  const postUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUser = async () => {
    const {
      account,
      password,
      name,
      email,
      mobile,
      city,
      area,
      address,
      gender,
      birthday,
    } = user;
    // 密碼驗證
    if (password !== checkPass) {
      alert('密碼不一致');
      return;
    }
    const a = /\d/;//需要有數字
    const b = /[A-Z]/;
    const c = /[a-z]/
    const e = /\s/;//空白就true所以要false 

    if (!(password.length > 8 && a.test(password) && b.test(password) && c.test(password) && e.test(password))) {
      alert('密碼格式有誤');
      return;
    }
    // 欄位驗證
    if (
      account === '' ||
      password === '' ||
      checkPass === '' ||
      name === '' ||
      email === '' ||
      mobile === 0 ||
      city === '' ||
      area === '' ||
      address === '' ||
      gender === '' ||
      birthday === ''
    ) {
      alert('請輸入正確資料');
      return;
    }
    if (!checkMail(email)) {
      alert('請輸入正確的電子郵件格式');
      return;
    }
    const d = dayjs(Date.parse(`${year}-${month}-${day}`)).format('YYYY-MM-DD');
    const fd = new FormData();
    fd.append('account', account);
    fd.append('password', password);
    fd.append('name', name);
    fd.append('email', email);
    fd.append('mobile', +mobile);
    fd.append('city', whoArea);
    fd.append('area', area);
    fd.append('address', address);
    fd.append('gender', whatGender);
    fd.append('birthday', d);
    fd.append('avatar', userPhoto);

    const { data } = await axios.post('http://localhost:6002/member/add', fd);
    if (data.success) {
      setSignSuccess(!signSuccess);
      setTimeout(() => {
        nav('/member');
      }, 1000);
    }
  };
  const checkMail = (mail) => {
    let isValued = true;
    if (
      mail.indexOf('@') === -1 ||
      mail.indexOf('@') === 0 ||
      mail.indexOf('@') !== mail.lastIndexOf('@') ||
      mail.indexOf('@') === mail.length - 1
    ) {
      isValued = false;
    } else if (
      mail.indexOf('.') === -1 ||
      mail.indexOf('.') === 0 ||
      mail.indexOf('.') === mail.length - 1
    ) {
      isValued = false;
    }
    return isValued;
  };
  //抓取縣市資料
  const getCity = async () => {
    const res = await axios.get('http://localhost:6002/member/city');
    setAllCity(res.data);
  };
  //抓取行政區資料
  const getArea = async (sid) => {
    const res = await axios.get(`http://localhost:6002/member/area?sid=${sid}`);
    setAllArea(res.data);
  };
  useEffect(() => {
    getCity();
  }, []);
  return (
    <>
      {signSuccess && (
        <div className="fill">
          <div className="success">
            <h1>註冊成功</h1>
          </div>
        </div>
      )}

      <div className="member-page">
        <div className="signUp-page">
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
                <input
                  type="text"
                  className="cc"
                  onChange={(e) => {
                    setCheckPass(e.target.value);
                  }}
                />
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
                  value={user.mobile ? user.mobile : ''}
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
                      onChange={(e) => {
                        getArea(e.target.value);
                        setWhoArea(e.target.value);
                      }}
                    >
                      <option>縣/市</option>
                      {allCity &&
                        allCity.map((v, i) => {
                          return (
                            <option value={v.sid} key={v.sid}>
                              {v.city_name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="enter-C">
                    <div className="input-Choose">
                      <select
                        name="area"
                        onChange={(e) => {
                          postUser(e);
                        }}
                      >
                        <option value="">行政區</option>
                        {allArea &&
                          allArea.map((v, i) => {
                            return (
                              <option value={v.area_name} key={v.sid}>
                                {v.area_name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="enter-A">
                <input
                  type="text"
                  className="cc addressText"
                  name="address"
                  value={user.address}
                  onChange={(e) => {
                    postUser(e);
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
                          checked={whatGender === v}
                          onChange={(e) => {
                            setWhatGender(e.target.value);
                          }}
                        />
                        <label for="">{v}</label>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="enter-A">
                <h2>生日</h2>
                <div className="address">
                  <div className="enter-C">
                    <select
                      name=""
                      id=""
                      className="year"
                      onChange={(e) => {
                        setYear(+e.target.value);
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
                        onChange={(e) => {
                          setMonth(+e.target.value.split('月')[0]);
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
                        onChange={(e) => {
                          setDay(+e.target.value.split('日')[0]);
                        }}
                      >
                        <option>日</option>
                        {days.map((v, i) => {
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
                {photos === '' ? (
                  <i className="fa-thin thin fa-user"></i>
                ) : (
                  <img src={photos} alt="" />
                )}
              </div>
              <label htmlFor="avatar">上傳照片</label>
              <input
                type="file"
                name="avatar"
                value=""
                id="avatar"
                style={{ display: 'none' }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  if (e.target.files.length > 0) {
                    setUserPhoto(e.target.files[0]);
                    setPhotos(URL.createObjectURL(e.target.files[0]));
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSign;
