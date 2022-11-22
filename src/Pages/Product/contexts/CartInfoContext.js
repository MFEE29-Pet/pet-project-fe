import { createContext, useState } from 'react';

const CartInfoContext = createContext([]);

export default CartInfoContext;

export const CartInfoContextProvider = function ({ children }) {
  const [cartItem, setCartItem] = useState({
    proCart: [],
    photoCart: [],
    totalItem: 0,
    totalPrice: 0,
  });

  const addCart = (product) =>{
    
  }

  return (
    <CartInfoContext.Provider value={{}}>{children}</CartInfoContext.Provider>
  );
};
