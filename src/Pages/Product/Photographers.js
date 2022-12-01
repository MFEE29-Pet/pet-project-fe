import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PHOTOGRAPH } from './my-config';
import PhotographersCard from './components/PhotographersCard';
import MyCarousel from './components/MyCarousel';
import './style/photo.scss';

const H2 = styled.h2`
  text-align: center;
  color: '#40220f';
  font-size: 24px;
  font-weight: bold;
  &::before {
    content: '-';
    font-size: 30px;
    margin-right: 10px;
  }
  &::after {
    content: '-';
    font-size: 30px;
    margin-left: 10px;
  }
`;

function Photographers() {
  const [floatNum, setFloatNum] = useState(1);

  const [photoGraphers, setPhotoGraphers] = useState([]);

  // 取得攝影師資料
  const getPhotoGraphers = async () => {
    try {
      const res = await axios.get(`${PHOTOGRAPH}`);

      // console.log(res);

      const photographers = res.data.rows;
      setPhotoGraphers(photographers);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(photoGraphers);
  // didMount 載入資料
  useEffect(() => {
    getPhotoGraphers();
  }, []);

  const styleImages = photoGraphers.map((e, i) => {
    return e.style.split(',');
  });
  console.log(styleImages);
  // const Images = styleImages.map((e, i) => {
  //   // const styleImage = e.map((e2, i2) => {
  //   //   return e2;
  //   // });
  //   // return styleImage;
  //   return [...e];
  // });
  // console.log(Images);

  return (
    <>
      <div className="title_wrap" style={{ marginBottom: '30px' }}>
        <H2>攝影師</H2>
      </div>
      <div
        className="photographers_row"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <PhotographersCard
          photoGraphers={photoGraphers}
          floatNum={floatNum}
          setFloatNum={setFloatNum}
        />
      </div>
      <H2 style={{ marginTop: '100px' }}>攝影作品</H2>
      <div
        className="carouselDiv"
        style={{
          display: 'flex',
          margin: '50px 0 100px 0',
          justifyContent: 'center',
        }}
      >
        <MyCarousel styleImages={styleImages} floatNum={floatNum} />
      </div>
    </>
  );
}

export default Photographers;
