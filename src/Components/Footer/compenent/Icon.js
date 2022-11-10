import React from 'react';
import styled from 'styled-components';

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
  }
  div {
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
      background: #fff;
      transition: all 265ms ease-out;
    }
    &:hover {
      &::before {
        transform: scale(0);
        transition: all 265ms ease-in;
      }
      i {
        color: #fff;
        background: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(2);
        transition: all 265ms ease-out;
      }
    }
  }
`;

function Icon() {
  return (
    <UL>
      <li>
        <div>
          <i className="fa-brands fa-whatsapp text_hover_main_dark_color2"></i>
        </div>
      </li>
      <li >
        <div>
          <i className="fa-brands fa-instagram text_hover_main_dark_color2"></i>
        </div>
      </li>
      <li>
        <div>
          <i className="fa-brands fa-twitter text_hover_main_dark_color2"></i>
        </div>
      </li>
      <li>
        <div>
          <i className="fa-brands fa-facebook-f text_hover_main_dark_color2"></i>
        </div>
      </li>
      <li>
        <div>
          <i className="fa-brands fa-linkedin-in text_hover_main_dark_color2"></i>
        </div>
      </li>
    </UL>
  );
}

export default Icon;
