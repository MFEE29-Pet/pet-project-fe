import React from "react";
import styled from "styled-components";
const I = styled.i`
  color: #c9caca;
  font-size: 20px;
`;

const CART = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Cart() {
  return (
    <CART>
      <I className="fa-light fa-cart-shopping"></I>
    </CART>
  );
}

export default Cart;
