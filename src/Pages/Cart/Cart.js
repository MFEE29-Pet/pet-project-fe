// 來源引用區-------------------------------------------------------------------------------------
import { useState, useContext, useEffect, useRef } from 'react';
import './cart.css';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext'; //主題變色按鈕
import CartInfoContext from '../Product/contexts/CartInfoContext'; //購物車數量連動商品
import Swal from 'sweetalert2'; //警告套件
import withReactContent from 'sweetalert2-react-content'; //警告套件
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { Box } from '@material-ui/core';

import useMediaQuery from 'use-mediaquery';
import AuthContext from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

//測試用假來源資料
// import jsonData from './orderTest.json';
// import photoJsonData from './photoTest.json';

const MySwal = withReactContent(Swal);

// 進度條隨主題變色-------------------------------------------------------------------------------------
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
  const navigate = useNavigate();
  // 手機版畫面切換功能
  const matches = useMediaQuery('(max-width: 600px)');

  //拿到會員資料
  const member = JSON.parse(localStorage.getItem('auth'));
  const { myAuth } = useContext(AuthContext);

  // 主題變色
  const { mode } = useContext(SwitchButtonContext);

  //Opay Callback連結
  const [link, setLink] = useState('');

  // 付款方式按鈕選定效果
  const [arrivedClick, setArrivedClick] = useState(false);
  const [creditClick, setCreditClick] = useState(false);

  // 加入結算勾選
  const [photoChecked, setPhotoChecked] = useState(true);
  const [productChecked, setProductChecked] = useState(true);

  // 商品訂單明細 即時商品數量
  const [amount, setAmount] = useState([]);

  // 商品訂單明細 引入來源資料原始商品金額小計
  const [totalPrice, setTotalPrice] = useState([]);

  // 商品訂單明細 有被修改過數量的商品金額小計
  const [newTotalPrice, setNewTotalPrice] = useState(0);

  // 商品訂單明細 取資料上狀態為了要刪除時使用
  const [myProductData, setMyProductData] = useState([{}]);
  const [myPhotoData, setMyPhotoData] = useState([{}]);

  //付款方式
  const [payWay, setPayWay] = useState(0);

  //切換付款狀態
  const [show, setShow] = useState(false);

  // 真實串接 Local Storage 資料來源
  // cartItem 是 Local Storage 的 Key
  // productCart 和 photoCart 是 cartItem 的 Value
  const getCartItem = localStorage.getItem('cartItem');
  // console.log(getCartItem);
  const myCartItem = JSON.parse(getCartItem);
  // console.log(myCartItem);
  const myProductCart = JSON.parse(getCartItem).productCart;
  const myPhotoCart = JSON.parse(getCartItem).photoCart;

  const myPhotoTotalPrice = myCartItem.photo_totalPrice || 0;
  // console.log(myPhotoTotalPrice);
  const myTotalPrice = myCartItem.totalPrice;
  console.log({ myTotalPrice, myPhotoTotalPrice });
  // console.log(myCart.productCart);
  // localStorage抓出來的資料格式
  // photoCart:[]
  // productCart:
  // [{p_sid: 48, p_name: "貓玩具-滾筒轉盤玩具", price: 1680, image: "cat2-toy1.jpg", amount: 2},…]
  // totalAmount:3
  // totalItem:2
  // totalPrice:4859

  // 獲取來源資料
  const getData = () => {
    setMyProductData(myProductCart);
    // setMyProductData(jsonData);

    setMyPhotoData(myPhotoCart);
    // console.log(myPhotoData[0].price);
  };

  // 商品訂單明細 商品數量相關連動功能
  const dataAmount = () => {
    // console.log(myProductCart);

    // 來源資料原始商品數量map
    const origiAmount = myProductCart.map((v, i) => {
      return [v.amount];
    });
    setAmount(origiAmount);

    // 來源資料商品原始小計金額map
    const origiTotalPrice = myProductCart.map(
      (v, i) => v.member_price * v.amount
    );
    setTotalPrice(origiTotalPrice);

    // 所有商品小計加總後要結帳之總額

    setNewTotalPrice(origiTotalPrice.reduce((a, b) => a + b, 0));
  };

  // 一進來頁面就載入來源資料
  useEffect(() => {
    dataAmount();
    getData();
    // setAmount(+myCartItem.totalAmount);
  }, []);
  // console.log(amount);

  // 刪除攝影資料並剔除總金額功能
  const removePhotoData = (item) => {
    const remove = myPhotoData.filter((v, i) => {
      return v.sid !== item;
    });

    const removePhotoCart = {
      ...myCartItem,
      photoCart: [],
      photo_totalPrice: 0,
      totalAmount: myCartItem.totalAmount - 1,
      totalItem: myCartItem.totalItem - 1,
    };
    localStorage.setItem('cartItem', JSON.stringify(removePhotoCart));
    setCartItem(removePhotoCart);

    setMyPhotoData(remove);
  };

  // 刪除商品資料功能
  const removeProductData = (item) => {
    const remove = cartItem.productCart.filter((v, i) => {
      return v.sid !== item;
    });

    setMyProductData(remove);
  };

  // 購物車加減刪除Context
  const { cartItem, setCartItem, handleAddCart, handleReduce, handleClear } =
    useContext(CartInfoContext);

  // 優惠代碼
  const [discount, setDiscount] = useState(0);

  const coupon = () => {
    const myDiscount = document.getElementById('discount');
    // console.log(myDiscount.value);

    if (myDiscount.value === 'PetBan1214') {
      setDiscount(100);
      finalPrice = finalPrice - discount;
      MySwal.fire({
        title: '<strong>優惠代碼兌換成功</strong>',
        icon: 'success',
      });
    } else if (myDiscount.value === '2222') {
      console.log('-200');
    } else {
      setDiscount(0);
      Swal.fire({
        title: '<strong>沒有此優惠代碼</strong>',
        icon: 'info',
      });
    }
  };

  // 最終結帳總額
  let finalPrice = myPhotoTotalPrice + myTotalPrice - discount;
  // console.log(finalPrice);

  // 把前端畫面資料送進資料庫並清空購物車
  const clearAll = () => {
    handleClear();
    setMyProductData([{}]);
    setMyPhotoData([{}]);
    setDiscount(0);
  };

  const SendData = async () => {
    const cartData = {
      ...myCartItem,
      memberID: member.sid,
      cartTotalPrice: finalPrice,
      payWay: payWay,
    };
    /*
      const fd = new FormData();
  
      fd.append('photoCart', myCartItem.photoCart);
      fd.append('photoPrice', myCartItem.photo_totalPrice);
      fd.append('productCart', myCartItem.productCart);
      fd.append('productPrice', myCartItem.totalPrice);
      fd.append('memberID', member.sid);
      fd.append('cartTotalPrice', finalPrice);
  
      console.log(
        myCartItem.photoCart,
        myCartItem.photo_totalPrice,
        myCartItem.productCart,
        myCartItem.totalPrice,
        member.sid,
        finalPrice
      );
  */
    const { data } = await axios.post(
      'http://localhost:6001/cart/addOrder',
      cartData
    );
    console.log(data);
    clearAll();
  };

  // 歐付寶串接
  const LinkOpay = async () => {
    try {
      const res = await axios.get('http://localhost:6001/cart/paymentaction');

      setLink(res.data);

      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  function createMarkup() {
    return { __html: link };
  }
  const Opay = useRef(null);
  useEffect(() => {
    const result = document.querySelector('#_form_aiochk');
    if (!result) {
      return;
    }
    result.submit();
  }, [link]);

  //LinePay

  const LinePay = async () => {
    try {
      const res = await axios.post('http://localhost:6001/cart/linepay');

      console.log(res);

      window.open(res.data, '_self');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handlePay = async () => {
    if (!myAuth.sid) {
      Swal.fire({
        title: '<strong>請先登入會員</strong>',
        icon: 'warning',
      });
      navigate('/member/memberLogIn');
      return;
    }
    await SendData();
    await setShow(true);
    if (arrivedClick) {
      await LinePay();
    } else {
      await LinkOpay();
    }
  };

  console.log('arrivedClick', arrivedClick);
  console.log('creditClick', creditClick);
  console.log('payWay', payWay);

  // 手機版頁面-----------------------------------------------------------------------------------
  const mob = (
    <>
      <div className="mobile_eason_container">
        <h1 className="mobile_eason_top_title text_main_dark_color2">
          - 確認訂單 -
        </h1>

        {/* 手機版 攝影預約------------------------------------------------------------------------- */}
        <div className="mobile_eason_section_photo">
          <div className="mobile_eason_mid_title">
            {myPhotoData && myPhotoData.length !== 0 && (
              <>
                <h2 className="text_main_dark_color2">攝影預約明細</h2>
                <div className="eason_mobile_checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={photoChecked ? 'checked' : ''}
                    onClick={() => {
                      setPhotoChecked(!photoChecked);
                    }}
                  />
                  <p className="text_main_dark_color2">加入結算</p>
                </div>
              </>
            )}
          </div>

          {myPhotoData && myPhotoData.length !== 0 && (
            <>
              {myPhotoData.map((v, i) => {
                return (
                  <div className="eason_mobile_photo_box" key={v.sid}>
                    <div className="eason_mobile_photo_box_left">
                      <img
                        style={{ verticalAlign: 'middle' }}
                        src={`./images/test/${v.img}`}
                        alt=""
                        width="80px"
                        height="80px"
                      />
                    </div>

                    <div className="eason_mobile_photo_box_mid">
                      <div>攝影師 - {v.name}</div>
                      <div>
                        {v.date} {v.time ? '早上' : '晚上'}
                      </div>
                      <div style={{ color: 'red', fontSize: '19px' }}>
                        $ {v.price}
                      </div>
                    </div>

                    <div className="eason_mobile_photo_box_right">
                      <span
                        onClick={() => {
                          removePhotoData(v.sid);
                        }}
                      >
                        <i className="fa-light fa-trash-can eason_fa-trash-can"></i>
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* 手機板 商品訂單明細------------------------------------------------------------------------- */}
        <div className="eason_mobile_section_product">
          <div className="mobile_eason_mid_title">
            {myProductData && myProductData.length !== 0 && (
              <>
                <h2 className="text_main_dark_color2">商品訂單明細</h2>
                <div className="eason_mobile_checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={productChecked ? 'checked' : ''}
                    onClick={() => {
                      setProductChecked(!productChecked);
                    }}
                  />
                  <p className="text_main_dark_color2">加入結算</p>
                </div>
              </>
            )}
          </div>

          {myProductData.map((v, i) => {
            return (
              <div className="eason_mobile_product_box" key={v.sid}>
                <div className="eason_mobile_product_box_left">
                  <img
                    style={{ verticalAlign: 'middle' }}
                    src={`./images/test/${v.img}`}
                    alt=""
                    width="70px"
                    height="80px"
                  />
                </div>

                <div className="eason_mobile_product_box_mid">
                  <div>{v.name}</div>
                  <div className="eason_mobile_product_amount">
                    <span
                      className=""
                      onClick={() => {
                        handleReduce(myProductData[i]);
                        if (amount[i] > 1) {
                          const decreaseAmount = [...amount];
                          decreaseAmount[i] = +decreaseAmount[i] - 1;
                          // console.log(amount);

                          const decreasePrice = [...totalPrice];
                          decreasePrice[i] = decreaseAmount[i] * v.member_price;
                          // console.log(decreasePrice);
                          setNewTotalPrice(
                            decreasePrice.reduce((a, b) => a + b)
                          );

                          setAmount(decreaseAmount);

                          setTotalPrice(decreasePrice);
                          console.log({ amount });
                        } else {
                          setNewTotalPrice(
                            newTotalPrice - v.member_price * amount[i]
                          );
                          removeProductData(v.sid);

                          amount.splice(i, 1);
                          // console.log(v.sid);

                          const deleteItem = JSON.parse(
                            localStorage.getItem('cartItem')
                          );
                          const productList = deleteItem.productCart;

                          const index = productList.findIndex(
                            (e) => e.sid === v.sid
                          );

                          const sliceP1 = productList.slice(0, index);

                          const sliceP2 = productList.slice(index + 1);

                          const newProductList = [...sliceP1, ...sliceP2];

                          deleteItem.productCart = newProductList;

                          const totalItem = newProductList.length;
                          let totalAmount = 0;
                          let totalPrice = 0;
                          if (cartItem.photoCart.length === 1) {
                            totalAmount = 1;
                            totalPrice = 0;
                          } else {
                            totalAmount = 0;
                            totalPrice = 0;
                          }

                          newProductList.forEach((v, i) => {
                            totalAmount += v.amount;
                            totalPrice += v.amount * v.member_price;
                          });

                          deleteItem.totalItem = totalItem;
                          deleteItem.totalAmount = totalAmount;
                          deleteItem.totalPrice = totalPrice;
                          localStorage.setItem(
                            'cartItem',
                            JSON.stringify(deleteItem)
                          );

                          setCartItem(deleteItem);
                        }
                      }}
                    >
                      <i className="eason_fa-solid fa-solid fa-circle-minus">
                        {' '}
                      </i>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{amount[i]}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                      className=""
                      onClick={() => {
                        handleAddCart(myProductData[i], 1);

                        const newAmount = [...amount];
                        newAmount[i] = +newAmount[i] + 1;
                        const newPrice = [...totalPrice];
                        newPrice[i] = newAmount[i] * v.member_price;
                        // console.log(newPrice);

                        setAmount(newAmount);
                        setTotalPrice(newPrice);

                        setNewTotalPrice(newPrice.reduce((a, b) => a + b));
                      }}
                    >
                      <i className="eason_fa-solid   fa-solid fa-circle-plus"></i>
                    </span>
                  </div>
                  <div style={{ color: 'red', fontSize: '19px' }}>
                    $ {v.member_price * amount[i]}
                  </div>
                </div>

                <div className="eason_mobile_product_box_right">
                  <span
                    onClick={() => {
                      setNewTotalPrice(
                        newTotalPrice - v.member_price * amount[i]
                      );
                      removeProductData(v.sid);

                      // amount.splice(i, 1);
                      // console.log(v.sid);

                      const deleteItem = JSON.parse(
                        localStorage.getItem('cartItem')
                      );
                      const productList = deleteItem.productCart;

                      const index = productList.findIndex(
                        (e) => e.sid === v.sid
                      );

                      const sliceP1 = productList.slice(0, index);

                      const sliceP2 = productList.slice(index + 1);

                      const newProductList = [...sliceP1, ...sliceP2];

                      deleteItem.productCart = newProductList;

                      const totalItem = newProductList.length;
                      let totalAmount = 0;
                      let totalPrice = 0;
                      if (cartItem.photoCart.length === 1) {
                        totalAmount = 1;
                        totalPrice = 0;
                      } else {
                        totalAmount = 0;
                        totalPrice = 0;
                      }

                      newProductList.forEach((v, i) => {
                        totalAmount =
                          totalAmount + v.amount + cartItem.photoCart.length;
                        totalPrice =
                          totalPrice +
                          v.amount * v.member_price +
                          cartItem.photoCart.price;
                      });

                      deleteItem.totalItem = totalItem;
                      deleteItem.totalAmount = totalAmount;
                      deleteItem.totalPrice = totalPrice;
                      localStorage.setItem(
                        'cartItem',
                        JSON.stringify(deleteItem)
                      );

                      setCartItem(deleteItem);
                    }}
                  >
                    <i className="fa-light fa-trash-can eason_fa-trash-can"></i>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 手機版 付款方式------------------------------------------------------------------------ */}
        <div className="mobile_eason_mid_title">
          <h2 className="text_main_dark_color2">付款方式</h2>
        </div>
        <div className="eason_mobile_section_payment">
          <div className="eason_mobile_section_payment_btn_group">
            <button
              style={
                arrivedClick === false
                  ? { color: '#c9caca', border: '3.5px solid #c9caca' }
                  : { color: '#727171', border: '3.5px solid #727171' }
              }
              className="bg_bright_color text_main_dark_color2"
              // {
              //   arrivedClick === false
              //     ? 'bg_main_light_color1'
              //     : 'bg_main_color'
              // }
              onClick={() => {
                if (arrivedClick === false) {
                  setArrivedClick(true);
                  setCreditClick(false);
                }
              }}
            >
              LinePay
            </button>

            <button
              style={
                creditClick === false
                  ? { color: '#c9caca', border: '3.5px solid #c9caca' }
                  : { color: '#727171', border: '3.5px solid #727171' }
              }
              className="bg_bright_color text_main_dark_color2 "
              //  { creditClick === false ? 'bg_main_light_color1' : 'bg_main_color'
              // }
              onClick={() => {
                if (creditClick === false) {
                  setCreditClick(true);
                  setArrivedClick(false);
                }
              }}
            >
              信用卡
            </button>
          </div>
        </div>

        {/* 手機版 優惠代碼------------------------------------------------------------------------ */}
        <div className="mobile_eason_mid_title">
          <h2 className="text_main_dark_color2">優惠代碼</h2>
        </div>
        <div className="eason_mobile_discount_area">
          <div className="discountArea">
            <input className="eason_discount_code" id="discount" type="text" />
            <span
              onClick={coupon}
              className="bg_main_light_color1 fa-solid fa-magnifying-glass eason_fa-magnifying-glass  "
            ></span>
          </div>
        </div>

        {/* 手機版 結算總額------------------------------------------------------------------------ */}
        <div className="mobile_eason_mid_title">
          <h2 className="text_main_dark_color2">結算總額</h2>
        </div>
        <div>
          <div className="eason_mobile_total">
            <table>
              <tr>
                <th className="text_main_dark_color2">商品金額</th>
                <td>
                  ${' '}
                  {(productChecked ? myTotalPrice : 0) +
                    (photoChecked ? myPhotoTotalPrice : 0)}
                </td>
              </tr>

              <tr>
                <th className="text_main_dark_color2">優惠折扣</th>
                <td>{discount}</td>
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
                    (productChecked ? myTotalPrice : 0) +
                      (photoChecked ? myPhotoTotalPrice : 0) -
                      discount
                  )}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );

  // 電腦版頁面-----------------------------------------------------------------------------------
  const web = (
    <>
      <div className="eason_container">
        {/* <!-- 進度條------------------------------------------------------------------------> */}
        <div className="p_space" style={{ height: '100px' }}></div>
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
        {show ? (
          <Box>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <>
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
                      <tr key={v.sid}>
                        <td
                          className="eason_table_img"
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <div
                            style={{
                              width: '90%',
                              height: '90% ',
                              textAlign: 'center',
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              style={{
                                verticalAlign: 'middle',
                                width: '100%',
                                objectPosition: 'center center',
                              }}
                              src={`./images/${v.img}`}
                              alt=""
                              width="100%"
                            />
                          </div>
                        </td>
                        <td>{v.name}</td>
                        <td>{v.date}</td>
                        <td>{v.time ? '早上' : '晚上'}</td>
                        <td className="eason_table_price">{v.price}</td>
                        <td>
                          <span
                            onClick={() => {
                              removePhotoData(v.sid);
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
                {myProductData && myProductData.length !== 0 && (
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
                {myProductData && myProductData.length !== 0 && (
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
                  {myProductData.map((v, i) => {
                    return (
                      <tr key={v.sid}>
                        <td
                          className="eason_table_img"
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <div
                            style={{
                              width: '90%',
                              height: '90% ',
                              textAlign: 'center',
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              style={{
                                verticalAlign: 'middle',
                                width: '100%',
                                objectPosition: 'center center',
                              }}
                              src={`./images/test/${v.img}`}
                              alt=""
                              width="100%"
                            />
                          </div>
                        </td>
                        <td className="eason_p_name">{v.name}</td>
                        <td className="eason_table_price">{v.member_price}</td>
                        <td className="eason_table_amount">
                          <span
                            className=""
                            onClick={() => {
                              handleReduce(myProductData[i]);
                              if (amount[i] > 1) {
                                const decreaseAmount = [...amount];
                                decreaseAmount[i] = +decreaseAmount[i] - 1;
                                // console.log(amount);

                                const decreasePrice = [...totalPrice];
                                decreasePrice[i] =
                                  decreaseAmount[i] * v.member_price;
                                // console.log(decreasePrice);
                                setNewTotalPrice(
                                  decreasePrice.reduce((a, b) => a + b)
                                );

                                setAmount(decreaseAmount);

                                setTotalPrice(decreasePrice);
                                console.log({ amount });
                              } else {
                                setNewTotalPrice(
                                  newTotalPrice - v.member_price * amount[i]
                                );
                                removeProductData(v.sid);

                                amount.splice(i, 1);
                                // console.log(v.sid);

                                const deleteItem = JSON.parse(
                                  localStorage.getItem('cartItem')
                                );
                                const productList = deleteItem.productCart;

                                const index = productList.findIndex(
                                  (e) => e.sid === v.sid
                                );

                                const sliceP1 = productList.slice(0, index);

                                const sliceP2 = productList.slice(index + 1);

                                const newProductList = [...sliceP1, ...sliceP2];

                                deleteItem.productCart = newProductList;

                                const totalItem = newProductList.length;
                                let totalAmount = 0;
                                let totalPrice = 0;
                                if (cartItem.photoCart.length === 1) {
                                  totalAmount = 1;
                                  totalPrice = 0;
                                } else {
                                  totalAmount = 0;
                                  totalPrice = 0;
                                }

                                newProductList.forEach((v, i) => {
                                  totalAmount += v.amount;
                                  totalPrice += v.amount * v.member_price;
                                });

                                deleteItem.totalItem = totalItem;
                                deleteItem.totalAmount = totalAmount;
                                deleteItem.totalPrice = totalPrice;
                                localStorage.setItem(
                                  'cartItem',
                                  JSON.stringify(deleteItem)
                                );

                                setCartItem(deleteItem);
                              }
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
                              handleAddCart(myProductData[i], 1);

                              const newAmount = [...amount];
                              newAmount[i] = +newAmount[i] + 1;
                              const newPrice = [...totalPrice];
                              newPrice[i] = newAmount[i] * v.member_price;
                              // console.log(newPrice);

                              setAmount(newAmount);
                              setTotalPrice(newPrice);

                              setNewTotalPrice(
                                newPrice.reduce((a, b) => a + b)
                              );
                            }}
                          >
                            <i className="eason_fa-solid   fa-solid fa-circle-plus"></i>
                          </span>
                        </td>
                        <td className="eason_table_total">
                          {v.member_price * amount[i]}
                        </td>
                        <td>
                          <span
                            onClick={() => {
                              setNewTotalPrice(
                                newTotalPrice - v.member_price * amount[i]
                              );
                              removeProductData(v.sid);

                              // amount.splice(i, 1);
                              // console.log(v.sid);

                              const deleteItem = JSON.parse(
                                localStorage.getItem('cartItem')
                              );
                              const productList = deleteItem.productCart;

                              const index = productList.findIndex(
                                (e) => e.sid === v.sid
                              );

                              const sliceP1 = productList.slice(0, index);

                              const sliceP2 = productList.slice(index + 1);

                              const newProductList = [...sliceP1, ...sliceP2];

                              deleteItem.productCart = newProductList;

                              const totalItem = newProductList.length;
                              let totalAmount = 0;
                              let totalPrice = 0;
                              if (cartItem.photoCart.length === 1) {
                                totalAmount = 1;
                                totalPrice = 0;
                              } else {
                                totalAmount = 0;
                                totalPrice = 0;
                              }

                              newProductList.forEach((v, i) => {
                                  totalAmount += v.amount;
                                  totalPrice += v.amount * v.member_price;
                                });

                              deleteItem.totalItem = totalItem;
                              deleteItem.totalAmount = totalAmount;
                              deleteItem.totalPrice = totalPrice;
                              // console.log({ newTotalPrice });
                              localStorage.setItem(
                                'cartItem',
                                JSON.stringify(deleteItem)
                              );

                              setCartItem(deleteItem);
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
          </>
        )}

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
                  setPayWay(0);
                  setCreditClick(false);
                }
              }}
            >
              LinePay
            </button>

            <button
              className={
                creditClick === false ? 'bg_main_light_color1' : 'bg_main_color'
              }
              onClick={() => {
                if (creditClick === false) {
                  setCreditClick(true);
                  setPayWay(1);
                  setArrivedClick(false);
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
                <input
                  className="eason_discount_code"
                  id="discount"
                  type="text"
                  style={{ padding: '0px 10px' }}
                />
                <span
                  onClick={coupon}
                  className="bg_main_light_color1 fa-solid fa-magnifying-glass eason_fa-magnifying-glass  "
                ></span>
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
                      {(productChecked ? myTotalPrice : 0) +
                        (photoChecked ? myPhotoTotalPrice : 0)}
                    </td>
                  </tr>

                  <tr>
                    <th className="text_main_dark_color2">優惠折扣</th>
                    <td>{discount}</td>
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
                        (productChecked ? myTotalPrice : 0) +
                          (photoChecked ? myPhotoTotalPrice : 0) -
                          discount
                      )}
                    </td>
                  </tr>
                </table>
              </div>

              <button
                onClick={handlePay}
                className="eason_pay_btn bg_main_light_color1 "
              >
                前往付款
              </button>
              <div dangerouslySetInnerHTML={createMarkup()} ref={Opay}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {matches || web}
      {matches && mob}

      {/* <button
        onClick={() => {
          handleClear();
          setMyProductData([{}]);
          setMyPhotoData([{}]);
        }}
      >
        清空
      </button> */}
    </>
  );
}

export default Cart;
