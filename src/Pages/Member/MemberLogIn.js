import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; //登入後跳轉換面
import './MemberLogIn.css';
import AuthContext from '../../contexts/AuthContext';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

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
    const { data } = await axios.post('/member/login-api', user);
    console.log(data);

    if (data.success) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      //登入後跳轉換面
      setMyAuth({ ...data.auth, authorized: true });
      MySwal.fire({
        title: <strong>成功登入</strong>,
        text: '歡迎回來PetBen',
        icon: 'success',
      });
      navigate('/member/memberCenter');
    } else {
      localStorage.removeItem('auth');
      Swal.fire({
        title: '<strong>登入失敗</strong>',
        text: '帳號密碼錯誤',
        icon: 'info',
      });
    }
  };

  const googleLogin = async () => {
    const { data } = await axios.get('http://localhost:6001/member/login');
    console.log(data);
    window.open(data);
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
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
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
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
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
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
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
            <Link
              to="/member/memberForgetPassword"
              style={{ color: '#252525' }}
            >
              忘記密碼
            </Link>
          </div>
          <i className="fa-regular fa-pipe"></i>
          <div>
            <Link className="text_main_light_color1" to="/member/memberShipAdd">
              立即註冊
            </Link>
          </div>
          <button onClick={googleLogin}>酷狗登入</button>
        </div>
      </div>
    </LoginPage>
  );
}

export default MemberLogIn;
