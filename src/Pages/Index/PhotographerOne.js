import React, { useContext } from 'react';
import { imgUrl } from '../../config';
import img from '../../images/person_2_uncolor.jpg';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';

const PhotographerBox = styled.div`
  width: 1200px;
  height: 600px;
  position: relative;
  font-family: art;
  .people {
    width: 400px;
    height: 550px;
    border-radius: 200px;
    position: absolute;
    top: 20px;
    left: 70px;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: 60% center;
    background-size: 210%;
    z-index: 2;
  }
  .photo {
    width: 560px;
    height: 370px;
    position: absolute;
    top: 0px;
    right: 200px;
    z-index: 1;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .people_text {
    width: 550px;
    height: 258px;
    position: absolute;
    bottom: 0px;
    right: 70px;
    padding: 60px 100px;
    h2 {
      line-height: 70px;
      color: #727171;
    }
    p {
      line-height: 30px;
      font-weight: 700;
      text-align: justify;
    }
  }
`;

const People = styled.div`
  box-shadow: -30px 0px
    ${(props) => (props.$mode === 'dog' ? '#c9a063' : '#18334e')};
`;

function PhotographerOne() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <PhotographerBox>
      <People className="people" $mode={mode}></People>
      <div className="photo">
        <img
          src={`${imgUrl}/images/pexels-vladimir-kudinov-36372.jpg`}
          alt=""
        />
      </div>
      <div className="people_text bg_bright_color">
        <h2>#Photographer 01:柏延</h2>
        <p className="text_main_dark_color2">
          「攝影當興趣很好，但如果想當飯吃也不用考慮太多，只要能養活自己的、不給家庭造成負擔，那麼就去做吧。」
        </p>
      </div>
    </PhotographerBox>
  );
}

export default PhotographerOne;
