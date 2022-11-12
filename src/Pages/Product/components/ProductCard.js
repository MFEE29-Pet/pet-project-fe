import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import _ from 'lodash';
import ProductDataContext from '../../../contexts/ProductDataContext';

function ProductCard(props) {
  // 商品資訊 state
  const [product, setProduct] = useState([
    {
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
    },
  ]);
  // // 總頁數
  const [totalPages, setTotalPages] = useState(0);
  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:6001/product/p-json');

      // console.log(res.data);
      setTotalPages(res.data.totalPages);
      props.setGetTotalPages(totalPages);

      const products = res.data.rows;
      setProduct(products);
    } catch (e) {
      console.log(e.message);
    }
  };

  // console.log(totalPages);
  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, []);

  // console.log(product);

  const rowProducts = _.chunk(product, 4);
  // console.log(rowProducts);

  return (
    <>
      {rowProducts.map((e, i) => {
        return (
          <div className="list-row" key={i}>
            {e.map((e2, i2) => {
              return (
                <div className="pro-card" key={e2.sid}>
                  <div className="img-wrap bg_bright_color">
                    <img src={`/images/test/${e2.img}`} alt="" />
                  </div>
                  <div className="pro-title">
                    <p>{e2.name}</p>
                    <p>
                      <s>{e2.price}</s> <span>{e2.member_price}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
