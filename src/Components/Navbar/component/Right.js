import React, { useContext } from 'react';
import Login from './Login';
import LoginInfo from './LoginInfo';
import styled from 'styled-components';
import ThemeChange from './ThemeChange';
import AuthContext from '../../../contexts/AuthContext';
import CartIcon from '../../../Pages/Product/components/CartIcon';
import { Link } from 'react-router-dom';

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
  return (
    <RightBox>
      {/* {console.log(myAuth)} */}
      {myAuth.authorised ? <LoginInfo /> : <Login />}

      <CART to="/cart">
        <CartIcon />
      </CART>
      <ThemeChange />
    </RightBox>
  );
}

export default Right;
