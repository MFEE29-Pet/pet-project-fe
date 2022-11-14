import React from 'react';

function Popup({ trigger, setTrigger }) {
  return trigger ? (
    <>
      <section class="popup">
        <div class="filter-popup">
          <div class="filter-title">
            <i class="fa-solid fa-caret-right"></i>
            <h2>價格範圍</h2>
            <div
              class="close"
              onClick={() => {
                setTrigger(!trigger);
              }}
            >
              關閉
            </div>
          </div>
          <div class="price_input_form">
            <form method="get">
              <div class="price_input">
                <label for="min_price"></label>
                <input
                  type="number"
                  min="0"
                  placeholder="最小值"
                  name="min_price"
                  id="min_price"
                />
                <span> &#9473; </span>
                <label for="max_price"></label>
                <input
                  type="number"
                  placeholder="最大值"
                  name="max_price"
                  id="max_price"
                />
              </div>
              <div class="btn-group">
                {/* <!-- 使用自動填入 --> */}
                <button class="active">0-500</button>
                <button>500-1000</button>
                <button>1000-1500</button>
              </div>
              {/* <!-- <button class="price_filter_submit">確定</button>
              <button class="price_filter_reset">重設</button> --> */}
            </form>
          </div>
          <div class="filter-title">
            <i class="fa-solid fa-caret-right"></i>
            <h2>服務與促銷</h2>
          </div>
          <div class="service_sale_form">
            <form method="get">
              {/* <!-- 被選取的話增加class active --> */}
              <label for="sale" class="active">
                特價促銷
              </label>
              <input type="radio" name="sale" id="sale" />
              <label for="multi">多件優惠</label>
              <input type="radio" name="sale" id="multi" />

              <button class="price_filter_submit">確定</button>
              <button class="price_filter_reset">重設</button>
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
