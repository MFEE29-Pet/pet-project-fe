import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router';

const MySwal = withReactContent(Swal);

const ForgetPasswordPage = styled.div`
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

const AUTO_LOGIN_ROOT = styled.div`
  background-color: #fff;
  &:hover {
    background-color: #fff5de;
  }
`;

const Memberroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/member/memberShipAdd',
    label: '忘記密碼',
  },
];

function MemberForgetPassword() {
  const [mail, setMail] = useState('');
  const navigate = useNavigate();

  const sendMail = async () => {
    const fd = new FormData();
    fd.append('mail', mail);
    const { data } = await axios.post(
      'http://localhost:6001/member/sendpassword',
      fd
    );
    console.log(data);

    if (data.msg === 'success') {
      MySwal.fire({
        title: <strong>已更換密碼</strong>,
        text: '請至您的信箱查看新密碼',
        icon: 'success',
      });
      navigate('/member/memberLogIn');
    }
  };

  return (
    <ForgetPasswordPage>
      <div className="p_space" style={{ height: '100px' }}></div>
      <BreadcrumbBox>
        <Breadcrumb
          routes={Memberroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <div
        style={{
          backgroundColor: '#fff',
          width: '600px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '50px 100px',
          borderRadius: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
          <h2 style={{ fontSize: '20px', width: '30%', fontWeight: '700' }}>
            忘記密碼 ?
          </h2>
          <div style={{ fontSize: '12px', color: '#727171' }}>
            請輸入使用者信箱後重設密碼。
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h2 style={{ width: '15%', color: '#727171' }}>信箱</h2>
          <div
            style={{
              borderRadius: '20px',
              width: '85%',
              height: '40px',
              border: '1px solid #727171',
              display: 'flex',
              alignItems: 'center',
              padding: '10px 10px',
            }}
          >
            <i
              className="fa-light fa-envelope"
              style={{ fontSize: '16px', color: '#c9caca' }}
            ></i>
            <input
              type="email"
              value={mail}
              style={{
                border: 'none',
                padding: '5px 10px',
                outline: 'none',
                width: '100%',
              }}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className="bg_main_light_color1"
            style={{
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
            }}
            onClick={sendMail}
          >
            重新設定密碼
          </button>
        </div>
        <div style={{ display: 'flex' }}>
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: '16px',
            }}
          >
            <i
              className="fa-regular fa-turn-down-left"
              style={{ marginRight: '10px' }}
            ></i>
            返回登入
          </button>
        </div>
      </div>
      <div className="p_space" style={{ height: '100px' }}></div>
      <AUTO_LOGIN_ROOT
        onClick={() => {
          setMail('petproject1214@gmail.com');
        }}
        style={{
          width: '20px',
          height: '20px',
          position: 'absolute',
          top: '380px',
          right: '730px',
          borderRadius: '50%',
        }}
      ></AUTO_LOGIN_ROOT>
    </ForgetPasswordPage>
  );
}

export default MemberForgetPassword;
