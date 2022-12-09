import React, { useContext } from 'react';
import ProductLovedCards from './components/ProductLovedCards';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { LOVE_LIST } from './my-config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import IsLovedContext from '../Product/contexts/IsLovedContext';

const MySwal = withReactContent(Swal);

const Page = styled.div`
  width: 100%;
  height: 700px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #ccc;
  }
`;

function MemberProductCollect() {
  const [deleteList, setDeleteList] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [allSid, setAllSid] = useState([]);
  const { setIsLovedNum } = useContext(IsLovedContext);

  const [loveList, setLoveList] = useState([]);

  const m_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).sid
    : '未登入';

  // 取得商品資料
  const getProducts = async () => {
    try {
      const res = await axios.get(`${LOVE_LIST}?m_sid=${m_sid}`);

      // console.log(res);

      const loved = res.data.rows;
      setLoveList(loved);
      //console.log(loved);
      setAllSid(
        loved.map((v, i) => {
          return v.p_sid;
        })
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const delData = async () => {
    const res = await axios.post(
      `http://localhost:6001/member/deleteproudctlist`,
      deleteList
    );
    setDeleteList([]);
    console.log(res);
    if (res.data.success) {
      MySwal.fire({
        title: <strong>成功刪除</strong>,
        icon: 'success',
      });
      getProducts();
      setDeleteAll(false);
      setIsLovedNum([]);
    }
  };

  console.log(deleteList);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          height:'800px',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          我的商品收藏
        </h2>
        <div className="product-title">
          <div className="checkbox-title">
            <div>
              <input
                type="checkbox"
                checked={deleteAll}
                name=""
                id=""
                onChange={(e) => {
                  setDeleteAll(e.target.checked);
                  if (e.target.checked) {
                    setDeleteList(allSid);
                  } else {
                    setDeleteList([]);
                  }
                }}
              />
              <span>全選</span>
            </div>

            <button className="delete" type="button" onClick={delData}>
              刪除選中收藏
            </button>
          </div>

          <Page>
            <ProductLovedCards
              deleteList={deleteList}
              setDeleteList={setDeleteList}
              loveList={loveList}
            />
          </Page>
        </div>
      </div>
    </>
  );
}

export default MemberProductCollect;
