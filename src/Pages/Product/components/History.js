import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HISTORY_PRODUCT } from '../my-config';

function History(props) {
  // states
  // 顯示 history div
  const [show, setShow] = useState(false);
  // 歷史列表
  const [history, setHistory] = useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const p_sid = params.get('sid');
  const oldHistory = localStorage.getItem('history')
    ? localStorage.getItem('history').split(',')
    : [];

  // 更新瀏覽紀錄 localStorage
  useEffect(() => {
    // 判斷是否在瀏覽記錄內
    if (p_sid && oldHistory.includes(p_sid) === false) {
      const newHistory = [...oldHistory, p_sid];
      // setHistoryItem()
      console.log(newHistory);
      if (newHistory.length > 3) {
        localStorage.setItem('history', newHistory.slice(1, 4));
      } else {
        localStorage.setItem('history', newHistory);
      }
    }
  }, [location]);

  // 抓取瀏覽紀錄商品
  const getHistoryProduct = async () => {
    // 將瀏覽紀錄陣列轉數字
    const hisNum = oldHistory.map((e, i) => {
      return +e;
    });
    // 取得資料塞入陣列
    let result = [];
    for (let i = 0; i < hisNum.length; i++) {
      // console.log(hisNum[i]);
      const res = await axios.get(`${HISTORY_PRODUCT}?sid=${hisNum[i]}`);
      result.push(res.data.history_p);
    }
    setHistory(result);
    console.log(history);
  };

  useEffect(() => {
    getHistoryProduct();
  }, []);

  return (
    <>
      <section className={`history ${show ? 'show' : ''}`}>
        {/* <button type="button" onClick={() => setShow(!show)}>
          開啟
        </button> */}
        <div className={`history-side-div ${show ? 'show' : ''}`}>
          <div
            className={`div-title-seen bg_main_light_color1 ${
              show ? 'show' : ''
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => setShow(!show)}
          >
            <h2 style={{ fontSize: '20px' }}>
              <i className="fa-solid fa-angles-left"></i>
            </h2>
          </div>

          <div
            className="div-product-seen"
            style={{ borderRadius: '15px 15px 0 0' }}
          >
            <div
              style={{
                width: '100%',
                height: '20%',
                borderRadius: '15px 15px 0 0',
                cursor: 'pointer',
              }}
              className="bg_main_light_color2 history_showTitle"
              onClick={() => setShow(!show)}
            >
              <h2
                style={{
                  textAlign: 'center',
                  padding: '15%',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              >
                {show ? '最近看過' : ''}
              </h2>
            </div>
            {history.map((e, i) => {
              return (
                <div
                  key={e[0].sid}
                  className="product-img-wrap"
                  style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <Link to={`${location.pathname}?sid=${e[0].sid}`}>
                    <img
                      src={`/images/test/${e[0].img}`}
                      alt=""
                      style={{
                        width: '100%',
                        height: '60%',
                        objectFit: 'cover',
                        margin: '10px 0',
                      }}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
