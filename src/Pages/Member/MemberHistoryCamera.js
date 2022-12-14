import { useEffect, useState } from 'react';
import './Member.css';
import dayjs from 'dayjs';
import axios from 'axios';
import PhotoDetail from './components/PhotoDetail';

function MemberHistoryCamera() {
  const [open, setOpen] = useState(-1);
  const [data, setData] = useState([]);
  const [detailNum, setDetailNum] = useState('');

  const memberID = JSON.parse(localStorage.getItem('auth'));

  const getProductData = async () => {
    const res = await axios.get(
      `http://localhost:6001/member/orderdata/${memberID.sid}`
    );
    console.log(res);

    const data = res.data.rows;

    const data1 = data.filter((e, i) => {
      const { photo_total_price } = e;
      return photo_total_price > 0;
    });

    const m_data = data1.map((e, i) => {
      const { ordered_at } = e;
      return {
        ...data1[i],
        ordered_at: dayjs(ordered_at).format('YYYY-MM-DD'),
      };
    });
    console.log(m_data);
    setData(m_data);
  };
  const click = (orders_num, i) => {
    if (i === open) {
      return setOpen(-1);
    }
    setOpen(i);
    console.log(orders_num);
    setDetailNum(orders_num);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: '800px',
        marginTop: '80px',
        fontSize: '20px',
      }}
    >
      <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
        攝影訂單紀錄
      </h2>
      <div
        className="orderProduct-right"
        style={{ height: '700px', overflowY: 'auto' }}
      >
        {data.map((e, i) => {
          const { photo_total_price, ordered_at, orders_num,pay_way } = e;
          return (
            <div className="orderProductWrap" key={i}>
              <div
                className="orderProduct"
                style={{
                  backgroundColor: '#fff',
                  padding: '30px',
                  borderRadius: '15px',
                }}
              >
                <div
                  className="detailProduct"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80%',
                  }}
                >
                  <div
                    className="text_main_dark_color2"
                    style={{ width: '20%', fontWeight: '700' }}
                  >
                    攝影訂單
                  </div>
                  <div
                    style={{ color: '#727171', fontSize: '16px', width: '50%' }}
                  >
                    訂單編號:{orders_num}
                  </div>
                  <div
                    style={{ color: '#727171', fontSize: '16px', width: '35%' }}
                  >
                    訂單已完成於{ordered_at}
                  </div>
                  {
                    pay_way ? (<div
                    style={{ color: '#727171', fontSize: '16px', width: '25%' }}
                  >
                    信用卡支付
                  </div>) : (<div
                    style={{ color: '#727171', fontSize: '16px', width: '25%' }}
                  >
                    LinePay支付
                  </div>)
                  }
                  
                </div>
                <div
                  className="priceProduct"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '20%',
                  }}
                >
                  <h1 className="text_main_dark_color2">訂單金額</h1>
                  <p
                    style={{
                      color: '#f00',
                      fontWeight: '700',
                      fontSize: '18px',
                    }}
                  >
                    ${photo_total_price}
                  </p>
                  <i
                    className="fa-regular fa-circle-chevron-down"
                    style={{ cursor: 'pointer', fontSize: '22px' }}
                    onClick={() => {
                      click(orders_num, i);
                    }}
                  ></i>
                </div>
              </div>
              <PhotoDetail open={open} detailNum={detailNum} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemberHistoryCamera;
