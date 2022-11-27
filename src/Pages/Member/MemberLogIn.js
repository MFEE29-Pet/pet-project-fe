import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; //登入後跳轉換面
import './MemberLogIn.css';
import AuthContext from '../../contexts/AuthContext';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import styled from 'styled-components';

const Memberroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/member/memberLogIn',
    label: '會員登入',
  },
];

const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const LoginPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MemberLogIn() {
  const { setMyAuth } = useContext(AuthContext);
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
      'http://localhost:6001/member/login-api',
      user
    );
    console.log(data);
    if (data.success) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      //登入後跳轉換面
      setMyAuth({ ...data.auth, authorised: true });
      navigate('/member/memberCenter');
    } else {
      localStorage.removeItem('auth');
      alert('登入失敗');
    }
  };
  return (
    <LoginPage>
      <BreadcrumbBox>
        <Breadcrumb
          routes={Memberroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <div className="loginpage">
        <div className="logInenterA">
          <h2 className="text_main_dark_color2">使用者帳號</h2>
          <div className="logInenterC">
            <div className="logIninput">
              <i
                className="fa-thin thin fa-user"
                style={{ marginRight: '5px' }}
              ></i>
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
          <h2 className="text_main_dark_color2">密碼</h2>
          <div className="logInenterB">
            <div>
              <i
                className="fa-thin fa-lock lock_icon"
                style={{ marginRight: '5px' }}
              ></i>
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
                class="fa-light fa-eye eyeicon"
                onClick={() => {
                  setShow(!show);
                }}
              ></i>
            ) : (
              <i
                className="fa-light fa-eye-slash eyeicon"
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
            color: user.username && user.password && '#fff',
            fontWeight: '700',
          }}
        >
          登入
        </button>
        <div className="login_bottom">
          <div>
            <Link to="/" style={{ color: '#252525' }}>
              忘記密碼
            </Link>
          </div>
          <i className="fa-regular fa-pipe"></i>
          <div>
            <Link className="text_main_light_color1" to="/memberShipAdd">
              立即註冊
            </Link>
          </div>
        </div>
      </div>
    </LoginPage>
  );
}

export default MemberLogIn;
