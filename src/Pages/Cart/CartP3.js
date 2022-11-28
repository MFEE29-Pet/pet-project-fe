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

// 整套購物車P3本體-------------------------------------------------------------------------------------
function CartP3() {
  // 主題變色
  const { mode } = useContext(SwitchButtonContext);





  // 商品訂單明細 即時商品數量
  const [amount, setAmount] = useState([]);

  // 商品訂單明細 引入來源資料原始商品金額小計
  const [totalPrice, setTotalPrice] = useState([]);

  // 商品訂單明細 有被修改過數量的商品金額小計
  const [newTotalPrice, setNewTotalPrice] = useState(0);

  // 商品訂單明細 取資料上狀態為了要刪除時使用
  const [testData, setTestData] = useState([{}]);
  const [photoTestData, setPhotoTestData] = useState([{}]);

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
    setTestData(myProduct);
    // setTestData(jsonData);

    setPhotoTestData(photoJsonData);
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
    const origiTotalPrice = myProduct.map((v, i) => v.price * v.amount);
    setTotalPrice(origiTotalPrice);

    // 所有小計加總後要結帳之總額
    setNewTotalPrice(origiTotalPrice.reduce((a, b) => a + b));
  };

  // 一進來頁面就載入來源資料
  useEffect(() => {
    dataAmount();
    getData();
  }, []);



  // 刪除商品資料功能
  const removeProductData = (item) => {
    const remove = testData.filter((v, i) => {
      return v.p_sid !== item;
    });
    setTestData(remove);
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

        {/* <!-- 商品訂單明細------------------------------------------------------------------------> */}
        <div className="eason_section_2">
          <table className="eason_list_table">
            {testData && testData.length !== 0 && (
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
              {testData.map((v, i) => {
                return (
                  <tr key={v.p_sid}>
                    <td className="eason_table_img">
                      <img
                        src="./imgs/product_3.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                    </td>
                    <td className="eason_p_name">{v.p_name}</td>
                    <td className="eason_table_price">{v.price}</td>
                    <td className="eason_table_amount">
                      <span
                        className=""
                        onClick={() => {
                          const decreaseAmount = [...amount];
                          decreaseAmount[i] = +decreaseAmount[i] - 1;
                          console.log(amount);

                          const decreasePrice = [...totalPrice];
                          decreasePrice[i] = decreaseAmount[i] * v.price;
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
                          newPrice[i] = newAmount[i] * v.price;
                          console.log(newPrice);

                          setAmount(newAmount);
                          setTotalPrice(newPrice);

                          setNewTotalPrice(newPrice.reduce((a, b) => a + b));
                        }}
                      >
                        <i className="eason_fa-solid   fa-solid fa-circle-plus"></i>
                      </span>
                    </td>
                    <td className="eason_table_total">{v.price * amount[i]}</td>
                    <td>
                      <span
                        onClick={() => {
                          setNewTotalPrice(newTotalPrice - v.price * amount[i]);
                          removeProductData(v.p_sid);

                          amount.splice(i, 1);

                          // localStorage.removeItem('cartItem');
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
      </div>
    </>
  );
}

export default CartP3;
