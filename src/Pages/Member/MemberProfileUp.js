import { useState, useEffect, useContext } from 'react';
import { MemberContext } from '../../contexts/MemberContext';
import axios from 'axios';
import dayjs from 'dayjs';
import styled from './Member.module.scss'
function MemberProfileUp() {
  const { auth } = useContext(MemberContext);
  const [editUser, setEditUser] = useState({
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
    member_photo: '',
  });
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
  // 讀取地址城市區域
  const [allCity, setAllCity] = useState([{}]);
  const [allArea, setAllArea] = useState([{}]);
  const [whoArea, setWhoArea] = useState(0);
  const postUser = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };
  const getUserInfo = () => {
    setYear(dayjs(auth.row.birthday).format('YYYY'));
    setMonth(dayjs(auth.row.birthday).format('M'));
    setDay(dayjs(auth.row.birthday).format('D'));
    setEditUser(auth.row);
    setWhatGender(auth.row.gender);
  };
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
    getUserInfo();
  }, []);

  return (
    <>
      <div className={styled.pageProfileUp}>
        <div className={styled.pageLeft}>
          <div className={`${styled.enterA} ${styled.user}`}>
            <h2>使用者帳號</h2>
            <input
              type="text"
              className={styled.cc}
              value={editUser.account}
              readOnly
              name="account"
            />
          </div>
          <div className={styled.enterA}>
            <h2>姓名</h2>
            <input
              type="text"
              className={styled.cc}
              value={editUser.name}
              name="name"
            />
          </div>
          <div className={styled.enterA}>
            <h2>信箱</h2>
            <input
              type="text"
              className={styled.cc}
              value={editUser.email}
              name="email"
            />
          </div>
          <div className={styled.enterA}>
            <h2>手機</h2>
            <input
              type="text"
              className={styled.cc}
              value={0+editUser.mobile}
              name="mobile"
            />
          </div>
          <div className={styled.enterA}>
            <h2>地址</h2>
            <div className={styled.address}>
              <div className={styled.enterC}>
                <select
                  onChange={(e) => {
                    getArea(e.target.value);
                    setWhoArea(e.target.value);
                  }}
                >
                  <option>{editUser.city_name}</option>
                  {allCity &&
                    allCity.map((v, i) => {
                      return (
                        <option value={editUser.city} key={v.sid}>
                          {v.city_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className={styled.enterC}>
                <div className={styled.inputChoose}>
                  <select
                    name="area"
                    onChange={(e) => {
                      postUser(e);
                    }}
                  >
                    <option value="">{editUser.area_name}</option>
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
          <div className={styled.enterA}>
            <input
              type="text"
              className={`${styled.cc} ${styled.addressText}`}
              name="address"
              value={editUser.address}
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
              <div className={styled.enterC}>
                <select
                  name=""
                  id=""
                  className={styled.year}
                  onChange={(e) => {
                    setYear(+e.target.value);
                  }}
                >
                  <option>{year}</option>
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
              <div className={styled.enterC}>
                <div className={styled.inputChoose}>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setMonth(+e.target.value.split('月')[0]);
                    }}
                  >
                    <option>{month}月</option>
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
              <div className={styled.enterC}>
                <div className={styled.inputChoose}>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setDay(+e.target.value.split('日')[0]);
                    }}
                  >
                    <option>{day}日</option>
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
            <button className={styled.button}>儲存</button>
          </div>
        </div>
        <div className={styled.photo}>
          <div className={styled.upPhotoProfile}>
            {editUser.member_photo !== '' && (
              <img
                src={`http://localhost:6002/uploads/${editUser.member_photo}`}
                alt=""
              />
            )}
          </div>
          <input type="button" value="上傳照片" name="photo" />
        </div>
      </div>
    </>
  );
}

export default MemberProfileUp;
