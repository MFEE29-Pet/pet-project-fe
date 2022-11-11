import React from 'react';
import styled from 'styled-components';

const Input = styled.input`

`;

const Label = styled.label`

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
    <>
      <Input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
        {...otherProps}
        
      />
      <Label className='label'>{value}</Label>
    </>
  );
}

export default CheckBox;
