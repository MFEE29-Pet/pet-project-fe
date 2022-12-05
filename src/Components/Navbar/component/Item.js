import React from 'react';
import styled from 'styled-components';
import { LittleItem } from './LittleItem.js';

const forumItem = [
  { id: 1, name: '綜合版', to: '/forum' },
  { id: 2, name: '閒聊版', to: '/forum/talk' },
  { id: 3, name: '發問版', to: '/forum/question' },
  { id: 4, name: '活動版', to: '/forum/activity' },
  { id: 5, name: '送養版', to: '/forum/give' },
  { id: 6, name: '領養版', to: '/forum/adoption' },
  { id: 7, name: '其他版', to: '/forum/other' },
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
    <ItemBox className="nav_left">
      <LittleItem
        ItemData={forumItem}
        Title="寵物論壇"
        EnTitle="Forum"
        to="forum"
      />
      <LittleItem
        ItemData={clinicItem}
        Title="醫療診所"
        EnTitle="Clinic"
        to="clinic"
      />
      <LittleItem
        ItemData={productItem}
        Title="購物商城"
        EnTitle="Store"
        to="product"
      />
    </ItemBox>
  );
}

export default Item;
