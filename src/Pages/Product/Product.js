import ProductSidebar from './components/ProductSidebar';
import Filter from './components/Filter';
import './style/style.scss';
import ProductCard from './components/ProductCard';
import { useState, useEffect } from 'react';
import Popup from './components/Popup';
import { PRODUCT_LIST } from './my-config';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

function Product() {
  const [trigger, setTrigger] = useState(false);
  const [sortMethod, setSortMethod] = useState('created_at');
  // TODO: 特價類型篩選
  const [saleType, setSaleType] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);

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

  // 搜尋字串
  const [searchWord, setSearchWord] = useState('');

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
    cate = '/0/';
  } else if (cate === 1 || cate === 2) {
    cate = `/${cate}/`;
  } else {
    cate = `/${cate}/`;
  }

  // console.log({ cate, usp });

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${PRODUCT_LIST}${cate}${sortMethod}${usp}&min_price=${minPrice}&max_price=${maxPrice}${
          searchWord ? `&search=${searchWord}` : ``
        }`
      );

      console.log(res);
      setTotalPages(res.data.totalPages);
      setPage(res.data.page);

      const products = res.data.rows;
      setProduct(products);
    } catch (e) {
      console.log(e.message);
    }
  };

  // 商品搜尋
  // console.log(product);
  // const handleSearch = (product, searchWord) => {
  //   let newProducts = product ? [] : [...product];

  //   if (searchWord?.length) {
  //     newProducts = product.filter((product) => {
  //       // includes -> String API
  //       return product.name.includes(searchWord);
  //     });
  //   }

  //   return newProducts;
  // };

  // didMount 載入資料
  useEffect(() => {
    getProducts();
  }, [location]);

  // 排序
  useEffect(() => {
    getProducts();
  }, [sortMethod]);

  // 價格區間
  useEffect(() => {
    getProducts();
  }, [minPrice, maxPrice]);
  // console.log({ minPrice, maxPrice });

  // 搜尋
  useEffect(() => {
    getProducts();
  }, [searchWord]);
  // useEffect(() => {
  //   // 搜尋字串太少不需要搜尋
  //   if (searchWord.length < 3 && searchWord.length !== 0) return
  //   let newProducts = [];
  //   // 處理搜尋
  //   newProducts = handleSearch(product, searchWord);
  // }, [searchWord]);

  // console.log(product);
  // console.log(totalPages);

  const rowProducts = _.chunk(product, 4);

  return (
    <>
      <main>
        <ProductSidebar />
        <section className="right">
          <Filter
            setTrigger={setTrigger}
            trigger={trigger}
            setSortMethod={setSortMethod}
            sortMethod={sortMethod}
            totalPages={totalPages}
            page={page}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />

          <div className="product-list">
            <ProductCard
              sortMethod={sortMethod}
              minPrice={minPrice}
              maxPrice={maxPrice}
              rowProducts={rowProducts}
              totalPages={totalPages}
              page={page}
              usp={usp}
            />
          </div>
        </section>
      </main>
      <Popup
        trigger={trigger}
        setTrigger={setTrigger}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </>
  );
}

export default Product;
