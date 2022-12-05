import React from 'react';
import LeftLittleItem from './LeftLittleItem';
import styled from 'styled-components';

const forumItem = [
  { id: 1, name: '綜合版' },
  { id: 2, name: '發問版' },
  { id: 3, name: '經驗版' },
  { id: 4, name: '活動版' },
  { id: 5, name: '送養版' },
  { id: 6, name: '領養版' },
];

const clinicItem = [
  { id: 1, name: '合作診所' },
  { id: 2, name: '預約掛號' },
];

const productItem = [
  { id: 1, name: '狗勾汪汪' },
  { id: 2, name: '貓貓喵喵' },
  { id: 3, name: '攝影服務' },
];

const membersItem = [
  { id: 1, name: '我的追蹤' },
  { id: 2, name: '購物紀錄' },
  { id: 3, name: '資料修改' },
  { id: 4, name: '密碼修改' },
  { id: 5, name: '忘記密碼' },
];

const Item = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

function FooterLeft() {
  return (
    <Item className="index_footer_left">
      <LeftLittleItem ItemData={forumItem} Title="寵物論壇" />
      <LeftLittleItem ItemData={clinicItem} Title="醫療診所" />
      <LeftLittleItem ItemData={productItem} Title="購物商城" />
      <LeftLittleItem ItemData={membersItem} Title="會員中心" />
    </Item>
  );
}

export default FooterLeft;
