import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

function LinePay() {
  const location = useLocation();
  const navigate = useNavigate();

  const orderId = new URLSearchParams(location.search).get('orderId');
  const transactionId = new URLSearchParams(location.search).get(
    'transactionId'
  );

  // console.log(orderId, transactionId);
  const goConfirm = async () => {
    const res = await axios(
      `http://localhost:6001/cart/linepay/confirm?orderId=${orderId}&transactionId=${transactionId}`
    );

    console.log(res);

    if (res.data.returnCode === '0000') {
      navigate('/cart/cartp3');
    }
  };

  useEffect(() => {
    goConfirm();
  }, []);

  return <div>LinePay</div>;
}

export default LinePay;
