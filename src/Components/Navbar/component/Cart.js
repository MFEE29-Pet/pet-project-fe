import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const I = styled.i`
  color: #c9caca;
  font-size: 20px;
`;

const CART = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

function Cart() {
  return (
    <CART to='/cart'>
      <I className="fa-light fa-cart-shopping"></I>
    </CART>
  );
}

export default Cart;
