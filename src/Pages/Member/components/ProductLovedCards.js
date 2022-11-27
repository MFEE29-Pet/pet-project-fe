import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import axios from 'axios';
import { LOVE_LIST } from '../my-config';

const LIST = styled.div`
  &::before {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
    border: 1px solid
      ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
  }
`;

function ProductLovedCards() {
  const { mode } = useContext(SwitchButtonContext);
  const navigate = useNavigate();

  const [loveList, setLoveList] = useState([]);

  const m_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).sid
    : '未登入';

  function formatPrice(price) {
    let parts = price.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get(`${LOVE_LIST}?m_sid=${m_sid}`);

      // console.log(res);

      const loved = res.data.rows;
      setLoveList(loved);
      console.log(loved);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <LIST
        $mode={mode}
        className="list-row"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        {loveList.map((e, i) => {
          return (
            <div
              className="pro-card"
              key={e.p_sid}
              onClick={() => {
                // console.log(e2.sid);
                navigate(`/product/detail/?sid=${e.p_sid}`);
              }}
              style={{ margin: '20px 0' }}
            >
              <Link to="">
                <div className="img-wrap" style={{ height: '200px' }}>
                  <img
                    src={`/images/test/${e.img}`}
                    alt=""
                    style={{ height: '100%' }}
                  />
                </div>
                <div className="pro-title">
                  <p>{e.name}</p>
                  <p>
                    <s>${formatPrice(e.price)}</s>{' '}
                    <span>${formatPrice(e.member_price)}</span>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </LIST>
    </>
  );
}

export default ProductLovedCards;
