import ProductSidebar from './components/ProductSidebar';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import { Link, useLocation } from 'react-router-dom';
import ReplyPopup from './components/ReplyPopup';
import axios from 'axios';
import { PRODUCT_DETAIL } from './my-config';
// import AuthContext from '../../contexts/AuthContext';
import CartInfoContext from './contexts/CartInfoContext';
import IsLovedContext from './contexts/IsLovedContext';
import RelatedProduct from './components/RelatedProduct';

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
  // context
  // 模式切換
  const { mode } = useContext(SwitchButtonContext);
  // 購物車項目
  const { cartItem, setCartItem } = useContext(CartInfoContext);
  // 收藏項目
  const { lovedList, delLoved, addLoved, loved, indexNum } =
    useContext(IsLovedContext);

  // states
  // 收藏連結 Hover
  const [lovedHover, setLovedHover] = useState(false);
  // 彈出視窗狀態
  const [showDiv, setShowDiv] = useState(false);
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
      setRelatedProducts(res.data.related_p);
      // console.log(relatedProducts);
    } catch (e) {
      console.log(e.message);
    }
  };

  // didMount 載入資料
  useEffect(() => {
    getProductsDetail();
    setAmount(1);
  }, [location]);
  // console.log(productDetail);

  // XXX 待加入登入狀態
  // const { myAuth, setMyAuth, logout } = useContext(AuthContext);
  // console.log(myAuth);

  // 取出 商品data
  const pd = productDetail.map((e, i) => {
    return { ...e };
  });
  const data = pd[0];

  // console.log(avgNum);

  // DONE 加入購物車
  const handleAddCart = async () => {
    let index = cartItem.productCart.findIndex((e) => e.p_sid === data.p_sid);
    // console.log(index);
    // 非重複商品
    if (index === -1) {
      const products = await {
        ...cartItem,
        productCart: [
          ...cartItem.productCart,
          {
            p_sid: data.p_sid,
            p_name: data.name,
            price: data.member_price,
            image:data.img,
            amount: amount,
          },
        ],
        totalItem: cartItem.totalItem + 1,
        totalPrice: cartItem.totalPrice + data.member_price * amount,
        totalAmount: cartItem.totalAmount + amount,
      };
      localStorage.setItem('cartItem', JSON.stringify({ ...products }));
      // console.log({ products });
      setCartItem(products);
    } else {
      cartItem.productCart[index] = {
        ...cartItem.productCart[index],
        amount: cartItem.productCart[index].amount + amount,
      };
      const newProductState = {
        ...cartItem,
        productCart: cartItem.productCart,
        totalPrice: cartItem.totalPrice + data.member_price * amount,
        totalAmount: cartItem.totalAmount + amount,
      };
      localStorage.setItem('cartItem', JSON.stringify(newProductState));
      console.log({ newProductState });
      setCartItem(newProductState);
    }
  };
  // console.log({ cartItem });

  // breadcrumb 連結用
  const routes = [
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

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // let usp = +params.get('page') || 1;
  // let cate = +params.get('cate');
  let sid = +params.get('sid');
  // let p_sid = +params.get('p_sid');
  // console.log({ usp, cate });

  //  思考如果所有商品該如何處理 ?
  // 目前解法: 後端篩選 新增 子分類 和 母分類 路由
  if (!sid) {
    sid = '';
  } else {
    sid = `/detail/${sid}`;
  }

  // console.log({ sid });

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get(`${PRODUCT_LIST}${sid}`);

      // console.log(res);

      const productData = res.data.rows;
      setProductDetail(productData);
    } catch (e) {
      console.log(e.message);
    }
  };

  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, [location]);

  // console.log(productDetail);

  const pd = productDetail.map((e, i) => {
    return { ...e };
  });
  const data = pd[0];
  // console.log(data);

  // DONE 寫入context 保持狀態 嘗試載入頁面判斷
  // const [indexNum, setIndexNum] = useState(-1);

  // console.log(indexNum);
  return (
    <>
      <main>
        <ProductSidebar />

        <section className="right">
          {/* <!-- search-bar & pro-loved --> */}
          <div className="filter-s-p" style={{ justifyContent: 'flex-end' }}>
            <div className="pro-loved-list">
              <Link
                to="/member"
                onMouseEnter={() => {
                  setLovedHover(!lovedHover);
                }}
                onMouseLeave={() => {
                  setLovedHover(!lovedHover);
                }}
              >
                <i
                  className={`${
                    lovedHover ? 'fa-solid' : 'fa-regular'
                  } fa-heart`}
                ></i>
                <p style={{ textAlign: 'end' }}>我的收藏</p>
              </Link>
            </div>
          </div>

          {/* <!-- products info --> */}
          <InfoDiv $mode={mode} className="product-info-div bg_bright_color">
            <div className="img-wrap">
              <img src={`/images/test/${data.img}`} alt="" />
            </div>
            <div className="product-info-text">
              {/* <!-- breadcrumb --> */}
              <nav className="nav-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">狗勾</a>
                  </li>
                  <li className="breadcrumb-item">飼料</li>
                </ol>
              </nav>

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
                  <i className="fa-solid fa-minus q-reduce bg_main_light_color2"></i>
                  <p className="q-num">1</p>
                  <i className="fa-solid fa-plus q-add bg_main_light_color2"></i>
                </div>
                <div
                  className="add-loved"
                  onClick={() => {
                    if (loved) {
                      delLoved(+params.get('sid'), indexNum);
                    } else {
                      addLoved(+params.get('sid'));
                      console.log(lovedList);
                      // console.log(loved);
                    }
                  }}
                >
                  <p>{loved ? '取消追蹤' : '加入追蹤'}</p>
                  <i
                    className={`${loved ? 'fa-solid' : 'fa-regular'} fa-heart`}
                  ></i>
                </div>
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
                  onClick={handleAddCart}
                >
                  加入購物車
                </button>
                <button className="buy-btn border_main_light_color1">
                  立即購買
                </button>
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
                  <h1>{avgNum.toFixed(1)}</h1>
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
                  <div
                    className="write-reply"
                    onClick={() => {
                      setShowDiv(!showDiv);
                    }}
                  >
                    <i className="fa-light fa-message-pen"></i>
                    <p>
                      {/* <!-- 彈跳視窗 --> */}
                      撰寫評論
                    </p>
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
              <div className="score-reply">
                <div className="reply-card">
                  <div className="user-img-wrap">
                    <img src="./images/person_2.jpeg" alt="" />
                  </div>
                  {/* <!-- 星星數 + 文字內容 --> */}
                  <div className="star-reply">
                    <div className="star-score">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="reply-text">
                      <p>
                        聽朋友說才來購買，雖然還沒給我家貓咪吃過，但我想我家貓主應該會很喜歡！
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reply-card">
                  <div className="user-img-wrap">
                    <img src="./images/person_6.jpeg" alt="" />
                  </div>
                  {/* <!-- 星星數 + 文字內容 --> */}
                  <div className="star-reply">
                    <div className="star-score">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="reply-text">
                      <p>
                        被包裝吸引決定買買看，沒想到價格實惠，我家Ｑ醬超愛吃！從沒見過Ｑ醬把盤子舔這麼乾淨過。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reply-card">
                  <div className="user-img-wrap">
                    <img src="./images/person_3.jpeg" alt="" />
                  </div>
                  {/* <!-- 星星數 + 文字內容 --> */}
                  <div className="star-reply">
                    <div className="star-score">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="reply-text">
                      <p>
                        這次是第三次回購，可惜特價的機會不多，每次要都趁著特價時買齊半年的份量，希望特價的檔次可以頻繁一點。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ReplyPopup setShowDiv={setShowDiv} showDiv={showDiv} sid={data.sid} />
      {/* <!-- history sec --> */}
      <section className="history">
        <div className="history-side-div">
          <div className="div-title-seen">
            <h2>最近看過</h2>
          </div>
          <div className="div-product-seen">
            <div className="product-img-wrap">
              <a href="">
                <img src="/images/test/can1.jpg" alt="" />
              </a>
            </div>
            <div className="product-img-wrap">
              <a href="">
                <img src="/images/test/can1.jpg" alt="" />
              </a>
            </div>
            <div className="product-img-wrap">
              <a href="">
                <img src="/images/test/can1.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-pro-list">
        <div className="bottom-list-pro-title">
          <h2>相關商品</h2>
        </div>
        {/* <div className="bottom-pro-ls-row">
          <div className="arrow arrow-left">
            <i className="fa-light fa-angle-left"></i>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can1.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can3.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can1.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can4.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/cat1-can7.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="arrow arrow-right">
            <i className="fa-light fa-angle-right"></i>
          </div>
        </div> */}
        <RelatedProduct relatedProducts={relatedProducts} />
      </section>

      <div
        className="go-to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <svg
          width="333"
          height="460"
          viewBox="0 0 333 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 64H300.5C318.2 64 332.5 49.7 332.5 32C332.5 14.3 318.2 0 300.5 0H32C14.3 0 0 14.3 0 32C0 49.7 14.3 64 32 64ZM48.7 212.5C36.2 225 36.2 245.3 48.7 257.8C61.2 270.3 81.5 270.3 94 257.8L135.3 216.4V321.75V427.1C135.3 444.8 149.6 459.1 167.3 459.1C185 459.1 199.3 444.8 199.3 427.1V216.4L240.7 257.8C253.2 270.3 273.5 270.3 286 257.8C298.5 245.3 298.5 225 286 212.5L190 116.5C177.5 104 157.2 104 144.7 116.5L48.7 212.5Z"
            fill="#fff"
          />
        </svg>
      </div>
    </>
  );
}

export default ProductDetail;
