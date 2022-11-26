import React, { useContext } from 'react';
import LoginInfo from './LoginInfo';
import styled from 'styled-components';
import ThemeChange from './ThemeChange';
import CartIcon from '../../../Pages/Product/components/CartIcon';
import { Link } from 'react-router-dom';
import Login from './Login';
import AuthContext from '../../../contexts/AuthContext';

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
      {myAuth.authorized ? <LoginInfo /> : <Login />}
      {console.log(myAuth.authorised)}

      <CART to="/cart">
        <CartIcon />
      </CART>
      <ThemeChange />
    </RightBox>
  );
}

export default Right;
