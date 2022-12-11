import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { imgUrl } from '../../config';
import styled from 'styled-components';
import gsap from 'gsap';

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
  const pet1 = useRef();
  const pet2 = useRef();
  const pet3 = useRef();
  const pet4 = useRef();
  const pet5 = useRef();
  const all = useRef();

  const [show, setShow] = useState(true);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const aaa = pet1.current;
    const ALL = all.current;

    const ctx = gsap.context(() => {
      let t1 = gsap.timeline();

      t1.to(aaa, {
        y: 50,
        x: 0, // any properties (not limited to CSS)
        duration: 0.3, // seconds
        ease: 'power2.inOut',
        opacity: 1,
      })
        .to('.pet2', {
          y: 50,
          x: 0, // any properties (not limited to CSS)
          duration: 0.3, // seconds
          ease: 'power2.inOut',
          opacity: 1,
        })
        .to('.pet3', {
          y: 50,
          x: 0, // any properties (not limited to CSS)
          duration: 0.3, // seconds
          ease: 'power2.inOut',
          opacity: 1,
        })
        .to('.pet4', {
          y: 50,
          x: 0, // any properties (not limited to CSS)
          duration: 0.3, // seconds
          ease: 'power2.inOut',
          opacity: 1,
        })
        .to('.pet5', {
          y: 50,
          x: 0, // any properties (not limited to CSS)
          duration: 0.3, // seconds
          ease: 'power2.inOut',
          opacity: 1,
        });
    }, ALL);

    return () => {
      ctx.revert();
    };
  }, [show]);

  useEffect(() => {
    if (
      pathname === '/' ||
      pathname === '/forum' ||
      pathname === '/product' ||
      pathname === '/clinic' ||
      pathname === '/member/memberCenter'
    ) {
      setShow(true);
      document.body.style = 'overflow:hidden';
    }
  }, [pathname]);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        document.body.style = 'overflow:visiable';
      }, 1500);
    }
  }, [show]);

  return (
    <>
      {show ? (
        <PETBOX>
          <div ref={all}>
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
