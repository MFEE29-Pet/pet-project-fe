import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LOGOBOX = styled.div`
  width: 30%;
  height: 80px;
  display: flex;
  justify-content: start;
`;
const LOGO = styled(Link)`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

function Logo() {
  return (
    <LOGOBOX>
      <LOGO className="logo" to="/"></LOGO>
    </LOGOBOX>
  );
}

export default Logo;
