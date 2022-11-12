import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

const ProductDataContext = createContext([]);

export default ProductDataContext;

export const ProductDataContextProvider = function ({ children }) {
  // 初始狀態
  let initProductData = [
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
  ];
  // 商品資訊 state
  const [product, setProduct] = useState(initProductData);
  // 總頁數 state
  const [totalPages, setTotalPages] = useState(0);

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:6001/product/p-json');

      // console.log(res.data);
      setTotalPages(res.data.totalPages);

      const products = res.data.rows;
      setProduct(products);
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(totalPages);
  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, []);

  console.log(product);

  const rowProducts = _.chunk(product, 4);
  // console.log(rowProducts);

  return (
    <ProductDataContext.Provider value={[...product]}>
      {children}
    </ProductDataContext.Provider>
  );
};
