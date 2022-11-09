import React from "react";
import styled from "styled-components";
import { LittleItem } from "./LittleItem.js";

const forumItem = [
  { id: 1, name: "閒聊版" },
  { id: 2, name: "發問版" },
  { id: 3, name: "經驗版" },
  { id: 4, name: "活動版" },
  { id: 5, name: "送養版" },
  { id: 6, name: "領養版" },
];

const clinicItem = [
  { id: 1, name: "合作診所" },
  { id: 2, name: "預約掛號" },
];

const productItem = [
  { id: 1, name: "狗勾汪汪" },
  { id: 2, name: "貓貓喵喵" },
  { id: 3, name: "攝影服務" },
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
