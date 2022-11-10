import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { imgUrl } from '../../../config';
import FishIcon from './FishIcon';
import BoneIcon from './BoneIcon';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const LittleItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  &:hover {
    .shadow {
      opacity: 1;
      transition: 0.2s;
    }
    .foot {
      opacity: 1;
      top: 45px;
      transition: 0.2s;
      transition-delay: 0.2s;
    }
    .list {
      display: block;
    }
  }
`;
const TitleBox = styled.h2`
  font-family: art;
  font-size: 20px;
  width: 140px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  padding-bottom: 5px;
  background-color: #fff;
  z-index: 4;
`;
const EnTitleBox = styled.small`
  font-family: art;
  font-size: 18px;
  width: 140px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  z-index: 4;
`;
const Foot = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0px;
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 0;
`;
const Shadow = styled.img`
  width: 60%;
  position: absolute;
  top: 31.4px;
  left: 50%;
  z-index: 3;
  transform: translateX(-50%);
  opacity: 0;
`;
const List = styled.ul`
  width: 140px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff70;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  display: none;
`;
const LittleHref = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  font-family: art;
  cursor: pointer;
`;

const LI = styled(Link)`
  position: relative;
  &:hover{
    .icon{
      opacity:1;
    }
  }
`;

export const LittleItem = ({ ItemData, Title, EnTitle }) => {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <LittleItemBox>
      <TitleBox className="text_main_dark_color2">{Title}</TitleBox>
      <EnTitleBox className="text_main_dark_color2">{EnTitle}</EnTitleBox>
      <Foot className="foot foot_type" />
      <Shadow src={`${imgUrl}/images/shadow.png`} alt="" className="shadow" />
      <List className="list">
        {ItemData.map((e, i) => {
          const { id, name, to } = e;
          return (
            <LittleHref key={id}>
              <LI className="text_main_dark_color2" to={to}>
                {name}
                {mode === 'dog' ? <BoneIcon/> : <FishIcon />}
              </LI>
            </LittleHref>
          );
        })}
      </List>
    </LittleItemBox>
  );
};
