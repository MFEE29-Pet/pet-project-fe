import { useState } from 'react';
import Popup from './Popup';

function Filter({ trigger, setTrigger }) {
  return (
    <>
      <div className="filter">
        <div className="filter-s-p">
          <div className="search-bar">
            <input type="search" name="search" id="search" />
            <i
              className="fa-solid fa-magnifying-glass bg_main_light_color1"
              id="pro-search"
            ></i>
          </div>
          <div
            className="price-filter"
            onClick={() => {
              setTrigger(!trigger);
            }}
          >
            <i className="fa-solid fa-filter"></i>
            <p>篩選</p>
          </div>
        </div>

        <div className="filter-and-page">
          <div className="filter-btn-group">
            <button className="newProduct bg_main_light_color1 active">
              最新商品
            </button>
            <button className="bestProduct bg_main_light_color1">
              熱賣商品
            </button>
            <select
              name="priceSort"
              id="priceSort"
              className="bg_main_light_color1"
            >
              <option value="">價格排序</option>
              <option value="positive">低到高</option>
              <option value="reverse">高到低</option>
            </select>
          </div>
          <div className="pageSel">
            <p>
              <span>1</span>/ 10
            </p>
            <div className="changeBtn">
              <div className="pre-page disable">
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className="next-page">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
