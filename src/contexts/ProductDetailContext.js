import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { PRODUCT_LIST } from '../Pages/Product/my-config';

const ProductDetailContext = createContext([]);

export default ProductDetailContext;

export const ProductDetailContextProvider = function ({ children }) {
  // 初始狀態
  let initProductDetail = [
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
  // 商品細節資訊 state
  const [productDetail, setProductDetail] = useState(initProductDetail);
  // 數量 state
  const [amount, setAmount] = useState(1);

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');

  if (!sid) {
    sid = '';
  } else {
    sid = `/detail/${sid}`;
  }
  // console.log({ sid });

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get(`${PRODUCT_LIST}${sid}`);

      // console.log(res);

      const productData = res.data.rows;
      setProductDetail(productData);
    } catch (e) {
      console.log(e.message);
    }
  };

  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, [location]);

  // console.log(productDetail);

  const pd = productDetail.map((e, i) => {
    return { ...e };
  });
  const data = pd[0];
  // console.log(data);
  return (
    <ProductDetailContext.Provider value={{ data, amount, setAmount }}>
      {children}
    </ProductDetailContext.Provider>
  );
};
