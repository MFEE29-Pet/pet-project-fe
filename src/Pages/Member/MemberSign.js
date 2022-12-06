import React, { useEffect, useState } from 'react';
import styled from  './MemberSign.module.scss'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
function MemberSign() {
  const nav = useNavigate();
  //for password show
  const [show, setShow] = useState(false);
  const [showEye, setShowEye] = useState('password');
  const [checkShow, setcheckShow] = useState(false);
  const [checkShowEye, setcheckShowEye] = useState('password');
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
    area: 0,
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
    const a = /\d/; //需要有數字
    const b = /[A-Z]/;
    const c = /[a-z]/;
    // const e = /\s/;//空白就true所以要false e.test(password)

    if (
      !(
        password.length > 8 &&
        a.test(password) &&
        b.test(password) &&
        c.test(password)
      )
    ) {
      alert('密碼格式有誤');
      return;
    }
    if (!checkMail(email)) {
      alert('請輸入正確的電子郵件格式');
      return;
    }
    if(mobile.length < 10){
      alert('請輸入正確手機號碼格式')
      return
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
      // birthday === ''
      year === 0 ||
      month === 0 ||
      day === 0
    ) {
      alert('請輸入正確資料');
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
    if(data ==='帳號使用過'){
      alert('此帳號已被註冊')
      return
    }
    if (data.success) {
      setSignSuccess(!signSuccess);
      setTimeout(() => {
        // 跳轉會員登入
        nav('/member/memberLogIn');
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
        <div className={styled.fill}>
          <div className={styled.success}>
            <h1>註冊成功</h1>
          </div>
        </div>
      )}

      <div className={styled.memberPage}>
        <div className={styled.signUpPage}>
          <div className={styled.page}>
            <div className={styled.pageLeft}>
              <div className={styled.enterA}>
                <h2>使用者帳號</h2>
                <input
                  type="text"
                  className={styled.cc}
                  name="account"
                  value={user.account}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className={styled.enterA}>
                <h2>設定密碼</h2>
                <input
                  // 更改類型password不顯示
                  type={showEye}
                  className={styled.cc}
                  name="password"
                  placeholder='8位數以上,需要有英文大小寫，數字'
                  value={user.password}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
                {show ? (
                  <i
                    class="fa-light light fa-eye"
                    onClick={() => {
                      setShow(!show);
                      setShowEye('password')
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-light light fa-eye-slash"
                    onClick={() => {
                      setShow(!show);
                      setShowEye('text')
                    }}
                  ></i>
                )}
              </div>
              <div className={styled.enterA}>
                <h2>確認密碼</h2>
                <input
                  // 更改類型password不顯示
                  type={checkShowEye}
                  className={styled.cc}

                  onChange={(e) => {
                    setCheckPass(e.target.value);
                  }}
                />
                {checkShow ? (
                  <i
                    class="fa-light light fa-eye"
                    onClick={() => {
                      setcheckShow(!checkShow);
                      setcheckShowEye('password');
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-light light fa-eye-slash"
                    onClick={() => {
                      setcheckShow(!checkShow);
                      setcheckShowEye('text');
                    }}
                  ></i>
                )}
              </div>
              <div className={styled.enterA}>
                <h2>姓名</h2>
                <input
                  type="text"
                  className={styled.cc}
                  name="name"
                  value={user.name}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className={styled.enterA}>
                <h2>信箱</h2>
                <input
                  type="text"
                  className={styled.cc}
                  name="email"
                  value={user.email}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className={styled.enterA}>
                <h2>手機</h2>
                <input
                  type="text"
                  className={styled.cc}
                  name="mobile"
                  placeholder='09-xxx-xxx-xxx'
                  value={user.mobile ? user.mobile : ''}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className={styled.enterA}>
                <h2>地址</h2>
                <div className={styled.address}>
                  <div className={styled.enterD}>
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
                  <div className={styled.enterD}>
                    <div className={styled.inputChoose}>
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
                              <option value={v.sid} key={v.sid}>
                                {v.area_name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.enterA}>
                <input
                  type="text"
                  className={`${styled.cc} ${styled.addressText}`}
                  name="address"
                  value={user.address}
                  onChange={(e) => {
                    postUser(e);
                  }}
                />
              </div>
              <div className={styled.enterA}>
                <h2>性別</h2>
                <div className={styled.radio}>
                  {genderWrap.map((v, i) => {
                    return (
                      <span key={i}>
                        <input
                          type="radio"
                          value={v}
                          checked={whatGender === v}
                          onChange={(e) => {
                            setWhatGender(e.target.value);
                            setUser({ ...user, gender: e.target.value });
                          }}
                        />
                        <label for="">{v}</label>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styled.enterA}>
                <h2>生日</h2>
                <div className={styled.address}>
                  <div className={styled.enterD}>
                    <select
                      name=""
                      id=""
                      className={styled.year}
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
                  <div className={styled.enterD}>
                    <div className={styled.inputChoose}>
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
                  <div className={styled.enterD}>
                    <div className={styled.inputChoose}>
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
              <div className={styled.buttonA}>
                <button className={styled.button} onClick={addUser}>
                  註冊
                </button>
              </div>
            </div>
            <div className={styled.photo}>
              <div className={styled.upSignphoto}>
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
