import './Member.css';
import { imgUrl } from '../../config';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

function MemberLevel() {
  const [data, setData] = useState([]);

  const NextArrow = ({ onClick }) => {
    return <div className="hidden_arrow_right" onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="hidden_arrow_left" onClick={onClick}></div>;
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  //取出會員ID
  const memberID = JSON.parse(localStorage.getItem('auth'));

  const getMemberData = async () => {
    const res = await axios.get(
      `http://localhost:6001/member/memberdetail/${memberID.sid}`
    );

    const data = res.data;

    setData(data);
  };

  useEffect(() => {
    getMemberData();
  }, []);

  const m_price = data.price;
  const m_order = data.total;
  let m_level = '';

  //判斷等級
  if (0 < m_price < 5000 && 0 < m_order < 5) {
    m_level = '初階學士';
  } else if (5000 < m_price < 10000 && 5 < m_order < 10) {
    m_level = '中階碩士';
  } else {
    m_level = '高階碩士';
  }

  let min_price = 0;
  let min_order = 0;
  if (m_level === '初階學士') {
    min_price = 5000;
    min_order = 5;
  } else if (m_level === '中階碩士') {
    min_price = 10000;
    min_order = 10;
  } else {
    min_price = 15000;
    min_order = 15;
  }

  const order_percent = (m_order / min_order) *100;
  const price_percent = (m_price / min_price) * 100;

  console.log(order_percent, price_percent);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          會員等級介紹
        </h2>
        <div className="card-degree">
          <div className="degreeC">
            <div className="degreeWrap">
              <Slider {...settings}>
                <div
                  className={0 === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <div className="degreeImg">
                    <img src={`${imgUrl}/images/MemberCard_1.png`} alt="" />
                  </div>
                  <div className="degree-card">
                    <h2 className="text_main_dark_color2">初階學士</h2>
                    <p style={{ color: '#727171', fontWeight: '500' }}>
                      會員卡
                    </p>
                  </div>
                </div>
                <div
                  className={1 === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <div className="degreeImg">
                    <img src={`${imgUrl}/images/MemberCard_2.png`} alt="" />
                  </div>
                  <div className="degree-card">
                    <h2 className="text_main_dark_color2">中階碩士</h2>
                    <p style={{ color: '#727171' }}>會員卡</p>
                  </div>
                </div>
                <div
                  className={2 === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <div className="degreeImg">
                    <img src={`${imgUrl}/images/MemberCard_3.png`} alt="" />
                  </div>
                  <div className="degree-card">
                    <h2 className="text_main_dark_color2">高階博士</h2>
                    <p style={{ color: '#727171' }}>會員卡</p>
                  </div>
                </div>
                <div
                  className={3 === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <div className="degreeImg">
                    <img src={`${imgUrl}/images/MemberCard_1.png`} alt="" />
                  </div>
                  <div className="degree-card">
                    <h2 className="text_main_dark_color2">初階學士</h2>
                    <p style={{ color: '#727171', fontWeight: '500' }}>
                      會員卡
                    </p>
                  </div>
                </div>
                <div
                  className={4 === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <div className="degreeImg">
                    <img src={`${imgUrl}/images/MemberCard_2.png`} alt="" />
                  </div>
                  <div className="degree-card">
                    <h2 className="text_main_dark_color2">中階碩士</h2>
                    <p style={{ color: '#727171' }}>會員卡</p>
                  </div>
                </div>
                <div
                  className={5 === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <div className="degreeImg">
                    <img src={`${imgUrl}/images/MemberCard_3.png`} alt="" />
                  </div>
                  <div className="degree-card">
                    <h2 className="text_main_dark_color2">高階博士</h2>
                    <p style={{ color: '#727171' }}>會員卡</p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="degree-txt">
              {imageIndex === 0 || imageIndex === 3 ? (
                <>
                  <div className="degreeIcon">
                    <i
                      className="fa-solid fa-caret-right right text_main_dark_color2"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <span className="text_main_dark_color2">
                      每月第一筆訂單，不限金額，即可享免運優惠。
                    </span>
                  </div>
                  <div className="degreeIcon">
                    <i
                      className="fa-solid fa-caret-right text_main_dark_color2"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <span className="text_main_dark_color2">
                      單筆凡超過2,500元可享5%折扣
                    </span>
                  </div>
                </>
              ) : (
                ''
              )}
              {imageIndex === 1 || imageIndex === 4 ? (
                <>
                  <div className="degreeIcon">
                    <i
                      className="fa-solid fa-caret-right right text_main_dark_color2"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <span className="text_main_dark_color2">
                      每月第一筆訂單，不限金額，即可享免運優惠。
                    </span>
                  </div>
                  <div className="degreeIcon">
                    <i
                      className="fa-solid fa-caret-right text_main_dark_color2"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <span className="text_main_dark_color2">
                      單筆凡超過5,000元可享5%折扣
                    </span>
                  </div>
                </>
              ) : (
                ''
              )}
              {imageIndex === 2 || imageIndex === 5 ? (
                <>
                  <div className="degreeIcon">
                    <i
                      className="fa-solid fa-caret-right right text_main_dark_color2"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <span className="text_main_dark_color2">
                      每月第一筆訂單，不限金額，即可享免運優惠。
                    </span>
                  </div>
                  <div className="degreeIcon">
                    <i
                      className="fa-solid fa-caret-right text_main_dark_color2"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <span className="text_main_dark_color2">
                      單筆凡超過8,000元可享5%折扣
                    </span>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="ship-bottom">
            <div className="ship">
              <div>
                <i className="fa-solid fa-hyphen text_main_dark_color2"></i>
                <h2
                  style={{ fontSize: '24px' }}
                  className="text_main_dark_color2"
                >
                  解鎖進階等級
                </h2>
                <i className="fa-solid fa-hyphen text_main_dark_color2"></i>
              </div>

              <p style={{ fontSize: '16px' }} className="text_main_dark_color1">
                目前級別：{m_level}
              </p>
            </div>
            <div
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="inputRange">
                <div className="input-text">
                  <p style={{ fontSize: '18px', marginRight: '20px' }}>
                    累積訂單
                  </p>
                  <span
                    style={{
                      color: '#f00',
                      fontSize: '24px',
                      lineHeight: '24px',
                    }}
                  >
                    {m_order}
                  </span>
                  <span style={{ fontSize: '18px' }}>/{min_order}</span>
                </div>
                <div className="range">
                  <div style={{
                      width: `${order_percent}%`,
                      height: '100%',
                      backgroundColor: 'red',
                    }}></div>
                </div>
              </div>
              <div className="inputRange">
                <div className="input-text">
                  <p style={{ fontSize: '18px', marginRight: '20px' }}>
                    累積消費
                  </p>
                  <span style={{ color: '#f00', fontSize: '24px' }}>
                    ${m_price}
                  </span>
                  <span style={{ fontSize: '18px' }}>/{min_price}</span>
                </div>
                <div className="range">
                  <div
                    style={{
                      width: `${price_percent}%`,
                      height: '100%',
                      backgroundColor: 'red',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberLevel;
