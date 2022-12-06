import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const P = styled.p`
  color: ${(props) => (props.$mode === 'dog' ? '#956134' : '#18334e')};
`;
const H1 = styled.h1`
  color: ${(props) => (props.$mode === 'dog' ? '#956134' : '#18334e')};
  font-size: 20px;
`;
const LI = styled.li`
  border-left: 1px solid
    ${(props) => (props.$mode === 'dog' ? '#956134' : '#18334e')};
`;
const I = styled.i`
  color: ${(props) => (props.$mode === 'dog' ? '#956134' : '#18334e')};
  font-size: 20px;
`;
const DIV = styled.div`
  position: relative;
`;
const Border = styled.div`
  width: 100px;
  height: 2px;
  border-top: 2px solid
    ${(props) => (props.$mode === 'dog' ? '#956134' : '#18334e')};
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

function ProductSidebar() {
  const [cates, setCates] = useState([]);
  const [hover, setHover] = useState(true);
  const { mode } = useContext(SwitchButtonContext);
  const navigate = useNavigate();

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let cateFromQueryString = +params.get('cate');
  const [currentCate, setCurrentCate] = useState(cateFromQueryString || 0);
  // setCurrentCate(cateFromQueryString);

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
  useEffect(() => {
    setCurrentCate(cateFromQueryString);
  }, []);
  useEffect(() => {
    setCurrentCate(cateFromQueryString);
  }, [location]);

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
      <div
        onClick={() => navigate('/service')}
        style={{
          display: 'flex',
          position: 'absolute',
          left: '2%',
          top: '-10px',
          width: '120px',
          justifyContent: 'center',
          height: '25px',
          alignItems: 'center',
          borderRadius: '20px',
          color: '#fff5de',
          cursor: 'pointer',
        }}
        className="bg_main_light_color1"
      >
        <i className="fa-solid fa-messages" style={{ marginRight: '5px' }}></i>
        <p style={{ color: '#fff5de' }}>線上客服</p>
      </div>
      <DIV className="side-title" $mode={mode}>
        <Border $mode={mode}></Border>
        <I $mode={mode} className="fa-solid fa-list"></I>
        <H1 $mode={mode}>分類</H1>
      </DIV>
      {/* //XXX 字體是否加粗 ? */}
      <ul className="categories">
        <li>
          <Link to="/product">
            <P
              $mode={mode}
              style={{
                fontWeight: `${currentCate === 0 ? 'bold' : ''}`,
              }}
            >
              所有商品
            </P>
          </Link>
        </li>
        {/* 短路求值 */}
        {cate &&
          cate.map((e, i) => {
            return (
              <li key={e.sid}>
                <Link to={`/product?cate=${e.sid}&page=1`}>
                  <P
                    $mode={mode}
                    style={{
                      fontWeight: `${currentCate === e.sid ? 'bold' : ''}`,
                    }}
                  >
                    {e.name}
                  </P>
                </Link>
                <ul>
                  {e.child.map((e2, i2) => {
                    return (
                      <LI key={e2.sid} $mode={mode}>
                        <Link to={`/product?cate=${e2.sid}&page=1`}>
                          <P
                            $mode={mode}
                            style={{
                              fontWeight: `${
                                currentCate === e2.sid ? 'bold' : ''
                              }`,
                            }}
                          >
                            {e2.name}
                          </P>
                        </Link>
                        <i
                          className={`fa-duotone ${
                            mode === 'dog' ? 'fa-bone' : 'fa-fish'
                          } text_main_light_color1`}
                        ></i>
                      </LI>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        <li
          key={99}
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        >
          <Link to={`/product/photographers`}>
            <P $mode={mode}>攝影服務</P>
          </Link>
          <i
            style={{
              display: `${hover ? 'none' : 'inline'}`,
              opacity: '.7',
            }}
            className={`fa-duotone ${
              mode === 'dog' ? 'fa-bone' : 'fa-fish'
            } text_main_light_color1`}
          ></i>
        </li>
      </ul>
    </section>
  );
}

export default ProductSidebar;
