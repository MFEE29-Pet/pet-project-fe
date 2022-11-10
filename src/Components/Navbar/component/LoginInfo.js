import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../Select/Dropdown';
import LoginInfoBoxTop from './LoginInfoBoxTop';
import LoginInfoBoxBottom from './LoginInfoBoxBottom';

const LoginInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  cursor: pointer;
`;

function LoginInfo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LoginInfoBox>
      <Dropdown
        children={<LoginInfoBoxTop />}
        overlay={<LoginInfoBoxBottom/>}
        isOpen={isOpen}
        onClick={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement='bottom'
      />
    </LoginInfoBox>
  );
}

export default LoginInfo;
