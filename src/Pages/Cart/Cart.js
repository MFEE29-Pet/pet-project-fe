import { useState, useContext } from 'react';
import './cart.css';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
// import { data } from './orderTest';

const EasonProgressBar = styled.div`
  i {
    color: ${(props) => (props.$mode === 'dog' ? '#dcdddd' : '#00a29a')};
  }
  &::after {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#dcdddd' : '#00a29a'};
  }
  & .eason_dot {
    border: 0.13rem solid
      ${(props) => (props.$mode === 'dog' ? '#ccc' : '#00a29a')};
  }
  & a {
    color: ${(props) => (props.$mode === 'dog' ? '#dcdddd' : '#00a29a')};
  }
`;

function Cart() {
  const { mode } = useContext(SwitchButtonContext);
  const [arrivedClick, setArrivedClick] = useState(false);
  const [creditClick, setCreditClick] = useState(false);
  const [amount, setAmount] = useState(1);
  return (
    <>
      <div className="eason_container">
        {/* <!-- 進度條--------------------------------------------------------------- --> */}
        <EasonProgressBar className="eason_progress_bar" $mode={mode}>
          <div className="eason_order">
            <i
              className="fa-light fa-file-pen fa-3x"
              style={{ color: '#40220f' }}
            ></i>
            <div
              className="eason_dot bg_bright_color "
              style={{ border: '0.13rem solid #40220f' }}
            ></div>
            <a href="/#" style={{ color: '#40220f' }}>
              確認訂單
            </a>
          </div>
          <div className="eason_pay ">
            <i className="fa-light fa-envelope-open-dollar fa-3x"></i>
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

        {/* <!-- 攝影預約明細--------------------------------------------------------- --> */}
        <div className="eason_section_1">
          <div className="eason_list_title">
            <h2>攝影預約明細</h2>
            <div className="eason_product_check">
              <input type="checkbox" name="" id="" />
              <p style={{ fontSize: ' smaller' }}>加入結算</p>
            </div>
          </div>
          <table className="eason_list_table">
            <thead>
              <tr>
                <th>頭像</th>
                <th>攝影師</th>
                <th>預約日期</th>
                <th>預約時段</th>
                <th>單價</th>
                <th>編輯</th>
                <th>刪除</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="eason_table_img">
                  <img src="./imgs/person_2.jpeg" alt="" width="100px" />
                </th>

                <td className="eason_p_name">柏延</td>
                <td>
                  <input className="date" type="date" name="" id="" />
                </td>
                <td>
                  <select className="dayparts" name="" id="">
                    <option value="">上午</option>
                    <option value="">下午</option>
                  </select>
                </td>
                <td className="eason_table_price">$980</td>
                <td className="eason_edit">
                  <a href="/#">
                    <i className="fa-light fa-pen-to-square"></i>
                  </a>
                </td>
                <td>
                  <span>
                    <i className="fa-light fa-trash-can"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- 商品訂單明細--------------------------------------------------------- --> */}
        <div className="eason_section_2">
          <div className="eason_list_title">
            <h2>商品訂單明細</h2>
            <div className="eason_product_check">
              <input type="checkbox" name="" id="" />
              <p style={{ fontSize: 'smaller' }}>加入結算</p>
            </div>
          </div>
          <table className="eason_list_table">
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

            <tbody>
              <tr>
                <th className="eason_table_img">
                  <img
                    src="./imgs/product_3.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>

                {/* 資料引入測試------------------------------------- */}
                {/* {data.map((v, i) => {
                  return <td key={v.id} >{v.productName}</td>;
                })} */}

                <td className="eason_p_name">濃郁雞白罐頭</td>
                <td className="eason_table_price">$980</td>
                <td className="eason_table_amount">
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-minus"> </i>
                  </span>
                  {amount}
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                </td>
                <td className="eason_table_total">$1960</td>
                <td>
                  <span>
                    <i className="fa-light fa-trash-can"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <th className="eason_table_img">
                  <img
                    src="./imgs/product_toy_2.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td className="eason_p_name">寵物絨毛玩具-牛哞</td>
                <td className="eason_table_price">$690</td>

                <td className="eason_table_amount">
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-minus"> </i>
                  </span>
                  {amount}
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                </td>

                <td className="eason_table_total">$690</td>
                <td>
                  <span>
                    <i className="fa-light fa-trash-can"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <th className="eason_table_img">
                  <img
                    src="./imgs/product_1.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td className="eason_p_name">活力火雞乾糧</td>
                <td className="eason_table_price">$980</td>

                <td className="eason_table_amount">
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-minus"> </i>
                  </span>
                  {amount}
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                </td>

                <td className="eason_table_total">$1960</td>
                <td>
                  <span href="/#">
                    <i className="fa-light fa-trash-can"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <th className="eason_table_img">
                  <img
                    src="./imgs/product_toy_4.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td className="eason_p_name">寵物絨毛玩具-狗勾</td>
                <td className="eason_table_price">$690</td>

                <td className="eason_table_amount">
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-minus"> </i>
                  </span>
                  {amount}
                  <span
                    className=""
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                </td>

                <td className="eason_table_total">$690</td>
                <td>
                  <span>
                    <i className="fa-light fa-trash-can"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- 下方區域------------------------------------------------------------- --> */}
        <div className="eason_section_3">
          <div className="eason_s3_left">
            <h2>付款方式</h2>
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
                if (creditClick === true) {
                  setCreditClick(false);
                  setArrivedClick(false);
                } else {
                  setCreditClick(true);
                }
              }}
            >
              信用卡
            </button>
          </div>

          <div className="eason_s3_right">
            <div className="eason_s3_right_top">
              <h2>優惠代碼</h2>
              <input className="eason_discount_code" type="text" />
            </div>

            <div className="eason_s3_right_bottom">
              <h2>結算總額</h2>

              <div className="eason_total">
                <table>
                  <tr>
                    <th>商品金額</th>
                    <td>$5300</td>
                  </tr>

                  <tr>
                    <th>優惠折扣</th>
                    <td>10%</td>
                  </tr>

                  <tr>
                    <th>運費</th>
                    <td style={{ fontWeight: '900' }}>免運</td>
                  </tr>

                  <tr>
                    <th>付款總額</th>
                    <td style={{ color: 'red', fontSize: 'large' }}>$4770</td>
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
