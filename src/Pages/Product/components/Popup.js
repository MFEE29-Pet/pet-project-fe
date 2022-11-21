import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PRODUCT_LIST } from '../my-config';
import { useLocation } from 'react-router-dom';

const LABEL = styled.label`
  &::after {
    content: '$';
    display: inline;
    color: #40220f;
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Popup({
  trigger,
  setTrigger,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
}) {
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);
  const [active, setActive] = useState('');
  const [btnActive, setBtnActive] = useState(0);
  const [checked, setChecked] = useState(false);

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = params.get('sid');
  if (!sid) {
    sid = '';
  } else {
    sid = `/detail/${sid}`;
  }
  // console.log({ sid });

  // get 篩選
  const handleClick = async (e) => {
    e.preventDefault();
    setTrigger(!trigger);
  };

  return trigger ? (
    <>
      <section className="popup">
        <div className="filter-popup bg_bright_color">
          <div className="filter-title">
            <i className="fa-solid fa-caret-right"></i>
            <h2>價格範圍</h2>
            <div
              className="close"
              onClick={() => {
                setTrigger(!trigger);
              }}
            >
              關閉
            </div>
          </div>
          <div className="price_input_form">
            <form method="post">
              <div className="price_input">
                <LABEL htmlFor="min_price"></LABEL>
                <input
                  type="number"
                  min="0"
                  placeholder="最小值"
                  name="min_price"
                  id="min_price"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                />
                <span> &#9473; </span>
                <LABEL htmlFor="max_price"></LABEL>
                <input
                  type="number"
                  placeholder="最大值"
                  name="max_price"
                  id="max_price"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                />
              </div>
              <div className="btn-group">
                {/* <!-- 使用自動填入 --> */}
                <button
                  type="button"
                  className={`border_main_light_color1 ${
                    btnActive === 1 ? 'active' : ''
                  }`}
                  key={`1`}
                  onClick={() => {
                    setMinPrice(0);
                    setMaxPrice(500);
                    setBtnActive(1);
                  }}
                >
                  0-500
                </button>
                <button
                  className={`border_main_light_color1 ${
                    btnActive === 2 ? 'active' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    setMinPrice(500);
                    setMaxPrice(1000);
                    setBtnActive(2);
                  }}
                  key={`2`}
                >
                  500-1000
                </button>
                <button
                  className={`border_main_light_color1 ${
                    btnActive === 3 ? 'active' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    setMinPrice(1000);
                    setMaxPrice(1500);
                    setBtnActive(3);
                  }}
                  key={`3`}
                >
                  1000-1500
                </button>
              </div>
              <div className="filter-title">
                <i className="fa-solid fa-caret-right"></i>
                <h2>服務與促銷</h2>
              </div>
              {/* <!-- 被選取的話增加class active --> */}
              <div
                className="service_sale_form"
                style={{ margin: '30px 15px' }}
              >
                <label
                  htmlFor="sale"
                  key={`sp`}
                  className={`border_main_light_color1 ${
                    active === 'sp' ? 'active' : ''
                  }`}
                  onClick={() => setActive('sp')}
                >
                  特價促銷
                </label>
                <input
                  type="radio"
                  name="sp_sale"
                  id="sale"
                  checked={active === 'sp' ? true : false}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
                <label
                  htmlFor="multi"
                  key={`multi`}
                  className={`border_main_light_color1 ${
                    active === 'multi' ? 'active' : ''
                  }`}
                  onClick={() => setActive('multi')}
                >
                  多件優惠
                </label>
                <input
                  type="radio"
                  name="multi_sale"
                  id="multi"
                  checked={active === 'multi' ? true : false}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
              </div>

              <button
                className="price_filter_submit bg_main_light_color1"
                onClick={handleClick}
                type="submit"
              >
                確定
              </button>
              <button
                className="price_filter_reset bg_main_light_color2"
                type="button"
                onClick={() => {
                  setMinPrice(0);
                  setMaxPrice(0);
                  setActive('');
                  setBtnActive(0);
                }}
              >
                重設
              </button>
            </form>
          </div>
          {/* <div className="filter-title">

          </div>
          <div className="service_sale_form">

          </div> */}
        </div>
      </section>
    </>
  ) : (
    <></>
  );
}

export default Popup;
