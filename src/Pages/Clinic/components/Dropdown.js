import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Portal from './Portal';
import { findAttributeInEvent } from './event';

const topStyle = css`
  transform: translate(
    calc(${(props) => props.$childrenSize.width / 2}px - 50%),
    calc(-100% - ${(props) => props.$gap}px)
  );
`;

const topLeftStyle = css`
  transform: translate(0px, calc(-100% - ${(props) => props.$gap}px));
`;

const topRightStyle = css`
  transform: translate(
    calc(-100% + ${(props) => props.$childrenSize.width}px),
    calc(-100% - ${(props) => props.$gap}px)
  );
`;

const bottomStyle = css`
  transform: translate(
    calc(${(props) => props.$childrenSize.width / 2}px - 50%),
    ${(props) => props.$childrenSize.height + props.$gap}px
  );
`;

const bottomLeftStyle = css`
  transform: translate(
    0px,
    ${(props) => props.$childrenSize.height + props.$gap}px
  );
`;

const bottomRightStyle = css`
  transform: translate(
    calc(-100% + ${(props) => props.$childrenSize.width}px),
    ${(props) => props.$childrenSize.height + props.$gap}px
  );
`;

const rightTopStyle = css`
  transform: translate(
    ${(props) => props.$childrenSize.width + props.$gap}px,
    0px
  );
`;

const rightBottomStyle = css`
  transform: translate(
    ${(props) => props.$childrenSize.width + props.$gap}px,
    calc(-100% + ${(props) => props.$childrenSize.height}px)
  );
`;

const leftBottomStyle = css`
  transform: translate(
    calc(-100% - ${(props) => props.$gap}px),
    calc(-100% + ${(props) => props.$childrenSize.height}px)
  );
`;

const leftTopStyle = css`
  transform: translate(calc(-100% - ${(props) => props.$gap}px), 0px);
`;

const leftStyle = css`
  transform: translate(
    calc(-100% - ${(props) => props.$gap}px),
    calc(-50% + ${(props) => props.$childrenSize.height / 2}px)
  );
`;

const rightStyle = css`
  transform: translate(
    ${(props) => props.$childrenSize.width + props.$gap}px,
    calc(-50% + ${(props) => props.$childrenSize.height / 2}px)
  );
`;

const placementStyleMap = {
  top: topStyle,
  'top-left': topLeftStyle,
  'top-right': topRightStyle,
  'bottom-left': bottomLeftStyle,
  'bottom-right': bottomRightStyle,
  bottom: bottomStyle,
  'right-top': rightTopStyle,
  'left-top': leftTopStyle,
  'right-bottom': rightBottomStyle,
  'left-bottom': leftBottomStyle,
  left: leftStyle,
  right: rightStyle,
};

const fadeIn = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility:visible
  }
`;

const fadeOut = keyframes`
  from {
    visibility: visible;
  }
  to {
    visibility: hidden;
  }
`;

const OverlayWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.$position.top}px;
  left: ${(props) => props.$position.left}px;
  background: #fff;
  border-radius: 10px;
  font-family: art;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  animation: ${(props) => (props.$isOpen ? fadeIn : fadeOut)} ease-in-out
    forwards;
  ${(props) => placementStyleMap[props.$placement] || placementStyleMap.top}
`;

/**
 * `Dropdown` 是一個下拉選單元件，當頁面上的選項過多時，
 * 可以用這個元件來收納選項，透過滑鼠事件來觸發選單彈出，
 * 點擊選項會執行相對應的命令。
 */
const Dropdown = ({
  children,
  placement,
  overlay,
  isOpen,
  onClick,
  onClose,
}) => {
  const childrenRef = useRef();
  const [childrenSize, setChildrenSize] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleOnResize = () => {
    setChildrenSize({
      width: childrenRef.current.offsetWidth,
      height: childrenRef.current.offsetHeight,
    });
    setPosition({
      top: childrenRef.current.getBoundingClientRect().top,
      left: childrenRef.current.getBoundingClientRect().left,
    });
  };

  const handleOnClick = useCallback(
    (event) => {
      const dropdownId = findAttributeInEvent(event, 'data-dropdown-id');
      if (!dropdownId) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('click', handleOnClick);
    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, [handleOnClick]);

  useEffect(() => {
    handleOnResize();
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);

  return (
    <>
      <div
        role="presentation"
        ref={childrenRef}
        data-dropdown-id="dropdown"
        onClick={onClick}
        style={{ width: '200px'}}
      >
        {children}
      </div>
      <Portal>
        <OverlayWrapper
          data-dropdown-id="dropdown"
          $isOpen={isOpen}
          $position={position}
          $placement={placement}
          $childrenSize={childrenSize}
          $gap={12}
        >
          {overlay}
        </OverlayWrapper>
      </Portal>
    </>
  );
};

export default Dropdown;
