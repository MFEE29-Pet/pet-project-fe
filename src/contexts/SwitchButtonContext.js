import { createContext, useState } from 'react';

export let initMode = {
  dog: { id: 1, name: 'dog', value: true },
  cat: { id: 2, name: 'cat', value: false },
};

const SwitchButtonContext = createContext({});

export default SwitchButtonContext;

export const SwitchButtonContextProvider = function ({ children }) {
  // console.log(initMode.name);

  const [mode, setMode] = useState(initMode.dog);

  return (
    <SwitchButtonContext.Provider value={{ ...mode, setMode }}>
      {children}
    </SwitchButtonContext.Provider>
  );
};
