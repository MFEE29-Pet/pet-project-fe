import React from 'react';
import styled from 'styled-components';
import { imgUrl } from '../../config';

const About = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: art;
  .left {
    width: 45%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: flex-end;
    h2 {
      font-size: 48px;
      font-weight: 900;
      margin-top: 10px;
    }
    p {
      font-size: 24px;
      line-height: 30px;
    }
  }
  .right {
    width: 45%;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    img {
      width: 360px;
    }
  }
`;

const Button = styled.button`
  border: none;
  color: #fff;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 18px;
  cursor: pointer;
  align-self: flex-end;
  font-family: art;
`;

function Section1Bottom() {
  return (
    <About>
      <div class="left">
        <h2 className="text_main_dark_color2">愛寵就給毛孩最好的</h2>
        <p className="text_main_dark_color1">
          毛孩透過陪伴，把全部最好的給了我們，而我們雖不能給他們全部，但絕對能選擇給毛孩們最好的!
        </p>
        <Button className="bg_main_light_color1">珍惜夥伴</Button>
      </div>
      <div class="right">
        <img src={`${imgUrl}/images/Dog.png`} alt="" />
      </div>
    </About>
  );
}

export default Section1Bottom;
