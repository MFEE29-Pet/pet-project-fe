import React from 'react';
import styled from 'styled-components';
import { LittleItem } from './LittleItem.js';

const forumItem = [
  { id: 1, name: '閒聊版', to: '/forum/?talk' },
  { id: 2, name: '發問版', to: '/forum/?question' },
  { id: 3, name: '經驗版', to: '/forum/?expression' },
  { id: 4, name: '活動版', to: '/forum/?active' },
  { id: 5, name: '送養版', to: '/forum/?gut' },
  { id: 6, name: '領養版', to: '/forum/?get' },
];

const clinicItem = [
  { id: 1, name: '合作診所', to: '/clinic' },
  { id: 2, name: '預約掛號' },
];

const productItem = [
  { id: 1, name: '狗勾汪汪', to: 'product?cate=1&page=1' },
  { id: 2, name: '貓貓喵喵', to: 'product?cate=2&page=1' },
  { id: 3, name: '攝影服務', to: 'product/photographers' },
];

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

function Item() {
  return (
    <ItemBox>
      <LittleItem ItemData={forumItem} Title="寵物論壇" EnTitle="Forum" />
      <LittleItem ItemData={clinicItem} Title="醫療診所" EnTitle="Clinic" />
      <LittleItem ItemData={productItem} Title="購物商城" EnTitle="Store" />
    </ItemBox>
  );
}

export default Item;
