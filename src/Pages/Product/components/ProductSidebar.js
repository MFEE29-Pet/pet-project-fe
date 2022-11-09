import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductSidebar() {
  const [cates, setCates] = useState([]);

  const getCates = async () => {
    try {
      const res = await axios.get('http://localhost:6002/product/c-json');

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
          <a href="/#">
            <p>所有商品</p>
          </a>
        </li>
        {/* <img src="./icons/Vector.svg" alt="" /> */}
        {/* 短路求值 */}
        {cate &&
          cate.map((e, i) => {
            return (
              <li key={e.sid}>
                <a href="/#">
                  <p>{e.name}</p>
                </a>
                <ul>
                  {e.child.map((e2, i2) => {
                    return (
                      <li key={e2.sid}>
                        <a href="/#">
                          <p>{e2.name}</p>
                        </a>
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
