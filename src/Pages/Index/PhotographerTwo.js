import React, { useContext } from 'react';
import { imgUrl } from '../../config';
import img from '../../images/person_2_uncolor.jpg'
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
    bottom: 0px;
    left: 70px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: 60% center;
    background-size: 210%;
    z-index: 2;
  }
  .photo {
    width: 560px;
    height: 350px;
    position: absolute;
    bottom: 0px;
    right: 20px;
    z-index: 1;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .people_text {
    width: 430px;
    height: 357px;
    position: absolute;
    top: 0px;
    right: 340px;
    padding: 60px 70px;
    h2{
      line-height: 70px;
      color: #727171;
    }
    p{
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

function PhotographerTwo() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <PhotographerBox>
      <People className="people" $mode={mode}></People>
      <div className="photo">
        <img src={`${imgUrl}/images/pexels-vladimir-kudinov-36372.jpg`} alt="" />
      </div>
      <div className="people_text bg_bright_color">
        <h2>#Photographer 02:裕庭</h2>
        <p className='text_main_dark_color2'>
          「若你也喜歡攝影、想當攝影師，那麼希望你能喜歡上攝影以外的事物，這比什麼都重要!」
        </p>
      </div>
    </PhotographerBox>
  );
}

export default PhotographerTwo;
