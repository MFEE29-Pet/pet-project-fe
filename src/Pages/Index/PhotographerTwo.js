import React, { useContext, useLayoutEffect, useRef } from 'react';
import { imgUrl } from '../../config';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
import gsap from 'gsap';

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
    z-index: 2;
    overflow:hidden;
  }
  .photo {
    width: 560px;
    height: 350px;
    position: relative;
    position: absolute;
    bottom: 0px;
    right: 20px;
    z-index: 1;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      overflow: hidden;
    }
  }
  .people_text {
    width: 430px;
    height: 357px;
    position: absolute;
    top: 0px;
    right: 340px;
    padding: 60px 70px;
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

function PhotographerTwo() {
  const { mode } = useContext(SwitchButtonContext);
  const photo = useRef();
  useLayoutEffect(() => {
    const Photo = photo.current;

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        repeat: -1,
        opacity: 1,
        defaults: {
          duration: 4,
          ease: 'none',
        },
      });
      t1.to('.aaa', { opacity: 0 })
        .to('.bbb', { opacity: 0 })
        .to('.ccc', { opacity: 0 })
        .to('.ddd', { opacity: 0 })
        .to('.eee', { opacity: 0 });
    }, Photo);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <PhotographerBox>
      <People className="people" $mode={mode}>
      <img src={`${imgUrl}/images/Photographer_Index_Ting.png`} alt="" style={{height:'100%',position:'absolute',top:'0',left:'50%',transform:'translateX(-50%)'}}/>
      </People>
      <div className="photo" ref={photo}>
        <img
          className="aaa"
          src={`${imgUrl}/images/TingStyle_1.jpg`}
          alt=""
          style={{
            zIndex: 5,
            width: '100%',
            top:'-100px'
          }}
        />
        <img
          className="bbb"
          src={`${imgUrl}/images/TingStyle_2.jpg`}
          alt=""
          style={{
            zIndex: 4,
            width: '100%',
            top:'-70px'
          }}
        />
        <img
          className="ccc"
          src={`${imgUrl}/images/TingStyle_3.jpg`}
          alt=""
          style={{
            zIndex: 3,
            width: '100%',
            top:'-200px'
          }}
        />
        <img
          className="ddd"
          src={`${imgUrl}/images/TingStyle_4.jpg`}
          alt=""
          style={{
            zIndex: 2,
            width: '100%',
            top:'-50px'
          }}
        />
        <img
          className="eee"
          src={`${imgUrl}/images/TingStyle_5.jpg`}
          alt=""
          style={{
            zIndex: 1,
            width: '100%',
            top:'-50px'
          }}
        />
        <img src={`${imgUrl}/images/TingStyle_1.jpg`} alt="" style={{
            width: '100%',
            top:'-100px'
          }}/>
      </div>
      <div className="people_text bg_bright_color">
        <h2>#Photographer 02:裕庭</h2>
        <p className="text_main_dark_color2">
          「若你也喜歡攝影、想當攝影師，那麼希望你能喜歡上攝影以外的事物，這比什麼都重要!」
        </p>
      </div>
    </PhotographerBox>
  );
}

export default PhotographerTwo;
