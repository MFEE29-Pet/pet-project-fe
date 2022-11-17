import React from 'react';
import LoginInfo from './LoginInfo';
import styled from 'styled-components';
import ThemeChange from './ThemeChange';
import CartIcon from '../../../Pages/Product/components/CartIcon';

const RightBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 30%;
`;
const CART = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Right(props) {
  return (
    <RightBox>
      <LoginInfo />


      <CART>
        <CartIcon />
      </CART>
      <ThemeChange />
    </RightBox>
  );
}

export default Right;
