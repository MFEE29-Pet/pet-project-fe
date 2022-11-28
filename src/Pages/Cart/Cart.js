// 來源引用區-------------------------------------------------------------------------------------
import { useState, useContext, useEffect } from 'react';
import './cart.css';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';

//測試用假來源資料
// import jsonData from './orderTest.json';
import photoJsonData from './photoTest.json';

// 主題變色功能區-------------------------------------------------------------------------------------
const EasonProgressBar = styled.div`
  i {
    color: ${(props) => (props.$mode === 'dog' ? '#c9bc9c' : '#50a4b2')};
  }
  &::after {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#c9bc9c' : '#50a4b2'};
  }
  & .eason_dot {
    border: 0.13rem solid
      ${(props) => (props.$mode === 'dog' ? '#c9bc9c' : '#50a4b2')};
  }
  & a {
    color: ${(props) => (props.$mode === 'dog' ? '#c9bc9c' : '#50a4b2')};
  }
  & .eason_dot_1 {
    border: 0.13rem solid
      ${(props) => (props.$mode === 'dog' ? '#40220f' : '#18334e')};
  }
`;

// 整套購物車本體-------------------------------------------------------------------------------------
function Cart() {
  // 主題變色
  const { mode } = useContext(SwitchButtonContext);

  // 付款方式按鈕選定效果
  const [arrivedClick, setArrivedClick] = useState(false);
  const [creditClick, setCreditClick] = useState(false);

  // 加入結算勾選
  const [photoChecked, setPhotoChecked] = useState(true);
  const [productChecked, setProductChecked] = useState(true);

  // 結帳用預約攝影價格
  const [newPhotoPrice, setNewPhotoPrice] = useState(0);

  // 商品訂單明細 即時商品數量
  const [amount, setAmount] = useState([]);

  // 商品訂單明細 引入來源資料原始商品金額小計
  const [totalPrice, setTotalPrice] = useState([]);

  // 商品訂單明細 有被修改過數量的商品金額小計
  const [newTotalPrice, setNewTotalPrice] = useState(0);

  // 商品訂單明細 取資料上狀態為了要刪除時使用
  const [myData, setMyData] = useState([{}]);
  const [myPhotoData, setMyPhotoData] = useState([{}]);

  // 真實串接資料來源
  const myCart = localStorage.getItem('cartItem');
  const myProduct = JSON.parse(myCart).productCart;
  console.log(myCart.productCart);
  // localStorage抓出來的資料格式
  // photoCart:[]
  // productCart:
  // [{p_sid: 48, p_name: "貓玩具-滾筒轉盤玩具", price: 1680, image: "cat2-toy1.jpg", amount: 2},…]
  // totalAmount:3
  // totalItem:2
  // totalPrice:4859

  // 獲取來源資料
  const getData = () => {
    setMyData(myProduct);
    // setMyData(jsonData);

    setMyPhotoData(photoJsonData);
    setNewPhotoPrice(photoJsonData[0].photo_price);
  };

  // 商品訂單明細 商品數量相關連動功能
  const dataAmount = () => {
    console.log(myProduct);

    // 來源資料原始商品數量map
    const origiAmount = myProduct.map((v, i) => {
      return [v.amount];
    });
    setAmount(origiAmount);

    // 來源資料原始小計金額map
    const origiTotalPrice = myProduct.map((v, i) => v.member_price * v.amount);
    setTotalPrice(origiTotalPrice);

    // 所有小計加總後要結帳之總額
    setNewTotalPrice(origiTotalPrice.reduce((a, b) => a + b));
  };

  // 一進來頁面就載入來源資料
  useEffect(() => {
    dataAmount();
    getData();
  }, []);

  // 刪除攝影資料並剔除總金額功能
  const removePhotoData = (item) => {
    const remove = myPhotoData.filter((v, i) => {
      return v.photo_id !== item;
    });
    setMyPhotoData(remove);
    setNewPhotoPrice(0);
  };

  // 刪除商品資料功能
  const removeProductData = (item) => {
    const remove = myData.filter((v, i) => {
      return v.sid !== item;
    });
    setMyData(remove);
  };

  return (
    <>
      <div className="eason_container">
        {/* <!-- 進度條------------------------------------------------------------------------> */}
        <EasonProgressBar className="eason_progress_bar" $mode={mode}>
          <div className="eason_order">
            <i className="fa-light fa-file-pen fa-3x text_main_dark_color2"></i>
            <div className="eason_dot_1 bg_bright_color "></div>
            <a href="/#" className="text_main_dark_color2">
              確認訂單
            </a>
          </div>
          <div className="eason_pay ">
            <i className="fa-light fa-envelope-open-dollar fa-3x "></i>
            <div className="eason_dot bg_bright_color "></div>
            <a href="/#" className="">
              確認付款
            </a>
          </div>
          <div className="eason_check ">
            <i className="fa-light fa-circle-check fa-3x"></i>
            <div className="eason_dot bg_bright_color"></div>

            <a href="/#" className="">
              訂單成立
            </a>
          </div>
          <div className="eason_truck ">
            <i className="fa-light fa-truck-fast fa-3x"></i>
            <div className="eason_dot bg_bright_color"></div>
            <a href="/#" className="">
              配送中
            </a>
          </div>
          <div className="eason_complete ">
            <i className="fa-light fa-house-flag fa-3x"></i>
            <div className="eason_dot bg_bright_color"></div>
            <a href="/#" className="">
              訂單完成
            </a>
          </div>
        </EasonProgressBar>

        {/* <!-- 攝影預約明細------------------------------------------------------------------------> */}
        <div className="eason_section_1">
          <div className="eason_list_title ">
            {myPhotoData && myPhotoData.length !== 0 && (
              <>
                <h2 className="text_main_dark_color2">攝影預約明細</h2>
                <div className="eason_product_check">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={photoChecked ? 'checked' : ''}
                    onClick={() => {
                      setPhotoChecked(!photoChecked);
                    }}
                  />
                  <p
                    className="text_main_dark_color2"
                    style={{ fontSize: ' smaller' }}
                  >
                    加入結算
                  </p>
                </div>
              </>
            )}
          </div>
          <table className="eason_list_table">
            {myPhotoData && myPhotoData.length !== 0 && (
              <thead>
                <tr>
                  <th>頭像</th>
                  <th>攝影師</th>
                  <th>預約日期</th>
                  <th>預約時段</th>
                  <th>單價</th>
                  <th>刪除</th>
                </tr>
              </thead>
            )}

            <tbody>
              {/* 預約攝影資料引入------------------------------------------------------------------- */}
              {myPhotoData.map((v, i) => {
                return (
                  <tr key={v.id}>
                    <td className="eason_table_img">
                      <img src="./imgs/person_2.jpeg" alt="" width="100px" />
                    </td>
                    <td>{v.photographer}</td>
                    <td>{v.date}</td>
                    <td>{v.dayparts}</td>
                    <td className="eason_table_price">{v.photo_price}</td>
                    <td>
                      <span
                        onClick={() => {
                          removePhotoData(v.photo_id);
                        }}
                      >
                        <i className="fa-light fa-trash-can eason_fa-trash-can"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* <!-- 商品訂單明細------------------------------------------------------------------------> */}
        <div className="eason_section_2">
          <div className="eason_list_title">
            {myData && myData.length !== 0 && (
              <>
                <h2 className="text_main_dark_color2">商品訂單明細</h2>
                <div className="eason_product_check">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={productChecked ? 'checked' : ''}
                    onClick={() => {
                      setProductChecked(!productChecked);
                    }}
                  />
                  <p
                    className="text_main_dark_color2"
                    style={{ fontSize: 'smaller' }}
                  >
                    加入結算
                  </p>
                </div>
              </>
            )}
          </div>
          <table className="eason_list_table">
            {myData && myData.length !== 0 && (
              <thead>
                <tr>
                  <th>商品圖</th>
                  <th>商品名</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>刪除</th>
                </tr>
              </thead>
            )}

            <tbody>
              {/* 商品資料引入 --------------------------------------------------------------------*/}
              {myData.map((v, i) => {
                return (
                  <tr key={v.sid}>
                    <td className="eason_table_img">
                      <img
                        src="./imgs/product_3.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                    </td>
                    <td className="eason_p_name">{v.name}</td>
                    <td className="eason_table_price">{v.member_price}</td>
                    <td className="eason_table_amount">
                      <span
                        className=""
                        onClick={() => {
                          const decreaseAmount = [...amount];
                          decreaseAmount[i] = +decreaseAmount[i] - 1;
                          console.log(amount);

                          const decreasePrice = [...totalPrice];
                          decreasePrice[i] = decreaseAmount[i] * v.member_price;
                          console.log(decreasePrice);
                          setNewTotalPrice(
                            decreasePrice.reduce((a, b) => a + b)
                          );

                          setAmount(decreaseAmount);

                          setTotalPrice(decreasePrice);
                        }}
                      >
                        <i className="eason_fa-solid fa-solid fa-circle-minus">
                          {' '}
                        </i>
                      </span>
                      {amount[i]}
                      <span
                        className=""
                        onClick={() => {
                          const newAmount = [...amount];
                          newAmount[i] = +newAmount[i] + 1;
                          const newPrice = [...totalPrice];
                          newPrice[i] = newAmount[i] * v.member_price;
                          console.log(newPrice);

                          setAmount(newAmount);
                          setTotalPrice(newPrice);

                          setNewTotalPrice(newPrice.reduce((a, b) => a + b));
                        }}
                      >
                        <i className="eason_fa-solid   fa-solid fa-circle-plus"></i>
                      </span>
                    </td>
                    <td className="eason_table_total">{v.member_price * amount[i]}</td>
                    <td>
                      <span
                        onClick={() => {
                          setNewTotalPrice(newTotalPrice - v.member_price * amount[i]);
                          removeProductData(v.sid);

                          amount.splice(i, 1);
                        }}
                      >
                        <i className="fa-light fa-trash-can eason_fa-trash-can"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* <!-- 下方區域------------------------------------------------------------------------> */}
        <div className="eason_section_3">
          <div className="eason_s3_left">
            <h2 className="text_main_dark_color2">付款方式</h2>
            <button
              className={
                arrivedClick === false
                  ? 'bg_main_light_color1'
                  : 'bg_main_color'
              }
              onClick={() => {
                if (arrivedClick === false) {
                  setArrivedClick(true);
                  setCreditClick(false);
                } else {
                  setArrivedClick(false);
                }
              }}
            >
              貨到付款
            </button>

            <button
              className={
                creditClick === false ? 'bg_main_light_color1' : 'bg_main_color'
              }
              onClick={() => {
                if (creditClick === false) {
                  setCreditClick(true);
                  setArrivedClick(false);
                } else {
                  setCreditClick(false);
                }
              }}
            >
              信用卡
            </button>
          </div>

          <div className="eason_s3_right">
            <div className="eason_s3_right_top">
              <h2 className="text_main_dark_color2">優惠代碼</h2>
              <div className="discountArea">
                <input className="eason_discount_code" type="text" />
                <i className="bg_main_light_color1 fa-solid fa-magnifying-glass eason_fa-magnifying-glass  "></i>
              </div>
            </div>

            <div className="eason_s3_right_bottom">
              <h2 className="text_main_dark_color2">結算總額</h2>

              <div className="eason_total">
                <table>
                  <tr>
                    <th className="text_main_dark_color2">商品金額</th>
                    <td>
                      ${' '}
                      {(productChecked ? newTotalPrice : 0) +
                        (photoChecked ? newPhotoPrice : 0)}
                    </td>
                  </tr>

                  <tr>
                    <th className="text_main_dark_color2">優惠折扣</th>
                    <td>10%</td>
                  </tr>

                  <tr>
                    <th className="text_main_dark_color2">運費</th>
                    <td style={{ fontWeight: '900' }}>免運</td>
                  </tr>

                  <tr>
                    <th className="text_main_dark_color2">付款總額</th>
                    <td style={{ color: 'red', fontSize: 'large' }}>
                      ${' '}
                      {Math.ceil(
                        ((productChecked ? newTotalPrice : 0) +
                          (photoChecked ? newPhotoPrice : 0)) *
                          0.9
                      )}
                    </td>
                  </tr>
                </table>
              </div>

              <button className="eason_pay_btn bg_main_light_color1 ">
                前往付款
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
