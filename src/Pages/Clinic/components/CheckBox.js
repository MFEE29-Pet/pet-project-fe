import React from 'react';
import styled from 'styled-components';

const Check= styled.div`
  display: flex;
  align-items: center;
  font-family: art;
  cursor: pointer;
`

const Input = styled.input`
  display: none;
  &:checked + .label::after {
    opacity: 1;
  }
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #c9caca;
  cursor: pointer;
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

function CheckBox({
  value,
  checkedValueList,
  setCheckedValueList,
  ...otherProps
}) {
  const handleChange = (e) => {
    if (checkedValueList.includes(e.target.value)) {
      const newLikeList = checkedValueList.filter((v, i) => {
        return v !== e.target.value;
      });
      setCheckedValueList(newLikeList);
    } else {
      const newLikeList = [...checkedValueList, e.target.value];
      setCheckedValueList(newLikeList);
    }
  };

  return (
    <Check>
      <Input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
        {...otherProps}
        id={value}
      />
      <Label className="label" htmlFor={value}></Label>
      <h2>{value}</h2>
    </Check>
  );
}

export default CheckBox;
