import { createContext, useEffect, useState } from 'react';

export const MemberContext = createContext({});
//登入帳號
export const MemberContextProvider = ({ children }) => {
  const unData = {
    row: {
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
    },
    token: '',
    login: false,
  };

  let newData = { ...unData };

  const str = localStorage.getItem('petAuth');
  if (str) {
    const localData = JSON.parse(str);
    if (localData && localData.token) {
      newData = { ...localData };
    }
  }
  const [auth, setAuth] = useState(newData);
  console.log(auth);

  const logout = () => {
    localStorage.removeItem('petAuth');
    setAuth(unData);
    alert('登出成功');
  };
  return (
    <MemberContext.Provider value={{ auth, logout, setAuth }}>
      {children}
    </MemberContext.Provider>
  );
};
