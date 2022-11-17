import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDataContext from '../../../contexts/ProductDataContext';
import PageContext from '../contexts/PageContext';

function Filter({ trigger, setTrigger }) {
  const [keywords, setKeywords] = useState('');
  const { totalPages, page } = useContext(ProductDataContext);
  const { nowPage, location, cate } = useContext(PageContext);
  const navigate = useNavigate();

  // console.log(totalPages);
  const handleClick = (e) => {
    setKeywords(e.target.value);
  };
  return (
    <>
      <div className="filter">
        <div className="filter-s-p">
          <div className="search-bar">
            <input
              type="search"
              name="search"
              id="search"
              onClick={handleClick}
            />
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
              <span>{nowPage}</span>/ {totalPages}
            </p>
            <div className="changeBtn">
              <div
                className={`pre-page ${page === 1 ? 'disable' : ''}`}
                onClick={() => {
                  navigate(
                    nowPage > 1
                      ? `${location.pathname}${
                          cate
                            ? `?cate=${cate}&page=${
                                nowPage <= 1 ? 1 : nowPage - 1
                              }`
                            : `?page=${nowPage <= 1 ? 1 : nowPage - 1}`
                        }`
                      : `${location.pathname}${
                          cate ? `?cate=${cate}&page=${1}` : `?page=${1}`
                        }`
                  );
                }}
              >
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div
                className={`next-page ${page === totalPages ? 'disable' : ''}`}
                onClick={() => {
                  navigate(
                    nowPage < totalPages
                      ? `${location.pathname}${
                          cate
                            ? `?cate=${cate}&page=${
                                nowPage >= totalPages ? totalPages : nowPage + 1
                              }`
                            : `?page=${
                                nowPage >= totalPages ? totalPages : nowPage + 1
                              }`
                        }`
                      : `${location.pathname}${
                          cate
                            ? `?cate=${cate}&page=${totalPages}`
                            : `?page=${totalPages}`
                        }`
                  );
                }}
              >
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
