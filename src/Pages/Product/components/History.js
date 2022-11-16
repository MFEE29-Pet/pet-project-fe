import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

function History(props) {
  const [show, setShow] = useState(false);
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <section className="history" style={
          show
            ? { transform: 'translateX(0%);' }
            : { transform: 'translateX(100%);' }
        }>
        <div className="history-side-div">
          <div className="div-title-seen">
            <h2>最近看過</h2>
          </div>
          <div className="div-product-seen">
            <div className="product-img-wrap">
              <Link href="">
                <img src="/images/test/can1.jpg" alt="" />
              </Link>
            </div>
            <div className="product-img-wrap">
              <Link href="">
                <img src="/images/test/can1.jpg" alt="" />
              </Link>
            </div>
            <div className="product-img-wrap">
              <Link href="">
                <img src="/images/test/can1.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="bg_main_light_color2"
          style={{
            width: '20px',
            position: 'absolute',
            borderRadius: '15px 0 0 15px',
            lineHeight: '25px',
            textAlign: 'start',
            padding: '10px 40px 10px 20px',
            top: '12%',
            left: '-20%',
            color: '#fff',
            zIndex: '-1',
          }}
          onClick={() => {
            setShow(!show);
            props.setGetShow(show);
          }}
        >
          瀏覽紀錄
        </div>
      </section>
    </>
  );
}

export default History;
