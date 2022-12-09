import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { imgUrl } from '../../config';
import styled from 'styled-components';
import { gsap } from 'gsap';

const PETBOX = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  z-index: 50;
`;

const Img = styled.img`
  width: 50px;
  opacity: 0;
  z-index: 100;
`;

function StartPage() {
  const pet1 = useRef(null);
  const pet2 = useRef(null);
  const pet3 = useRef(null);
  const pet4 = useRef(null);
  const pet5 = useRef(null);

  const [show, setShow] = useState(true);


  const { pathname } = useLocation();

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    t1.to('.pet1', {
      y: 50,
      x: 0, // any properties (not limited to CSS)
      duration: 0.5, // seconds
      ease: 'power2.inOut',
      opacity: 1,
    })
      .to('.pet2', {
        y: 50,
        x: 0, // any properties (not limited to CSS)
        duration: 0.5, // seconds
        ease: 'power2.inOut',
        opacity: 1,
      })
      .to('.pet3', {
        y: 50,
        x: 0, // any properties (not limited to CSS)
        duration: 0.5, // seconds
        ease: 'power2.inOut',
        opacity: 1,
      })
      .to('.pet4', {
        y: 50,
        x: 0, // any properties (not limited to CSS)
        duration: 0.5, // seconds
        ease: 'power2.inOut',
        opacity: 1,
      })
      .to('.pet5', {
        y: 50,
        x: 0, // any properties (not limited to CSS)
        duration: 0.5, // seconds
        ease: 'power2.inOut',
        opacity: 1,
      });
  }, [pathname]);

  // useEffect(() => {
  //   if (pathname === '/') {
  //     setShow(true);
  //     document.body.style = 'overflow:hidden';
  //   }
  //   // } else {
  //   //   setShow(false);
  //   //   document.body.style = 'overflow:visiable';
  //   // }
  // }, [pathname]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //     document.body.style = 'overflow:visiable';
  //   }, 1000);
  // }, [show]);

  return (
    <>
      {show ? (
        <PETBOX>
          <div>
            <Img
              className="pet1"
              src={`${imgUrl}/images/logo_PetBan_1(ImgOnly).png`}
              alt=""
              ref={pet1}
            />
            <Img
              className="pet2"
              src={`${imgUrl}/images/logo_PetBan_2_1(ImgOnly).png`}
              alt=""
              ref={pet2}
            />
            <Img
              className="pet3"
              src={`${imgUrl}/images/logo_PetBan_2_2(ImgOnly).png`}
              alt=""
              ref={pet3}
            />
            <Img
              className="pet4"
              src={`${imgUrl}/images/logo_PetBan_3_1(ImgOnly).png`}
              alt=""
              ref={pet4}
            />
            <Img
              className="pet5"
              src={`${imgUrl}/images/logo_PetBan_3_2(ImgOnly).png`}
              alt=""
              ref={pet5}
            />
          </div>
        </PETBOX>
      ) : (
        ''
      )}
    </>
  );
}

export default StartPage;
