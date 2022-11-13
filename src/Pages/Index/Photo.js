import React from 'react';
import styled from 'styled-components';
import PhotographerOne from './PhotographerOne';
import PhotographerTwo from './PhotographerTwo';
import PhotographerThree from './PhotographerThree';

const PHOTO = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const PhotoBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Photo() {
  return (
    <PHOTO>
      <PhotoBox className="index_photo_bg">
        <PhotographerOne />
        <PhotographerTwo />
        <PhotographerThree />
      </PhotoBox>
    </PHOTO>
  );
}

export default Photo;
