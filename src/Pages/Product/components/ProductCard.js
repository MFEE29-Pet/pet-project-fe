import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductCard() {
  const [product, setProduct] = useState({
    sid: 0,
    name: '',
    category: 0,
    img: '',
    price: 0,
    member: 0,
    member_price: 0,
    specials: '',
    info: '',
    created_at: '',
    inventory: 0,
    on_sale: 1,
  })
  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:6001/product/p-json');

      // console.log(res.data.rows);
      const products = res.data.rows;
      setProduct(products);

    } catch (e) {
      console.log(e.message);
    }

  }
  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, []);

  console.log(product);



  return (
    <>
      <div className="pro-card">
        <div className="img-wrap">
          <img src="/images/test/can1.jpg" alt="" />
        </div>
        <div className="pro-title">
          <p>寵物商品</p>
          <p><s>$1,280</s> <span>$980</span></p>
        </div>

      </div>
    </>
  )
}

export default ProductCard