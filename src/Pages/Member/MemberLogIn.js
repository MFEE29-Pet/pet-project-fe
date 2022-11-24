import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; //登入後跳轉換面
import './MemberLogIn.css';
import { MemberContext } from '../../contexts/MemberContext';
function MemberLogIn() {
  const { logout } = useContext(MemberContext);
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
    if (data.auth.login) {
      localStorage.setItem('petAuth', JSON.stringify(data.auth));
      //登入後跳轉換面
      navigate('/member');
    } else {
      alert('登入失敗');
    }
  };
  return (
    <>
      <div className="loginpage">
        <div className="logInenterA">
          <h2>使用者帳號</h2>
          <div className="logInenterC">
            <div className="logIninput">
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
        <div className="logInenterA">
          <h2>密碼</h2>
          <div className="logInenterB">
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
          className="buttonLogIn"
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
        <div>
          <span>忘記密碼</span>
          <i className="fa-regular fa-pipe"></i>
          <span
            className="s1"
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
