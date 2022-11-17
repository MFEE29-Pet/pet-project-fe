import { createContext, useState } from 'react';

const CartInfoContext = createContext({});

export default CartInfoContext;

export const CartInfoContextProvider = function ({ children }) {
  const [amount, setAmount] = useState(0);
  // console.log(amount);

  return (
    <CartInfoContext.Provider value={{ amount, setAmount }}>
      {children}
    </CartInfoContext.Provider>
  );
};
