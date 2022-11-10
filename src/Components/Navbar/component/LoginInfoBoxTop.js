import React from 'react';
import styled from 'styled-components';
import { imgUrl } from '../../../config/index';

const LoginInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  cursor: pointer;
`;
const H2 = styled.h2`
  font-family: art;
  font-size: 20px;
  font-weight: 700;
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

function LoginInfoBoxTop() {
  return (
    <LoginInfoTop>
      <H2 className="text_main_dark_color2">歡迎回來</H2>
      <H2 className="text_main_dark_color2">甜甜圈</H2>
      <PHOTO className="border_big_main_light_color1">
        <IMG src={`${imgUrl}/images/test.webp`} alt="" />
      </PHOTO>
    </LoginInfoTop>
  );
}

export default LoginInfoBoxTop;
