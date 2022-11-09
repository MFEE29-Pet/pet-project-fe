import React from "react";
import styled from "styled-components";
import  DogYellowButton  from '../../Buttons/DogYellowButton'
import  DogWhiteButton  from "../../Buttons/DogWhiteButton";

const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

function Login() {
  return (
    <LoginBox>
      <DogYellowButton Text="Join NOW" />
      <DogWhiteButton Text="LOGIN"/>
    </LoginBox>
  );
}

export default Login;
