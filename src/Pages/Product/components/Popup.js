import { useState } from 'react';

function Popup({ trigger, setTrigger }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return trigger ? (
    <>
      <section className="popup">
        <div className="filter-popup">
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
            <form method="get">
              <div className="price_input">
                <label htmlFor="min_price"></label>
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
                <label htmlFor="max_price"></label>
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
                  className="active"
                  onClick={() => {
                    setMinPrice(0);
                    setMaxPrice(500);
                  }}
                >
                  0-500
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMinPrice(500);
                    setMaxPrice(1000);
                  }}
                >
                  500-1000
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMinPrice(1000);
                    setMaxPrice(1500);
                  }}
                >
                  1000-1500
                </button>
              </div>
              {/* <!-- <button className="price_filter_submit">確定</button>
              <button className="price_filter_reset">重設</button> --> */}
            </form>
          </div>
          <div className="filter-title">
            <i className="fa-solid fa-caret-right"></i>
            <h2>服務與促銷</h2>
          </div>
          <div className="service_sale_form">
            <form method="get">
              {/* <!-- 被選取的話增加class active --> */}
              <label htmlFor="sale" className="active">
                特價促銷
              </label>
              <input type="radio" name="sale" id="sale" />
              <label htmlFor="multi">多件優惠</label>
              <input type="radio" name="sale" id="multi" />

              <button className="price_filter_submit">確定</button>
              <button
                className="price_filter_reset"
                type="button"
                onClick={() => {
                  setMinPrice(0);
                  setMaxPrice(0);
                }}
              >
                重設
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
}

export default Popup;
