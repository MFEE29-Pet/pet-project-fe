import React from 'react';
import styled from 'styled-components';

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  font-family: art;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  &:checked + .label::after {
    opacity: 1;
  }
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #727171;
  background: transparent;
  cursor: pointer;
  margin-right: 10px;
  &::after {
    content: '';
    position: absolute;
    background-color: #727171;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-5px) translateX(-5px);
    left: 50%;
    opacity: 0;
  }
`;

function Radio(props) {
  const { value, checkedValue, setCheckedValue, ...otherProps } = props;

  return (
    <RadioBox>
      <Input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value);
        }}
        {...otherProps}
        id={value}
      />
      <Label className="label" htmlFor={value}></Label>
      <h3 style={{ marginRight: '15px' }}>{value}</h3>
    </RadioBox>
  );
}

export default Radio;
