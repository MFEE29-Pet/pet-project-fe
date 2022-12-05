import React from 'react';
import Copyright from './Copyright';
import Icon from './Icon';
import styled from 'styled-components';

const RIGHT = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

function FooterRight() {
  return (
    <RIGHT className="index_footer_right">
      <Icon />
      <Copyright />
    </RIGHT>
  );
}

export default FooterRight;
