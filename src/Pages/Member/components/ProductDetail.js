import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetail({ open, detailNum }) {
  const [data, setData] = useState([]);

  const getProductDetailData = async () => {
    const res = await axios.get(
      `http://localhost:6001/member/orderproductdetail/${detailNum}`
    );
    console.log(res);
    setData(res.data.rows);
  };

  useEffect(() => {
    getProductDetailData();
  }, [open]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '10px',
        display: open ? 'block' : 'none',
      }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ color: '#727171', fontSize: '16px' }}>商品圖</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>商品名</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>數量</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>複價</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            const { product_name, price, amount, product_img } = e;
            return (
              <tr key={i}>
                <td
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    height: '150px',
                  }}
                >
                  <img
                    src=""
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  {product_name}
                </td>
                <td
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#727171',
                  }}
                >
                  {amount}
                </td>
                <td
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#f00',
                  }}
                >
                  ${price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetail;
