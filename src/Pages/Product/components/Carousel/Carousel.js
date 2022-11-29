import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect, useLayoutEffect } from 'react';
import { config } from 'react-spring';
import { useLocation } from 'react-router';

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  console.log(table);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const location = useLocation();

  useLayoutEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);
  useLayoutEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.relatedProducts]);
  // useLayoutEffect(() => {
  //   setOffsetRadius(props.offset);
  //   setShowArrows(props.showArrows);
  // }, [location]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
