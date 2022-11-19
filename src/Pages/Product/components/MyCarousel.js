import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ArrowRight, ArrowLeft } from '@material-ui/icons';

const CarouselWrapper = styled.div`
  position: relative;
  width: ${(props) => props.$width}px;
  height: 400px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #fff5de;
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  left: ${(props) => props.$left}px;
  transition: all 0.5s ease;
  object-fit: cover;
`;

const ControlButtons = styled.div`
  color: #40220f;
  position: absolute;
  z-index: 10;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  & > svg {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;

const Dot = styled.div`
  border-radius: 100%;
  width: ${(props) => (props.$isCurrent ? 10 : 8)}px;
  height: ${(props) => (props.$isCurrent ? 10 : 8)}px;
  border: 1px solid #fff;
  background: ${(props) => (props.$isCurrent ? '#fff' : 'none')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

function MyCarousel({
  className,
  dataSource,
  hasDots,
  hasControlArrow,
  autoplay,
}) {
  const carousel = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(600);
  const getIndex = () => {
    const preIndex =
      currentIndex - 1 < 0 ? dataSource.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % dataSource.length;

    return { preIndex, nextIndex };
  };

  const makePosition = ({ itemIndex }) =>
    (itemIndex - currentIndex) * imageWidth;

  const handleClickPrev = () => {
    const { preIndex } = getIndex();
    setCurrentIndex(preIndex);
  };

  const handleClickNext = useCallback(() => {
    const { nextIndex } = getIndex();
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const handleUpateCarouselWidth = () => {
    const carouselWidth = carouselRef.current.clientWidth;
    setImageWidth(carouselWidth);
  };

  useEffect(() => {
    handleUpateCarouselWidth();
    window.addEventListener('resize', handleUpateCarouselWidth);

    return () => {
      window.removeEventListener('resize', handleUpateCarouselWidth);
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        handleClickNext();
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, handleClickNext]);

  return (
    <CarouselWrapper
      ref={carouselRef}
      className={className}
      $width={imageWidth}
    >
      <ImageWrapper>{}</ImageWrapper>
    </CarouselWrapper>
  );
}

export default MyCarousel;
