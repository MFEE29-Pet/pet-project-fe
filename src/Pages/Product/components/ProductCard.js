import axios from 'axios';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import { PRODUCT_LIST } from '../my-config';

function ProductCard() {
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
  // 目前解法: 後端篩選 新增 子分類 和 母分類 路由
  if (!usp) {
    usp = '';
  } else {
    usp = `?page=${usp}`;
  }

  if (!cate) {
    cate = '';
  } else if (cate === 1 || cate === 2) {
    cate = `/pcate/${cate}/`;
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
                  <Link to="">
                    <div className="img-wrap bg_bright_color">
                      <img src={`/images/test/${e2.img}`} alt="" />
                    </div>
                    <div className="pro-title">
                      <p>{e2.name}</p>
                      <p>
                        <s>${e2.price}</s> <span>${e2.member_price}</span>
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
      <Pagination totalPages={totalPages} page={page} usp={usp} />
    </>
  );
}

export default ProductCard;
