import { createContext, useState } from 'react';

const SwitchButtonContext = createContext({});

export default SwitchButtonContext;

export const SwitchButtonContextProvider = function ({ children }) {
  const [mode, setMode] = useState('dog');
  // console.log(mode);

  return (
    <SwitchButtonContext.Provider value={{ mode, setMode }}>
      {children}
    </SwitchButtonContext.Provider>
  );
};
