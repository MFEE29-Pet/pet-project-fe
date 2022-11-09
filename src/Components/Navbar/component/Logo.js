import styled from 'styled-components';
import { imgUrl } from '../../../config';
const LogoBox = styled.div`
  width: 30%;
`;
const Img = styled.img`
  width: 80px;
`;

function Logo() {
  return (
    <LogoBox>
      <Img src={`${imgUrl}/images/logo_PetBan_2_2.png`} alt="" />
    </LogoBox>
  );
}

export default Logo;
