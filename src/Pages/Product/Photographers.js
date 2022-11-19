import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PHOTOGRAPH } from './my-config';
import PhotographersCard from './components/PhotographersCard';
import MyCarousel from './components/MyCarousel';

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
  const [photoGraphers, setPhotoGraphers] = useState([]);
  // 取得商品資料
  const getPhotoGraphers = async () => {
    try {
      const res = await axios.get(`${PHOTOGRAPH}`);

      // console.log(res);

      const photographers = res.data.rows;
      setPhotoGraphers(photographers);
      console.log(photoGraphers);
    } catch (e) {
      console.log(e.message);
    }
  };

  // didMount 載入資料
  useEffect(() => {
    getPhotoGraphers();
  }, []);

  return (
    <>
      <div className="title_wrap" style={{ marginBottom: '30px' }}>
        <H2>攝影師</H2>
      </div>
      <div
        className="photographers_row"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <PhotographersCard photoGraphers={photoGraphers} />
      </div>
      <MyCarousel />
    </>
  );
}

export default Photographers;
