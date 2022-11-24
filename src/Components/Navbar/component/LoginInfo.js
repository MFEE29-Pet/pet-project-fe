import React from 'react';
import styled from 'styled-components';
import LoginInfoBoxTop from './LoginInfoBoxTop';


const LoginInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  cursor: pointer;
`;

function LoginInfo() {

  return (
    <LoginInfoBox>
      <LoginInfoBoxTop/>
    </LoginInfoBox>
  );
}

export default LoginInfo;
