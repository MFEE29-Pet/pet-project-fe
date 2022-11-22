import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

import Dropdown from './Dropdown';

const selectBoxEnable = css`
  color: #333;
  &:hover {
    border: 1px solid #222;
  }
`;

const selectBoxDisable = css`
  background: #2c0101;
  color: #00000040;
`;

const SelectBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  font-family: art;
  border-radius: 20px;
  background: #fff;
  padding: 6px 12px;
  cursor: pointer;
  width: 100%;
  min-width: 180px;
  & > *:not(:first-child) {
    margin-left: 12px;
  }
  ${(props) => (props.$isDisabled ? selectBoxDisable : selectBoxEnable)}
`;

const ArrowDown = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => (props.$isOpen ? 180 : 0)}deg);
  transform-origin: center center;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Menu = styled.div`
  width: 180px;
  overflow-y: scroll;
  height: 200px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
  }
`;

const MenuItem = styled.div`
  display: inline-flex;
  align-items: center;
  height: 38px;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? '#ffffff' : '#222')};
  background-color: ${(props) =>
    props.$isSelected
      ? `${props.$mode === 'dog' ? '#f8b62d' : '#00a29a'}`
      : '#fff'};
  &:hover {
    background: ${(props) => (props.$mode === 'dog' ? '#f8b62d' : '#00a29a')};
  }
`;

/**
 * `Select` 是一個下拉選擇器。觸發時能夠彈出一個菜單讓用戶選擇操作。
 */
const Select = ({
  options,
  value,
  onSelect,
  placeholder,
  isDisabled,
  isLoading,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mode } = useContext(SwitchButtonContext);

  const foundOption = options.find((option) => option.value === value) || {};

  return (
    <Dropdown
      isOpen={isOpen}
      onClick={() => (isDisabled || isLoading ? null : setIsOpen(true))}
      onClose={() => setIsOpen(false)}
      placement="bottom-left"
      overlay={
        <Menu>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              role="presentation"
              $isSelected={option.value === value}
              $mode={mode}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      }
    >
      <SelectBox $isDisabled={isDisabled || isLoading}>
        <span>{foundOption.label || placeholder}</span>
        <ArrowDown $isOpen={isOpen}>
          <i className="fa-solid fa-chevron-down"></i>
        </ArrowDown>
      </SelectBox>
    </Dropdown>
  );
};

export default Select;
