import React from 'react';
import styled from 'styled-components';
import DogButton from '../../Buttons/DogButton';

const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

function Login() {
  return (
    <LoginBox>
      <DogButton Text="JoinNow" ClassName="bg_main_light_color1"/>
      <DogButton Text="LOGIN" ClassName="border_main_light_color1" />
    </LoginBox>
  );
}

export default Login;
