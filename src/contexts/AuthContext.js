import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export default AuthContext;

export const AuthContextProvider = function ({ children }) {
  const navigate = useNavigate();
  // 設定初始值
  const unAuth = {
    authorized: false, // 有沒有登入
    sid: 0,
    name: '',
    member_photo:'',
    token: '',
  };

  let initAuth = { ...unAuth };

  // 取得目前狀態
  const str = localStorage.getItem('auth');
  if (str) {
    const localAuth = JSON.parse(str);
    if (localAuth && localAuth.token) {
      initAuth = { ...localAuth, authorized: true };
    }
  }
  const [myAuth, setMyAuth] = useState(initAuth);


  // useEffect(()=>{

  // },[])


  // 登出
  const logout = () => {
    localStorage.removeItem('auth');
    setMyAuth(unAuth);
    navigate('/');
  };
  // 2. 登入: 成功, 失敗

  return (
    <AuthContext.Provider value={{ myAuth, setMyAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
