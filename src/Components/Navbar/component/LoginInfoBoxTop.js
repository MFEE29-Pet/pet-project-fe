import React, { useContext } from 'react';
import styled from 'styled-components';
import { imgUrl } from '../../../config/index';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';

const LoginInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;
const H2 = styled.h2`
  font-family: art;
  font-size: 20px;
  font-weight: 700;
`;

const H3 = styled.h3`
  font-family: art;
  font-size: 16px;
  cursor: pointer;
`;

const PHOTO = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

const IMG = styled.img`
  width: 80px;
  height: 80px;
`;
const MemberBox = styled(Link)`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logout = styled.div``;

function LoginInfoBoxTop() {
  const { logout,myAuth } = useContext(AuthContext);


  return (
    <LoginInfoTop>
      <MemberBox to="/member">
        <H2 className="text_main_dark_color2">{myAuth.name}</H2>
        <PHOTO className="border_big_main_light_color1">
          <IMG src={`${imgUrl}/images/test.webp`} alt="" />
        </PHOTO>
      </MemberBox>
      <Logout
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        <H3 className="text_main_dark_color2">登出</H3>
      </Logout>
    </LoginInfoTop>
  );
}

export default LoginInfoBoxTop;
