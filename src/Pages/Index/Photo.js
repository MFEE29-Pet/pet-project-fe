import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PhotographerOne from './PhotographerOne';
import PhotographerTwo from './PhotographerTwo';
import PhotographerThree from './PhotographerThree';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PHOTO = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const PhotoBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Photo() {
  const PhotoMove = useRef();

  useEffect(() => {
    let container = document.querySelector(".bbb");
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aaa',
        end: () => container.scrollWidth - document.documentElement.clientWidth,
        scrub: true,
        pin: true,
      },
      defaults: { ease: 'none'},
    });

    t2.to('.bbb', { x: '-66%' });
  }, []);

  return (
    <PHOTO className="aaa">
      <PhotoBox className="index_photo_bg bbb" ref={PhotoMove} >
        <PhotographerOne />
        <PhotographerTwo />
        <PhotographerThree />
      </PhotoBox>
    </PHOTO>
  );
}

export default Photo;
