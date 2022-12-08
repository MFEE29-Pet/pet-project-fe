// 來源引用區-------------------------------------------------------------------------------------
import { useState, useContext, useEffect } from 'react';
import './CartP3.css';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
import axios from 'axios';
import dayjs from 'dayjs';

//測試用假來源資料
// import jsonData from './orderTest.json';
// import photoJsonData from './photoTest.json';

// 主題變色功能區-------------------------------------------------------------------------------------
const EasonProgressBar = styled.div`
  i {
    color: ${(props) => (props.$mode === 'dog' ? '#c9bc9c' : '#50a4b2')};
  }
  &::after {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#c9bc9c' : '#50a4b2'};
  }
  &::before {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#40220f' : '#18334e'};
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

const EasonPayEnd = styled.div`
  span {
    color: ${(props) => (props.$mode === 'dog' ? '#956134' : '#50a4b2')};
  }
`;

// 整套購物車P3本體-------------------------------------------------------------------------------------
function CartP3() {
  // 主題變色
  const { mode } = useContext(SwitchButtonContext);
  const [data, setData] = useState([
    {
      sid: '',
      orders_num: '',
      member_sid: '',
      photo_total_price: '',
      product_total_price: '',
      final_price: '',
      ordered_at: '',
    },
  ]);

  // 真實串接資料來源
  // const myCart = localStorage.getItem('cartItem');
  // const myProduct = JSON.parse(myCart).productCart;
  // console.log(myCart.productCart);

  // 獲取來源資料
  // const getData = () => {};

  const getData = async () => {
    const memberID = JSON.parse(localStorage.getItem('auth'));
    const res = await axios.get(
      `http://localhost:6001/cart/member_order/${memberID.sid}`
    );

    console.log(res);
    const data = res.data.rows;

    const m_data = data.map((e, i) => {
      const { ordered_at } = e;

      return { ...data[i], ordered_at: dayjs(ordered_at).format('YYYY-MM-DD') };
    });
    setData(m_data);
  };
  console.log(data);

  // 一進來頁面就載入來源資料
  useEffect(() => {
    getData();
  }, []);

  return (
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
            <i className="fa-light fa-envelope-open-dollar fa-3x text_main_dark_color2 "></i>
            <div className="eason_dot_1 bg_bright_color "></div>
            <a href="/#" className="text_main_dark_color2">
              確認付款
            </a>
          </div>
          <div className="eason_check ">
            <i className="fa-light fa-circle-check fa-3x text_main_dark_color2"></i>
            <div className="eason_dot_1 bg_bright_color"></div>
            <a href="/#" className="text_main_dark_color2">
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

        <div className="eason_section_end">
          <div className="eason_list_title ">
            <h1 className="text_main_dark_color2">訂單成立</h1>
          </div>
          <div className="eason_box">
            <div className="eason_box_top">
              <span className="fa-light fa-circle-check fa-3x eason_check_logo "></span>
              <div className="eason_big_title text_main_dark_color2">
                完成購買
              </div>
            </div>
            <EasonPayEnd className="eason_box_bottom" $mode={mode}>
              <div className="eason_box_bottom_left">
                <div className="eason_bottom_small_title">
                  <h1 className="text_main_dark_color2">訂單資訊</h1>
                </div>
                <div className="eason_order_date">
                  <p className="text_main_dark_color2">
                    訂單日期&nbsp;&nbsp;&nbsp;
                  </p>
                  <span className="">{data[0].ordered_at}</span>
                </div>
                <div className="eason_order_num">
                  <p className="text_main_dark_color2">
                    訂單編號&nbsp;&nbsp;&nbsp;
                  </p>
                  <span className="">{data[0].orders_num}</span>
                </div>
              </div>
              <div className="eason_box_bottom_right">
                <div className="eason_bottom_small_title">
                  <h1 className="text_main_dark_color2">付款資訊</h1>
                </div>
                <div className="eason_completed_payment">
                  <p className="text_main_dark_color2">
                    付款方式&nbsp;&nbsp;&nbsp;
                  </p>
                  <span className="">信用卡</span>
                </div>
                <div className="eason_completed_payment">
                  <p className="text_main_dark_color2">
                    付款狀態&nbsp;&nbsp;&nbsp;
                  </p>
                  <span className="">已付款</span>
                </div>
              </div>
            </EasonPayEnd>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartP3;
