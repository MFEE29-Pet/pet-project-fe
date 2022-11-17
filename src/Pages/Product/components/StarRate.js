import { useEffect, useState } from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';

const RateWrapper = styled.div`
  display: flex;
  ${(props) => (props.$isString ? `font-size: ${props.$size}px;` : null)}
  .rate__character-first, .rate__character-second {
    ${(props) => (props.$isString ? null : `height: ${props.$size}px;`)}
    & > * {
      width: ${(props) => props.$size}px;
      height: ${(props) => props.$size}px;
    }
  }
  .rate__character-first {
    ${(props) => (props.$allowHalf ? null : 'display: none;')}
  }
`;

const CharacterWrapper = styled.div`
  position: relative;
`;

const CharacterFirst = styled.div`
  position: absolute;
  color: ${(props) => (props.$isActive ? props.$starColor : '#F0F0F0')};
  width: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const CharacterSecond = styled.div`
  color: ${(props) => (props.$isActive ? props.$starColor : '#c0c0c0')};
  cursor: pointer;
`;

/**
 * `StarRate` 是一個評分元件。一方面可以對於評價的數據展示，另一方面可以讓人進行對評分的操作。
 */
const Rate = ({
  count,
  defaultValue,
  character,
  size,
  allowHalf,
  isDisabled,
  onChange,
  setStarValue,
  // setFields,
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [previewValue, setPreviewValue] = useState(innerValue);
  const isString = typeof character === 'string';

  const handleOnClick = (clickedValue) => {
    if (isDisabled) return;
    setInnerValue((previousValue) =>
      previousValue === clickedValue ? 0 : clickedValue
    );
  };

  const handleChangePreviewValue = (currentValue) => {
    if (!isDisabled) {
      setPreviewValue(currentValue);
    }
  };

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(innerValue);
    }
  }, [innerValue]);

  return (
    <RateWrapper $size={size} $allowHalf={allowHalf} $isString={isString}>
      {[...Array(count).keys()].map((itemKey) => (
        <CharacterWrapper key={itemKey}>
          <CharacterFirst
            className="rate__character-first"
            $starColor={'#f8b62b'}
            $isActive={itemKey + 0.5 <= previewValue}
            onMouseOver={() => handleChangePreviewValue(itemKey + 0.5)}
            onMouseLeave={() => handleChangePreviewValue(innerValue)}
            onClick={() => handleOnClick(itemKey + 0.5)}
          >
            {character}
          </CharacterFirst>
          <CharacterSecond
            className="rate__character-second"
            $starColor={'#f8b62b'}
            $isActive={itemKey + 1 <= previewValue}
            onMouseOver={() => handleChangePreviewValue(itemKey + 1)}
            onMouseLeave={() => handleChangePreviewValue(innerValue)}
            onClick={() => {
              handleOnClick(itemKey + 1);
              // 設定值給隱藏的input
              setStarValue(itemKey + 1);
              //
              // setFields({ ...fields, [scores]: itemKey + 1 });
            }}
          >
            {character}
          </CharacterSecond>
        </CharacterWrapper>
      ))}
    </RateWrapper>
  );
};

Rate.propTypes = {
  /**
   * star 總數
   */
  count: PropTypes.number,
  /**
   * 預設值
   */
  defaultValue: PropTypes.number,
  /**
   * 自定義字符
   */
  character: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * star 大小
   */
  size: PropTypes.number,
  /**
   * 是否能進行交互
   */
  isDisabled: PropTypes.bool,
  /**
   * 是否允許半顆星星
   */
  allowHalf: PropTypes.bool,
  /**
   * 被點選時的 callback
   */
  onChange: PropTypes.func,
  /**
   * 主題配色，primary、secondary 或是自己傳入色票
   */
  themeColor: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * 值
   */
  value: PropTypes.number,
};

Rate.defaultProps = {
  count: 5,
  defaultValue: 0,
  character: <StarIcon />,
  themeColor: '#FBDB14',
  size: 32,
  isDisabled: false,
  allowHalf: false,
  onChange: () => {},
  value: 5,
};

export default Rate;
