import axios from 'axios';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../contexts/AuthContext';
import { LOGIN_API } from './my-config';

function Login() {
  const [formData, setFormData] = useState({
    account: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const { myAuth, setMyAuth, logout } = useContext(AuthContext);

  const handleChange = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({ ...formData, [id]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(LOGIN_API, formData);
    console.log(data);

    if (data.success) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      alert('登入成功');
    } else {
      localStorage.removeItem('auth');
      alert('登入失敗');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form action="" style={{ margin: '30px 0' }} onSubmit={handleSubmit}>
        <div className="try_login_form" style={{ marginBottom: '10px' }}>
          <label htmlFor="account">帳號</label>
          <input
            type="text"
            name="account"
            id="account"
            value={formData.account}
            onChange={handleChange}
          />
          <label htmlFor="password">密碼</label>
          <input
            type={show ? 'text' : 'password'}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={() => setShow(!show)}>
          顯示密碼
        </button>
        <button
          type="button"
          onClick={() => setFormData({ account: 'andy', password: '12345' })}
        >
          自動填入
        </button>
        <button type="submit">登入</button>
        <button type="button" onClick={logout}>
          登出
        </button>
      </form>
    </>
  );
}

export default Login;
