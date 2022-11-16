import { Link } from 'react-router-dom';

function History() {
  return (
    <>
      <section className="history">
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
      </section>
    </>
  );
}

export default History;
