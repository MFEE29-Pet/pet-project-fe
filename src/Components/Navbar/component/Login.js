import React from 'react';
import styled from 'styled-components';
import DogButton from '../../Buttons/DogButton';
import { Link } from 'react-router-dom';

const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

function Login() {
  return (
    <LoginBox>
      <Link to="/member/memberShipAdd">
        <DogButton Text="JoinNow" ClassName="bg_main_light_color1" />
      </Link>
      <Link to="/member/memberLogIn">
        <DogButton Text="LOGIN" ClassName="border_main_light_color1" />
      </Link>
    </LoginBox>
  );
}

export default Login;
