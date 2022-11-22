import { useCallback, useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

import { ArrowRight, ArrowLeft } from '@mui/icons-material';

const CarouselWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* left: 25%; */}
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
`;

const Image = styled.img`
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

const Dots = styled.div`
  position: absolute;
  display: flex;
  align-item: center;
  justify-content: center;
  z-index: 10;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  & > *:not(:first-child) {
    margin-left: 6px;
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

const ArrowWrapper = styled.div`
  &:hover {
    color: ${(props) => (props.$mode === 'dog' ? '#ea5514' : '#00a29a')};
  }
  height: 100%;
  display: flex;
`;

const MyCarousel = ({
  className,
  dataSource,
  hasDots,
  hasControlArrow,
  autoplay,
  styleImages,
  floatNum,
}) => {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(600);
  const { mode } = useContext(SwitchButtonContext);
  const getIndexes = () => {
    const prevIndex =
      currentIndex - 1 < 0
        ? styleImages[floatNum - 1]?.length - 1
        : currentIndex - 1;
    const nextIndex = currentIndex + 1 < 5 ? currentIndex + 1 : 0;

    return {
      prevIndex,
      nextIndex,
    };
  };
  // const test = styleImages[0]?.map((e, i) => {
  //   console.log(e);
  // });
  // console.log(floatNum);
  const makePosition = ({ itemIndex }) =>
    (itemIndex - currentIndex) * imageWidth;

  const handleClickPrev = () => {
    const { prevIndex } = getIndexes();
    setCurrentIndex(prevIndex);
  };

  const handleClickNext = useCallback(() => {
    const { nextIndex } = getIndexes();
    setCurrentIndex(nextIndex);
    // console.log(nextIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleUpdateCarouselWidth = () => {
    const carouselWidth = carouselRef.current.clientWidth;
    setImageWidth(carouselWidth);
  };

  useEffect(() => {
    handleUpdateCarouselWidth();
    window.addEventListener('resize', handleUpdateCarouselWidth);
    return () => {
      window.removeEventListener('resize', handleUpdateCarouselWidth);
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        handleClickNext();
      }, 5000);
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
      <div
        className="littleImageWrap"
        style={{
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <CarouselWrapper
          ref={carouselRef}
          className={className}
          style={{
            width: '50px',
            height: '50px',
            margin: '0',
            padding: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ImageWrapper
            $mode={mode}
            style={{
              width: '800px',
              height: '100%',
              overflow: 'inherit',
              display: 'flex',
            }}
          >
            {styleImages[floatNum - 1]?.map((imageUrl, index) => (
              <Image
                key={imageUrl}
                src={`/images/test/photos/${imageUrl}`}
                alt=""
                style={
                  currentIndex === index
                    ? {
                        width: '50px',
                        height: '85%',
                        objectFit: 'cover',
                        position: 'static',
                        border: '2px solid red',
                        margin: '3px',
                      }
                    : {
                        width: '40px',
                        height: '80%',
                        objectFit: 'cover',
                        position: 'static',
                        margin: '3px',
                      }
                }
              />
            ))}
          </ImageWrapper>
        </CarouselWrapper>
      </div>
      <ImageWrapper $mode={mode} style={{ transform: 'translateX(20%)' }}>
        {styleImages[floatNum - 1]?.map((imageUrl, index) => (
          <Image
            key={imageUrl}
            src={`/images/test/photos/${imageUrl}`}
            alt=""
            $left={makePosition({ itemIndex: index })}
          />
        ))}
      </ImageWrapper>
      {hasControlArrow && (
        <ControlButtons>
          <ArrowWrapper style={{ alignItems: 'center' }} $mode={mode}>
            <ArrowLeft onClick={handleClickPrev} />
          </ArrowWrapper>
          <ArrowWrapper style={{ alignItems: 'center' }} $mode={mode}>
            <ArrowRight onClick={handleClickNext} />
          </ArrowWrapper>
        </ControlButtons>
      )}
      {hasDots && (
        <Dots>
          {[...Array(styleImages[floatNum - 1]?.length).keys()]?.map(
            (key, index) => (
              <Dot
                key={key}
                $isCurrent={index === currentIndex}
                onClick={() => setCurrentIndex(key)}
              />
            )
          )}
        </Dots>
      )}
    </CarouselWrapper>
  );
};

MyCarousel.propTypes = {
  className: PropTypes.string,

  // 輪播資料
  dataSource: PropTypes.arrayOf(PropTypes.string),

  // 是否顯示指示點
  hasDots: PropTypes.bool,

  // 是否顯示上下頁切換鍵
  hasControlArrow: PropTypes.bool,

  // 是否自動播放
  autoplay: PropTypes.bool,
};

MyCarousel.defaultProps = {
  className: '',
  dataSource: [],
  hasDots: true,
  hasControlArrow: true,
  autoplay: true,
};

export default MyCarousel;
