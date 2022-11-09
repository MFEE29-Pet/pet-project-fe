import React from "react";
import styled, { css } from "styled-components";

const errorStyle = css`
  border: 1px solid ${(props) => props.theme.color.error};
  &:hover {
    border: 1px solid ${(props) => props.theme.color.error};
  }
`;

const disabledStyle = css`
  border: 1px solid ${(props) => props.theme.color.disable};
  cursor: not-allowed;
  background: ${(props) => props.theme.color.disable}22;
  .text-field__input {
    cursor: not-allowed;
    background: none;
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.color.disable};
  }
`;

const StyledTextField = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 12px;
  box-sizing: border-box;
  height: 36px;
  ${(props) => (props.$isError ? errorStyle : null)}
  ${(props) => (props.$isDisabled ? disabledStyle : null)}
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 14px;
  color: #333;
  width: 100%;
  border-radius: 30px;
  padding: 10px;
`;

function DogInput({
  prefix,
  suffix,
  isError,
  isDisabled,
  placeholder,
  input,
  setInput,
  ...props
}) {
  return (
    <>
      <StyledTextField $isError={isError} $isDisabled={isDisabled}>
        {prefix}
        <Input
          type="text"
          placeholder={placeholder}
          className="text-field__input"
          disabled={isDisabled}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          {...props}
        />
        {suffix}
      </StyledTextField>
    </>
  );
}

export default DogInput;
