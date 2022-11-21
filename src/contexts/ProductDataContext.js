import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { PRODUCT_LIST } from '../Pages/Product/my-config';

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
  // 總頁數
  const [totalPages, setTotalPages] = useState(0);

  // 頁數
  const [page, setPage] = useState(1);

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let usp = +params.get('page') || 1;
  let cate = +params.get('cate');
  // let p_sid = +params.get('p_sid');
  // console.log({ usp, cate });

  //  思考如果所有商品該如何處理 ?
  // 目前解法: 後端設變數判斷篩選
  if (!usp) {
    usp = '';
  } else {
    usp = `?page=${usp}`;
  }

  if (!cate) {
    cate = '';
  } else if (cate === 1 || cate === 2) {
    cate = `/cate/${cate}/`;
  } else {
    cate = `/cate/${cate}/`;
  }

  // console.log({ cate, usp });

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get(`${PRODUCT_LIST}${cate}${usp}`);

      // console.log(res);
      setTotalPages(res.data.totalPages);
      setPage(res.data.page);

      const products = res.data.rows;
      setProduct(products);
    } catch (e) {
      console.log(e.message);
    }
  };

  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, [location]);

  // console.log(product);
  // console.log(totalPages);

  const rowProducts = _.chunk(product, 4);
  // console.log(rowProducts);
  return (
    <ProductDataContext.Provider
      value={{ totalPages, page, ...product, rowProducts, usp }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};
