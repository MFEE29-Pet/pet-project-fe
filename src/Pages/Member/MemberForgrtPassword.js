import { useState, useContext } from 'react';
import axios from 'axios';
import { MemberContext } from '../../contexts/MemberContext.js';
import './Member.css';
function MemberForgrtPassword() {
  const { auth } = useContext(MemberContext);
  const changePassword = async () => {
    const newPassword = { ...password, sid: auth.row.sid };
    console.log(newPassword);
    const { data } = await axios.post(
      'http://localhost:6002/member/editPassword',
      newPassword
    );
    console.log(data);
  };
  const [password, setPassword] = useState({ password: '', editPassword: '' });
  return (
    <div className="pagePassword">
      <div className="enter-A">
        <h2>目前的密碼</h2>
        <div className="enter-C">
          <div className="input">
            <input
              type="password"
              name="password"
              value={password.password}
              onChange={(e) => {
                setPassword({ ...password, [e.target.name]: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="enter-A">
        <h2>新密碼</h2>
        <div className="enter-B">
          <div className="input">
            <input
              type="text"
              name="editPassword"
              value={password.editPassword}
              onChange={(e) => {
                setPassword({ ...password, [e.target.name]: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="enter-A">
        <h2>新密碼確認</h2>
        <div className="enter-B">
          <div className="input">
            <input type="text" />
          </div>
        </div>
      </div>
      <button className="button" onClick={changePassword}>
        確認
      </button>
    </div>
  );
}

export default MemberForgrtPassword;
