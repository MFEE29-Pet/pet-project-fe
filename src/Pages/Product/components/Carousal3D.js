import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from 'uuid';
import { config } from 'react-spring';

function Carousal3D({ relatedProducts }) {
  // const state = {
  //   goToSlide: 0,
  //   offsetRadius: 2,
  //   showNavigation: true,
  //   config: config.gentle,
  // };
  console.log({ relatedProducts });
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [myConfig, setMyConfig] = useState(config.gentle);

  // const slides = [
  //   {
  //     content: <img src="https://picsum.photos/800/801/?random" alt="1" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
  //   },
  //   {
  //     content: <img src="https://picsum.photos/805/800/?random" alt="8" />,
  //   },
  // ]
  // const imgRelated = [...relatedProducts,{...relatedProducts.img: <img src=`/images/test/${e.img}` alt="" />}]
  const slides = relatedProducts.map((slide, index) => {
    console.log(slide.img);
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  const onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  return (
    <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={myConfig}
      />
      <div
        style={{
          margin: '0 auto',
          marginTop: '2rem',
          width: '50%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <label>Go to slide: </label>
          <input name="goToSlide" onChange={onChangeInput} />
        </div>
        <div>
          <label>Offset Radius: </label>
          <input name="offsetRadius" onChange={onChangeInput} />
        </div>
        <div>
          <label>Show navigation: </label>
          <input
            type="checkbox"
            checked={showNavigation}
            name="showNavigation"
            onChange={(e) => {
              setShowNavigation(e.target.checked);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setMyConfig(config.gentle);
            }}
            disabled={myConfig === config.gentle}
          >
            Gentle Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setMyConfig(config.slow);
            }}
            disabled={myConfig === config.slow}
          >
            Slow Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setMyConfig(config.wobbly);
            }}
            disabled={myConfig === config.wobbly}
          >
            Wobbly Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setMyConfig(config.stiff);
            }}
            disabled={myConfig === config.stiff}
          >
            Stiff Transition
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousal3D;
