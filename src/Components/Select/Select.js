import React, { useState } from "react";
import styled, { css } from "styled-components";

import Dropdown from "./Dropdown";


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
  height: 38px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-family: art;
  border-radius: 20px;
  background: #dddddd;
  padding: 6px 12px;
  cursor: pointer;
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
  min-width: 180px;
  display: inline-flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 6px 12px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "#ffffff" : "#222")};
  &:hover {
    background: #ece405;
    &:first-child{
      border-start-end-radius: 8px;
      border-start-start-radius: 8px;
    }
    &:last-child{
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
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
