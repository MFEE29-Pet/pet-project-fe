import { useContext } from 'react';
import CartInfoContext from '../Product/contexts/CartInfoContext';

function Cart() {
  const { setCartItem } = useContext(CartInfoContext);

  const clearCart = () => {
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
    <button type="button" onClick={clearCart}>
      清空購物車
    </button>
  );
}

export default Cart;
