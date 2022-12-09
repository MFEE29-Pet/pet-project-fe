import axios from 'axios';
import React, { useState } from 'react';
import './Member.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
function MemberResavePassword() {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const memberID = JSON.parse(localStorage.getItem('auth'));
  const sendData = async () => {
    const fd = new FormData();

    fd.append('password', password);
    fd.append('sid', memberID.sid);

    const { data } = await axios.put(
      'http://localhost:6001/member/resetpassword',
      fd
    );

    if (data.success) {
      MySwal.fire({
        title: <strong>成功修改</strong>,
        icon: 'success',
      });
    } else {
      Swal.fire({
        title: '<strong>資料未修改</strong>',
        icon: 'info',
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: '800px',
        marginTop: '80px',
        fontSize: '20px',
      }}
    >
      <div className="pagePassword">
        <div className="enter-A">
          <h2>新密碼</h2>
          <div className="enter-B" style={{ backgroundColor: 'transparent' }}>
            <div>
              <input
                type="text"
                value={password}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="enter-A">
          <h2>新密碼確認</h2>
          <div className="enter-B" style={{ backgroundColor: 'transparent' }}>
            <div>
              <input
                type="text"
                value={checkPassword}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="bg_main_light_color1"
            style={{
              padding: '10px 20px',
              border: 'none',
              fontSize: '16px',
              color: '#fff',
              borderRadius: '15px',
            }}
            onClick={sendData}
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemberResavePassword;
