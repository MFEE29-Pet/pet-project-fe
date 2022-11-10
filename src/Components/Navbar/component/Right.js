import React from 'react';
import Login from './Login';
import Cart from './Cart';
import LoginInfo from './LoginInfo';
import styled from 'styled-components';
import ThemeChange from './ThemeChange';

const RightBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 30%;
`;

function Right(props) {
  return (
    <RightBox>
      {/* <Login /> */}
      <LoginInfo/>
      <Cart />
      <ThemeChange />
    </RightBox>
  );
}

export default Right;
