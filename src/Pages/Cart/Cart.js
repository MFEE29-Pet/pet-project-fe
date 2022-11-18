import { useState } from 'react';
import './cart.css';

function Cart() {
  const [arrivedClick, setArrivedClick] = useState(false);
  const [creditClick, setCreditClick] = useState(false);
  return (
    <>
      <div class="eason_container">
        {/* <!-- 進度條--------------------------------------------------------------- --> */}
        <div class="eason_progress_bar">
          <div class="eason_order">
            <i class="fa-light fa-file-pen fa-3x"></i>
            <div class="eason_dot bg_bright_color "></div>
            <a href="/#" style={{ color: '#40220f' }}>
              確認訂單
            </a>
          </div>
          <div class="eason_pay ">
            <i class="fa-light fa-envelope-open-dollar fa-3x"></i>
            <div class="eason_dot bg_bright_color "></div>
            <a href="/#" className="">
              確認付款
            </a>
          </div>
          <div class="eason_check ">
            <i class="fa-light fa-circle-check fa-3x"></i>
            <div class="eason_dot bg_bright_color"></div>

            <a href="/#" className="">
              訂單成立
            </a>
          </div>
          <div class="eason_truck ">
            <i class="fa-light fa-truck-fast fa-3x"></i>
            <div class="eason_dot bg_bright_color"></div>
            <a href="/#" className="">
              配送中
            </a>
          </div>
          <div class="eason_complete ">
            <i class="fa-light fa-house-flag fa-3x"></i>
            <div class="eason_dot bg_bright_color"></div>
            <a href="/#" className="">
              訂單完成
            </a>
          </div>
        </div>

        {/* <!-- 攝影預約明細--------------------------------------------------------- --> */}
        <div class="eason_section_1">
          <div class="eason_list_title">
            <h2>攝影預約明細</h2>
            <div class="eason_product_check">
              <input type="checkbox" name="" id="" />
              <p style={{ fontSize: ' smaller' }}>加入結算</p>
            </div>
          </div>
          <table class="eason_list_table">
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
                <th class="eason_table_img">
                  <img src="./imgs/person_2.jpeg" alt="" width="100px" />
                </th>

                <td class="eason_p_name">柏延</td>
                <td>
                  <input type="date" name="" id="" />
                </td>
                <td>
                  <select name="" id="">
                    <option value="">上午</option>
                    <option value="">下午</option>
                  </select>
                </td>
                <td class="eason_table_price">$980</td>
                <td class="eason_edit">
                  <a href="/#">
                    <i class="fa-light fa-pen-to-square"></i>
                  </a>
                </td>
                <td>
                  <a href="/#">
                    <i class="fa-light fa-trash-can"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- 商品訂單明細--------------------------------------------------------- --> */}
        <div class="eason_section_2">
          <div class="eason_list_title">
            <h2>商品訂單明細</h2>
            <div class="eason_product_check">
              <input type="checkbox" name="" id="" />
              <p style={{ fontSize: 'smaller' }}>加入結算</p>
            </div>
          </div>
          <table class="eason_list_table">
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
                <th class="eason_table_img">
                  <img
                    src="./imgs/product_3.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td class="eason_p_name">濃郁雞白罐頭</td>
                <td class="eason_table_price">$980</td>

                <td class="eason_table_amount">
                  <a href="/#">
                    <i class="fa-solid fa-circle-minus"> </i>
                  </a>
                  2
                  <a href="/#">
                    <i class="fa-solid fa-circle-plus"></i>
                  </a>
                </td>

                <td class="eason_table_total">$1960</td>
                <td>
                  <a href="/#">
                    <i class="fa-light fa-trash-can"></i>
                  </a>
                </td>
              </tr>

              <tr>
                <th class="eason_table_img">
                  <img
                    src="./imgs/product_toy_2.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td class="eason_p_name">寵物絨毛玩具-牛哞</td>
                <td class="eason_table_price">$690</td>

                <td class="eason_table_amount">
                  <a href="/#">
                    <i class="fa-solid fa-circle-minus"> </i>
                  </a>
                  1
                  <a href="/#">
                    <i class="fa-solid fa-circle-plus"></i>
                  </a>
                </td>

                <td class="eason_table_total">$690</td>
                <td>
                  <a href="/#">
                    <i class="fa-light fa-trash-can"></i>
                  </a>
                </td>
              </tr>

              <tr>
                <th class="eason_table_img">
                  <img
                    src="./imgs/product_1.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td class="eason_p_name">活力火雞乾糧</td>
                <td class="eason_table_price">$980</td>

                <td class="eason_table_amount">
                  <a href="/#">
                    <i class="fa-solid fa-circle-minus"> </i>
                  </a>
                  2
                  <a href="/#">
                    <i class="fa-solid fa-circle-plus"></i>
                  </a>
                </td>

                <td class="eason_table_total">$1960</td>
                <td>
                  <a href="/#">
                    <i class="fa-light fa-trash-can"></i>
                  </a>
                </td>
              </tr>

              <tr>
                <th class="eason_table_img">
                  <img
                    src="./imgs/product_toy_4.png"
                    alt=""
                    width="65px"
                    height="65px"
                  />
                </th>
                <td class="eason_p_name">寵物絨毛玩具-狗勾</td>
                <td class="eason_table_price">$690</td>

                <td class="eason_table_amount">
                  <a href="/#">
                    <i class="fa-solid fa-circle-minus"> </i>
                  </a>
                  1
                  <a href="/#">
                    <i class="fa-solid fa-circle-plus"></i>
                  </a>
                </td>

                <td class="eason_table_total">$690</td>
                <td>
                  <a href="/#">
                    <i class="fa-light fa-trash-can"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- 下方區域------------------------------------------------------------- --> */}
        <div class="eason_section_3">
          <div class="eason_s3_left">
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

          <div class="eason_s3_right">
            <div class="eason_s3_right_top">
              <h2>優惠代碼</h2>
              <input class="eason_discount_code" type="text" />
            </div>

            <div class="eason_s3_right_bottom">
              <h2>結算總額</h2>

              <div class="eason_total">
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

              <button class="eason_pay_btn bg_main_light_color1 ">前往付款</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
