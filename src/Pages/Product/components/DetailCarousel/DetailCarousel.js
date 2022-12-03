import { useState } from 'react';
import { useNavigate } from 'react-router';
import Slider from 'react-slick';

function DetailCarousel({ relatedProducts }) {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="hidden_arrow_right"
        style={{
          position: 'absolute',
          // zIndex: '999',
          width: '500px',
          height: '300px',
          right: '0',
          top: '200px',
        }}
        onClick={onClick}
      ></div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="hidden_arrow_left"
        style={{
          position: 'absolute',
          zIndex: '999',
          width: '500px',
          height: '500px',
          left: '0',
          top: '200px',
        }}
        onClick={onClick}
      ></div>
    );
  };
  // console.log({ relatedProducts });
  const navigate = useNavigate();

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

  return (
    <>
      <div className="degreeWrap">
        <Slider {...settings}>
          {relatedProducts.map((e, i) => {
            return (
              <div
                className={`bottom-pro-line-card ${
                  i === imageIndex ? 'slide activeSlide' : 'slide'
                }`}
                style={{ width: '100%' }}
                key={e.sid}
              >
                <div
                  className="pro-line-ls-img-wrap"
                  style={{ position: 'relative', left: '30px' }}
                >
                  <img
                    src={`/images/test/${e.img}`}
                    alt=""
                    style={{
                      width: '500px',
                      position: 'relative',
                      right: '-50px',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                    onClick={() => {
                      // console.log(e.sid)
                      navigate(`?sid=${e.sid}`)
                    }}
                  />
                </div>
                <div className="pro-line-ls-name">
                  <p
                    style={{
                      fontSize: '42px',
                      position: 'relative',
                      left: '25px',
                    }}
                  >
                    {e.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default DetailCarousel;
