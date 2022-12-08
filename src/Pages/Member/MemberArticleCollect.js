import './Member.css';
import ArticleLovedCards from './components/ArticleLovedCards';
import { useState } from 'react';
import axios from 'axios';
import { LOVE_LIST2 } from './my-config';
import { useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

function MemberArticleCollect() {
  const [deleteList, setDeleteList] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [loveList, setLoveList] = useState([]);
  const [allSid, setAllSid] = useState([]);

  const m_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).sid
    : '未登入';

  //取得文章資料
  const getArticle = async () => {
    try {
      const res = await axios.get(`${LOVE_LIST2}?m_sid=${m_sid}`);

      const loved = res.data.rows;

      const m_data = loved.map((e, i) => {
        const { created_at } = e;
        return {
          ...loved[i],
          created_at: dayjs(created_at).format('YYYY-MM-DD'),
        };
      });
      setAllSid(
        m_data.map((v,i)=>{
          return v.a_sid
        })
      )
      setLoveList(m_data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const delData = async () => {
    const res = await axios.post(
      `http://localhost:6001/member/deletearticlelist`,
      deleteList
    );
    setDeleteList([]);
    console.log(res);
    if (res.data.success) {
      MySwal.fire({
        title: <strong>成功刪除</strong>,
        icon: 'success',
      });
      getArticle();
      setDeleteAll(false)
    }
  };
  return (
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
        我的文章收藏
      </h2>
      <div className="articleWrap">
        <div className="article-title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={deleteAll}
              name=""
              id=""
              style={{ marginRight: '10px' }}
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
      </div>
      <Page>
        <ArticleLovedCards
          loveList={loveList}
          deleteList={deleteList}
          setDeleteList={setDeleteList}
        />
      </Page>
    </div>
  );
}

export default MemberArticleCollect;
