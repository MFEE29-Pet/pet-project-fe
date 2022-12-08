import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import { GET_RECOMMEND } from '../../Product/my-config';

function RecommendedCards() {
  const { mode } = useContext(SwitchButtonContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  // console.log(mode);

  const getRecommendedProduct = async () => {
    try {
      const res = await axios.get(
        `${GET_RECOMMEND}/${mode === 'dog' ? 5 : 13}`
      );

      // console.log(res);
      setRecommendedProducts(res.data.rows);
      // console.log(recommendedProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecommendedProduct();
  }, []);
  useEffect(() => {
    getRecommendedProduct();
  }, [mode, location]);

  return (
    <>
      {recommendedProducts.length > 0 &&
        recommendedProducts.map((e, i) => {
          return (
            <div
              key={e.sid}
              className="recommended_product_card"
              style={{
                width: '250px',
                margin: '0 10px 0 0 ',
                height: '90%',
              }}
            >
              <div
                className="img_wrap"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate(`/product/detail?sid=${e.sid}`);
                }}
              >
                <img
                  src={`/images/test/${e.img}`}
                  alt=""
                  style={{ width: '80%' }}
                />
              </div>
              <div className="product_name_wrap">
                <h2 style={{ textAlign: 'center' }}>{e.name}</h2>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default RecommendedCards;
