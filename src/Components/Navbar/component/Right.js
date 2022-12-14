import React, { useContext } from 'react';
import Login from './Login';
import LoginInfo from './LoginInfo';
import styled from 'styled-components';
import ThemeChange from './ThemeChange';
import AuthContext from '../../../contexts/AuthContext';
import CartIcon from '../../../Pages/Product/components/CartIcon';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RightBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 30%;
`;
const CART = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Right(props) {
  const { myAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <RightBox className="nav_right">
      {/* {console.log(myAuth)} */}
      {myAuth.authorized ? <LoginInfo /> : <Login />}

      <CART
        to="/cart"
        className="cartIcon"
        onClick={(e) => {
          if (!localStorage.getItem('cartItem')) {
            e.preventDefault();
            Swal.fire({
              title: '<strong>購物車是空的～</strong>',
              icon: 'warning',
              scrollbarPadding: false,
            });
          } else {
            navigate('/member/login');
          }
        }}
      >
        <CartIcon />
      </CART>
      <ThemeChange />
    </RightBox>
  );
}

export default Right;
