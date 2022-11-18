import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PHOTOGRAPH } from './my-config';
import PhotographersCard from './components/PhotographersCard';

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
        {/* <div
          className="photographer_cards"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className="photo_img_wrap"
            style={{
              width: '150px',
              height: '200px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/test/person_5.jpeg"
              alt=""
              style={{ height: '100%' }}
            />
          </div>
          <div className="photograph_name">
            <p>柏延</p>
          </div>
          <div className="reserver_btn">
            <button
              type="button"
              className="bg_main_light_color1"
              style={{
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                padding: ' 10px 50px',
                fontWeight: 'bold ',
              }}
            >
              立即預約
            </button>
          </div>
        </div> */}
        <PhotographersCard photoGraphers={photoGraphers} />
      </div>
    </>
  );
}

export default Photographers;
