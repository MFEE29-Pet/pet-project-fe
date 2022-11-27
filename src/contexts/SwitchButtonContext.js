import { createContext, useState } from 'react';

const SwitchButtonContext = createContext({});

export default SwitchButtonContext;

export const SwitchButtonContextProvider = function ({ children }) {
  const [mode, setMode] = useState('dog');
  const [productShow, setProductShow] = useState('card');
  // console.log(mode);

  return (
    <SwitchButtonContext.Provider
      value={{ mode, setMode, productShow, setProductShow }}
    >
      {children}
    </SwitchButtonContext.Provider>
  );
};
