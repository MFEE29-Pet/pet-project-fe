import { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  MailruIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

// import AuthContext from '../../contexts/AuthContext';
import { PRODUCT_DETAIL } from './my-config';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
import CartInfoContext from './contexts/CartInfoContext';
import IsLovedContext from './contexts/IsLovedContext';

import ProductSidebar from './components/ProductSidebar';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import ReplyPopup from './components/ReplyPopup';
import RelatedProduct from './components/RelatedProduct';
import History from './components/History';
import Comments from './components/Comments';
import GoToTop from './components/GoToTop';

// styled components
const InfoDiv = styled.div`
  &::before {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
    border: 1px solid
      ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
  }
`;

const ShowStars = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  overflow: hidden;
`;

function ProductDetail() {
  const navigate = useNavigate();
  // context
  // 模式切換
  const { mode } = useContext(SwitchButtonContext);
  // 購物車項目
  const { handleAddCart } = useContext(CartInfoContext);
  // 收藏項目
  const { lovedList, delLoved, addLoved, loved, indexNum } =
    useContext(IsLovedContext);

  // states
  // 收藏連結 Hover
  const [lovedHover, setLovedHover] = useState(false);
  // 彈出視窗狀態
  const [showDiv, setShowDiv] = useState(false);
  // 商品評論
  const [comments, setComments] = useState([]);
  // 相關商品
  const [relatedProducts, setRelatedProducts] = useState([]);

  // 商品細節資訊初始狀態
  let initProductDetail = [
    {
      sid: 0,
      name: '',
      category: 0,
      img: '',
      price: 0,
      member: 0,
      member_price: 0,
      specials: '',
      info: '',
      created_at: '',
      inventory: 0,
      on_sale: 1,
    },
  ];
  // 商品細節資訊 state
  const [productDetail, setProductDetail] = useState(initProductDetail);
  // 評價平均數
  const [avgNum, setAvgNum] = useState(0);
  // 數量 state
  const [amount, setAmount] = useState(1);

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');
  if (!sid) {
    sid = '';
  } else {
    sid = `/${sid}`;
  }
  // console.log({ sid });

  // 取得商品資料
  const getProductsDetail = async () => {
    try {
      const res = await axios.get(`${PRODUCT_DETAIL}${sid}`);

      // console.log(res);

      const productData = res.data.rows;
      setProductDetail(productData);
      setAvgNum(res.data.avgScores);
      // DONE sql 商品sid超過125 抓不到 ???  (後端sql語法問題)
      setRelatedProducts(res.data ? res.data.related_p : []);
      setComments(res.data.comment);
      // console.log(res.data.related_p);
    } catch (e) {
      console.log(e.message);
    }
  };

  // didMount 載入資料
  useEffect(() => {
    getProductsDetail();
    setAmount(1);
  }, [location]);

  // XXX 待加入登入狀態
  // const { myAuth, setMyAuth, logout } = useContext(AuthContext);
  // console.log(myAuth);

  // 取出 商品data
  const pd = productDetail.map((e, i) => {
    return { ...e };
  });
  const data = pd[0];
  console.log(data);

  // console.log(avgNum);

  // breadcrumb 連結用
  const routes = [
    {
      to: '/product',
      label: `所有商品`,
    },
    {
      to: `/product?cate=${data.category}&page=1`,
      label: `${data.cname}`,
    },
  ];

  // DONE 寫入context 保持狀態 嘗試載入頁面判斷
  // const [indexNum, setIndexNum] = useState(-1);

  return (
    <>
      <main>
        <ProductSidebar />

        <section className="right">
          {/* <!-- search-bar & pro-loved --> */}
          <div className="filter-s-p" style={{ justifyContent: 'flex-end' }}>
            <div className="pro-loved-list">
              <div
                style={{ display: 'flex' }}
                onMouseEnter={() => {
                  setLovedHover(!lovedHover);
                }}
                onMouseLeave={() => {
                  setLovedHover(!lovedHover);
                }}
                onClick={() => {
                  if (JSON.stringify(localStorage.getItem('auth'))) {
                    navigate('/member/memberProductCollect');
                  } else {
                    alert('請先登入');
                    navigate('/member/memberLogIn');
                  }
                }}
              >
                <i
                  className={`${
                    lovedHover ? 'fa-solid' : 'fa-regular'
                  } fa-heart`}
                ></i>
                <p style={{ textAlign: 'end' }}>我的收藏</p>
              </div>
            </div>
          </div>

          {/* <!-- products info --> */}
          <InfoDiv $mode={mode} className="product-info-div bg_bright_color">
            <div className="img-wrap">
              <img src={`/images/test/${data.img}`} alt="" />
            </div>
            <div className="product-info-text">
              {/* <!-- breadcrumb --> */}
              <Breadcrumb
                routes={routes}
                separator={<BreadcrumbRightArrowIcon />}
              />

              <div className="product-title-wrap">
                <h2>{data.name}</h2>
              </div>

              <div className="product-price-wrap">
                <p>
                  <span>${data.member_price}</span>
                  <s>${data.price}</s>{' '}
                </p>
              </div>

              <div className="product-info-introduce">
                <p className="text_main_light_color2">{data.info}</p>
              </div>

              <div className="product-q-loved">
                <div className="product-quanity">
                  <p>數量</p>
                  <i
                    className="fa-solid fa-minus q-reduce bg_main_light_color2"
                    onClick={() => {
                      setAmount(amount > 1 ? amount - 1 : 1);
                    }}
                  ></i>
                  <input
                    className="q-num"
                    value={amount}
                    style={{
                      background: 'rgba(0,0,0,0)',
                      border: 'none',
                      width: '30px',
                      fontSize: '16px',
                    }}
                    type="number"
                    id="product-amount"
                    onChange={(e) => {
                      if (+e.target.value < 1) {
                        setAmount(1);
                      } else if (+e.target.value > data.inventory) {
                        setAmount(data.inventory);
                      } else {
                        setAmount(Math.floor(+e.target.value));
                      }
                    }}
                  />
                  <i
                    className="fa-solid fa-plus q-add bg_main_light_color2"
                    onClick={() => {
                      setAmount(
                        amount < +data.inventory ? amount + 1 : data.inventory
                      );
                    }}
                  ></i>
                </div>
                <div
                  className="add-loved"
                  onClick={() => {
                    if (loved) {
                      delLoved(+params.get('sid'), indexNum);
                    } else {
                      addLoved(+params.get('sid'));
                      // console.log(lovedList);
                      // console.log(loved);
                    }
                  }}
                >
                  <p>{loved ? '取消收藏' : '加入收藏'}</p>
                  <i
                    className={`${loved ? 'fa-solid' : 'fa-regular'} fa-heart`}
                  ></i>
                </div>
                <FacebookShareButton
                  url={`https://github.com/AndyLincode`}
                  quote={`GitHub`}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>

              <div className="sales-info">
                <ul>
                  <li>
                    <p>全店，消費滿$2000即享「宅配」免運費</p>
                  </li>
                  <li>
                    <p>全店，消費滿$2000即享「超取」免運費</p>
                  </li>
                </ul>
              </div>

              <div className="buy-button-group">
                <button
                  className="cart-btn bg_main_light_color1 "
                  type="button"
                  onClick={() => {
                    handleAddCart(data, amount);
                  }}
                >
                  加入購物車
                </button>
                <button
                  className="buy-btn border_main_light_color1"
                  onClick={() => {
                    navigate('/cart');
                  }}
                >
                  立即購買
                </button>
                {/* <button
                  onClick={() => {
                    handleReduce(data);
                  }}
                >
                  購物車減1
                </button> */}
              </div>
            </div>
          </InfoDiv>

          {/* <!-- score div --> */}
          <div className="score-div">
            <div className="score-title-wrap">
              <h2>綜合分數</h2>
              <h2>買家評論</h2>
            </div>
            <div className="score-content">
              <div className="star-score-total">
                <div className="score">
                  <h1>{avgNum ? avgNum.toFixed(1) : 0}</h1>
                </div>
                <div className="stars">
                  <div className="showStars" style={{ position: 'relative' }}>
                    <div className="noneStars">
                      <i className="fa-regular fa-star "></i>
                      <i className="fa-regular fa-star "></i>
                      <i className="fa-regular fa-star "></i>
                      <i className="fa-regular fa-star "></i>
                      <i className="fa-regular fa-star "></i>
                    </div>
                    <ShowStars
                      className="showStars"
                      avg={avgNum}
                      style={{ width: `${(avgNum / 5) * 100}%` }}
                    >
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </ShowStars>
                  </div>
                  {/* <!-- 彈跳視窗 --> */}
                  <div
                    className="write-reply"
                    onClick={() => {
                      setShowDiv(!showDiv);
                    }}
                  >
                    <i className="fa-light fa-message-pen"></i>
                    <p>撰寫評論</p>
                  </div>
                </div>

                <div className="stars-progress">
                  <div className="progress-item">
                    <label htmlFor="stars">5</label>
                    <progress id="stars" value="95" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">4</label>
                    <progress id="stars" value="85" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">3</label>
                    <progress id="stars" value="40" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">2</label>
                    <progress id="stars" value="5" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">1</label>
                    <progress id="stars" value="0" max="100"></progress>
                  </div>
                </div>
              </div>

              {/* 評論顯示 */}
              <Comments comments={comments} />
            </div>
          </div>
        </section>
      </main>
      <ReplyPopup
        setShowDiv={setShowDiv}
        showDiv={showDiv}
        sid={data.sid}
        getProductsDetail={getProductsDetail}
      />
      {/* <!-- history sec --> */}
      <History />

      {/* 相關商品 */}
      <section className="bottom-pro-list">
        <div className="bottom-list-pro-title">
          <h2>相關商品</h2>
        </div>
        <RelatedProduct relatedProducts={relatedProducts} setRelatedProducts={setRelatedProducts} />
      </section>
      {/* Go To Top */}
      <GoToTop />
    </>
  );
}

export default ProductDetail;
