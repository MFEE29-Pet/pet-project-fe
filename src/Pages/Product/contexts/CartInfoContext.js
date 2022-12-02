import { createContext, useState } from 'react';

const CartInfoContext = createContext([]);

export default CartInfoContext;

export const CartInfoContextProvider = function ({ children }) {
  let initCart = {
    productCart: [],
    photoCart: [],
    totalItem: 0,
    totalPrice: 0,
    totalAmount: 0,
  };
  if (localStorage.getItem('cartItem')) {
    initCart = JSON.parse(localStorage.getItem('cartItem'));
  } else {
    initCart = {
      productCart: [],
      photoCart: [],
      totalItem: 0,
      totalPrice: 0,
      totalAmount: 0,
    };
  }
  const [cartItem, setCartItem] = useState(initCart);

  // 加入購物車
  // 須帶入參數 data :obj 和 amount(要加的數量),  data要用到的value所對應key值 sid,name,price,img
  const handleAddCart = async (data, amount) => {
    let index = cartItem.productCart.findIndex((e) => e.sid === data.sid);
    // console.log(index);
    // 非重複商品
    if (index === -1) {
      const products = await {
        ...cartItem,
        productCart: [
          ...cartItem.productCart,
          {
            sid: data.sid,
            name: data.name,
            member_price: data.member_price,
            img: data.img,
            amount: amount,
          },
        ],
        totalItem: cartItem.totalItem + 1,
        totalPrice: cartItem.totalPrice + data.member_price * amount,
        totalAmount: cartItem.totalAmount + amount,
      };
      localStorage.setItem('cartItem', JSON.stringify({ ...products }));
      // console.log({ products });
      setCartItem(products);
    } else {
      cartItem.productCart[index] = {
        ...cartItem.productCart[index],
        amount: cartItem.productCart[index].amount + amount,
      };
      const newProductState = {
        ...cartItem,
        productCart: cartItem.productCart,
        totalPrice: cartItem.totalPrice + data.member_price * amount,
        totalAmount: cartItem.totalAmount + amount,
      };
      localStorage.setItem('cartItem', JSON.stringify(newProductState));
      console.log({ newProductState });
      setCartItem(newProductState);
    }
  };

  // 購物車數量 -1 , 數量等於0會清除, 小於0會跳alert
  // 須帶入參數 data :obj ,  data要用到的value所對應key值 sid,amount,price
  const handleReduce = async (data) => {
    let index = cartItem.productCart.findIndex((e) => e.sid === data.sid);
    // console.log(index);
    if (index === -1) {
      alert('錯誤，無此商品');
      return;
    } else {
      if (cartItem.productCart[index].amount > 1) {
        cartItem.productCart[index] = {
          ...cartItem.productCart[index],
          amount:
            cartItem.productCart[index].amount > 0
              ? cartItem.productCart[index].amount - 1
              : cartItem.productCart[index].amount,
        };
        const newProductState = {
          ...cartItem,
          productCart: cartItem.productCart,
          totalPrice: cartItem.totalPrice - data.member_price,
          totalAmount:
            cartItem.totalAmount > 0
              ? cartItem.totalAmount - 1
              : cartItem.totalAmount,
        };
        localStorage.setItem('cartItem', JSON.stringify(newProductState));
        // console.log(cartItem.productCart[index].amount);
        // console.log({ newProductState });
        setCartItem(newProductState);
      } else if (cartItem.productCart[index].amount === 1) {
        const productCartItems1 = cartItem.productCart.slice(0, index);
        // console.log(productCartItems1);
        const productCartItems2 = cartItem.productCart.slice(index + 1);
        // console.log(productCartItems2);
        const productItems = productCartItems1.concat(productCartItems2);
        // console.log(productItems);

        const newProductItems = {
          ...cartItem,
          productCart: [...productItems],
          totalPrice: cartItem.totalPrice - data.member_price,
          totalAmount: cartItem.totalAmount - 1,
        };
        localStorage.setItem('cartItem', JSON.stringify(newProductItems));
        // console.log({ newProductItems });
        setCartItem(newProductItems);
      }
    }
  };

  // 清空購物車
  const handleClear = () => {
    setCartItem({
      productCart: [],
      photoCart: [],
      totalItem: 0,
      totalPrice: 0,
      totalAmount: 0,
    });
    localStorage.removeItem('cartItem');
  };

  return (
    <CartInfoContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddCart,
        handleReduce,
        handleClear,
      }}
    >
      {children}
    </CartInfoContext.Provider>
  );
};
