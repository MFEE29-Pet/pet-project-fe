import React, { useContext } from 'react';
import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const UL = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  li {
    width: 40px;
    height: 40px;
    font-size: 1.2em;
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 265ms ease-out;
    color: #fff;
  }
  div {
  }
`;

const LI = styled.li``;

const IconBox = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  &::before {
    transform: scale(1);
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: block;
    transition: all 265ms ease-out;
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#40220f' : '#18334e'};
  }
  &:hover {
    &::before {
      transform: scale(0);
      transition: all 265ms ease-in;
    }
    i {
      color: ${(props) => (props.$mode === 'dog' ? '#40220f' : '#18334e')};
      background: transparent;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(2);
      transition: all 265ms ease-out;
    }
  }
`;

function Icon() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <UL className="footer_right_item">
      <LI>
        <IconBox $mode={mode}>
          <i className="fa-brands fa-whatsapp"></i>
        </IconBox>
      </LI>
      <LI>
        <IconBox $mode={mode}>
          <i className="fa-brands fa-instagram"></i>
        </IconBox>
      </LI>
      <LI>
        <IconBox $mode={mode}>
          <i className="fa-brands fa-twitter"></i>
        </IconBox>
      </LI>
      <LI>
        <IconBox $mode={mode}>
          <i className="fa-brands fa-facebook-f"></i>
        </IconBox>
      </LI>
      <LI>
        <IconBox $mode={mode}>
          <i className="fa-brands fa-linkedin-in"></i>
        </IconBox>
      </LI>
    </UL>
  );
}

export default Icon;
