import { createContext, useEffect, useState } from 'react';

export const MemberContext = createContext({});
//登入帳號
export const MemberContextProvider = ({ children }) => {
  const unData = {
    account: '',
    address: '',
    area: '',
    city: '',
    create_at: '',
    gender: '',
    level: 1,
    member_photo: '',
    name: '',
    password: '',
    sid: 1,
  };
  let newData = { ...unData };
  let login = 'false';
  const str = localStorage.getItem('petAuth');
  if (str) {
    const localAuth = JSON.parse(str);
    newData = localAuth;
    login = 'true';
  }
  const [auth, setAuth] = useState(newData);
  console.log(auth);

  const logout = () => {
    localStorage.removeItem('petAuth');
    alert('登出成功');
  };
  return (
    <MemberContext.Provider value={{ auth, logout }}>
      {children}
    </MemberContext.Provider>
  );
};
