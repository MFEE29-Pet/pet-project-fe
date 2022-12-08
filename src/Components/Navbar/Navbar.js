import Item from './component/Item.js';
import Logo from './component/Logo';
import Right from './component/Right.js';
import styled from 'styled-components';

const NAV = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: 0px 4px 4px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: fixed
  // top: 0px
  // right: 0px
  z-index: 3;
`;

const NAVBOX = styled.div`
  width: 1400px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navbar() {
  return (
    <NAV className="navbar">
      <NAVBOX className="nav_box">
        <Logo />
        <Item />
        <Right />
      </NAVBOX>
    </NAV>
  );
}

export default Navbar;
