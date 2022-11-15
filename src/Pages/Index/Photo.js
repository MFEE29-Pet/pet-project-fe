import React, { useLayoutEffect, useRef } from 'react';
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
  const PhotoAAA = useRef();
  const PhotoBBB = useRef();

  useLayoutEffect(() => {
    const Photo_AAA = PhotoAAA.current;
    const Photo_BBB = PhotoBBB.current;

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: Photo_AAA,
          end: 'bottom',
          scrub: true,
          pin: true,
        },
        defaults: { ease: 'none' },
        // smoothChildTiming: true,
        // autoRemoveChildren: true,
      });

      t1.to(Photo_BBB, { x: '-66%' });
    }, Photo_AAA);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <PHOTO ref={PhotoAAA}>
      <PhotoBox className="index_photo_bg" ref={PhotoBBB}>
        <PhotographerOne />
        <PhotographerTwo />
        <PhotographerThree />
      </PhotoBox>
    </PHOTO>
  );
}

export default Photo;
