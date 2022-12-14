import './Member.css';
import { imgUrl } from '../../config';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { set } from 'date-fns';

function MemberLevel() {
  const [data, setData] = useState([]);
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState(0);
  const [order, setOrder] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [minOrder, setMinOrder] = useState(0);
  const [orderPercent,setOrderPercent]= useState(0)
  const [pricePercent,setPricePercent]= useState(0)


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
    setPrice(data.price);
    setOrder(data.total);
  };

  useEffect(() => {
    getMemberData();
  }, []);

  useEffect(() => {
    console.log(price);
    console.log(order);
    if (price > 15000 && order > 15) {
      setLevel('高階博士');
    } else if (price > 10000 && order > 10) {
      setLevel('中階碩士');
    } else if (price > 5000 && order > 5) {
      setLevel('初階學士');
    }else{
      setLevel('普通會員');
    }
    console.log(level);

    if (level === '初階學士') {
      setMinPrice(5000);
      setMinOrder(5);
    } else if (level === '中階碩士') {
      setMinPrice(10000);
      setMinOrder(10);
    } else {
      setMinPrice(15000);
      setMinOrder(15);
    }

    const order_percent = (+order / minOrder) * 100;

    setOrderPercent(order_percent)
    const price_percent = (+price / minPrice) * 100;
    setPricePercent(price_percent)
  }, [data]);


  //判斷等級

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height:'800px',
          width: '80%',
          marginTop: '80px',
          fontSize: '20px',
        }}
        className='member_2'
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
                      單筆凡超過2,500元可享100元折扣
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
                      單筆凡超過5,000元可享150元折扣
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
                      單筆凡超過8,000元可享200元折扣
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
                目前級別：{level}
              </p>
            </div>
            <div
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              className='member_3'
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
                    {order}
                  </span>
                  <span style={{ fontSize: '18px' }}>/{minOrder}</span>
                </div>
                <div className="range">
                  <div
                    style={{
                      width: `${orderPercent}%`,
                      height: '100%',
                      backgroundColor: 'red',
                    }}
                  ></div>
                </div>
              </div>
              <div className="inputRange">
                <div className="input-text">
                  <p style={{ fontSize: '18px', marginRight: '20px' }}>
                    累積消費
                  </p>
                  <span style={{ color: '#f00', fontSize: '24px' }}>
                    ${price}
                  </span>
                  <span style={{ fontSize: '18px' }}>/{minPrice}</span>
                </div>
                <div className="range">
                  <div
                    style={{
                      width: `${pricePercent}%`,
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
