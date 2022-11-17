import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

function ProductSidebar() {
  const [cates, setCates] = useState([]);
  const { mode } = useContext(SwitchButtonContext);

  const getCates = async () => {
    try {
      const res = await axios.get('http://localhost:6001/product/c-json');

      setCates(res.data.rows);
    } catch (e) {
      // 錯誤處理
      console.log(e.message);
    }
  };
  // console.log(cates);

  // didMount 載入資料
  useEffect(() => {
    getCates();
  }, []);

  // parents層分類
  const parents = cates.filter((v, i) => {
    return v.parent_sid === 0;
  });
  // 子層分類
  const children = cates.filter((v, i) => {
    return v.parent_sid !== 0;
  });

  // parents 新增key-> child:[]
  const cate = parents.map((v, i) => {
    return { ...v, child: [] };
  });

  // 子層分類加入parents
  for (let p of cate) {
    for (let c of children) {
      if (p.sid === c.parent_sid) {
        p.child.push(c);
      }
    }
  }
  // console.log(cate);

  return (
    <section className="side-bar">
      <div className="side-title">
        {/* <i className="fa-solid fa-list"></i> */}
        <h1>分類</h1>
      </div>
      <ul className="categories">
        <li>
          <Link to="/product">
            <p>所有商品</p>
          </Link>
        </li>
        {/* 短路求值 */}
        {cate &&
          cate.map((e, i) => {
            return (
              <li key={e.sid}>
                <Link to={`/product?cate=${e.sid}&page=1`}>
                  <p>{e.name}</p>
                </Link>
                <ul>
                  {e.child.map((e2, i2) => {
                    return (
                      <li key={e2.sid}>
                        <Link to={`/product?cate=${e2.sid}&page=1`}>
                          <p>{e2.name}</p>
                        </Link>
                        <i
                          className={`fa-duotone ${
                            mode === 'dog' ? 'fa-bone' : 'fa-fish'
                          } text_main_light_color1`}
                        ></i>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default ProductSidebar;
