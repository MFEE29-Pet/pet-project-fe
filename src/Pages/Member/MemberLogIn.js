import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; //登入後跳轉換面
import styled from './MemberLogIn.module.scss';
import { MemberContext } from '../../contexts/MemberContext';
function MemberLogIn() {
  const { logout,setAuth } = useContext(MemberContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  //for password show
  const [show, setShow] = useState(false);
  const handle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //做淺拷貝重新把值取代回去
  };
  const login = async () => {
    const { data } = await axios.post(
      'http://localhost:6002/member/login-api',
      user
    );
    console.log(data);
    if(data.error === '帳號錯誤'){
      alert('帳號錯誤')
      return
    }
    if(data.error === '密碼錯誤'){
      alert('密碼錯誤')
      return
    }
    if (data.auth.login) {
      localStorage.setItem('petAuth', JSON.stringify(data.auth));
      setAuth(data.auth)
      //登入後跳轉換面
      navigate('/member');
    }
  };
  return (
    <>
      <div className={styled.loginpage}>
        <div className={styled.logInenterA}>
          <h2>使用者帳號</h2>
          <div className={styled.logInenterC}>
            <div className={styled.logIninput}>
              <i className="fa-thin thin fa-user"></i>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={(e) => {
                  handle(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styled.logInenterA}>
          <h2>密碼</h2>
          <div className={styled.logInenterB}>
            <div>
              <i className="fa-thin thin fa-lock"></i>
              {show ? (
                <input
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={(e) => {
                    handle(e);
                  }}
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => {
                    handle(e);
                  }}
                />
              )}
            </div>
            {/* icon眼睛切換看密碼 */}
            {show ? (
              <i
                class="fa-light light fa-eye"
                onClick={() => {
                  setShow(!show);
                }}
              ></i>
            ) : (
              <i
                className="fa-light light fa-eye-slash"
                onClick={() => {
                  setShow(!show);
                }}
              ></i>
            )}
          </div>
        </div>
        <button
          className={styled.buttonLogIn}
          onClick={login}
          style={{
            backgroundColor: user.username && user.password && '#f8b62d',
          }}
        >
          登入
        </button>
        {/* <button
          onClick={() => {
            logout();
          }}
        >
          登出
        </button> */}
        <div className={styled.forget}>
          <span>忘記密碼</span>
          <i className="fa-regular fa-pipe"></i>
          <span
            className={styled.s1}
            onClick={() => {
              navigate('/member/memberShipAdd');
            }}
          >
            立即註冊
          </span>
        </div>
      </div>
    </>
  );
}

export default MemberLogIn;
