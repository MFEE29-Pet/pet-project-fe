import React, { useContext } from 'react';
import Login from './Login';
import Cart from './Cart';
import LoginInfo from './LoginInfo';
import styled from 'styled-components';
import ThemeChange from './ThemeChange';
import AuthContext from '../../../contexts/AuthContext';

const RightBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 30%;
`;

function Right(props) {
  const { myAuth } = useContext(AuthContext);
  return (
    <RightBox>
    {/* {console.log(myAuth)} */}
      {myAuth.authorised ? <LoginInfo /> : <Login />}

      <Cart />
      <ThemeChange />
    </RightBox>
  );
}

export default Right;
