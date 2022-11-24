import React, { useContext, useLayoutEffect, useRef } from 'react';
import { imgUrl } from '../../config';
import img from '../../images/person_2_uncolor.jpg';
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
    position: relative;
    position: absolute;
    top: 0px;
    right: 200px;
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
      <People className="people" $mode={mode}></People>
      <div className="photo" ref={photo}>
        <img
          className="aaa"
          src={`${imgUrl}/images/YenStyle_1.jpg`}
          alt=""
          style={{
            zIndex: 5,
            width: '100%',
            top: '-30px',
          }}
        />
        <img
          className="bbb"
          src={`${imgUrl}/images/YenStyle_2.jpg`}
          alt=""
          style={{
            zIndex: 4,
            width: '100%',
            top:'-200px'
          }}
        />
        <img
          className="ccc"
          src={`${imgUrl}/images/YenStyle_3.jpg`}
          alt=""
          style={{
            zIndex: 3,
            width: '100%',
            top:'-300px'
          }}
        />
        <img
          className="ddd"
          src={`${imgUrl}/images/YenStyle_4.jpg`}
          alt=""
          style={{
            zIndex: 2,
            width: '100%',
            top:'-300px'
          }}
        />
        <img
          className="eee"
          src={`${imgUrl}/images/YenStyle_5.jpg`}
          alt=""
          style={{
            zIndex: 1,
            width: '100%',
            top:'-100px'
          }}
        />
        <img
          src={`${imgUrl}/images/YenStyle_1.jpg`}
          alt=""
          style={{ width: '100%',top: '-30px'}}
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
