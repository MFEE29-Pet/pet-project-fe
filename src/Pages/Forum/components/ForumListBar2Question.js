import axios from 'axios';
import CollectLikeBar from './CollectLikeBar';
import { GET_ALL_ARTICLE } from '../my-config';
import { useEffect, useState } from 'react';
import './ForumListBar.css';
import { useLocation, useNavigate } from 'react-router';

function ForumListBar2Question({ talkListData }) {
  const [articles, setArticles] = useState([
    {
      article_sid: 0,
      category: '',
      content: '',
      create_at: '',
      img: '',
      m_sid: 0,
      title: '',
      tag: [],
    },
  ]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [collection, setCollection] = useState([]);
  const [collectionNum, setCollectionNum] = useState([]);

  const m_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).sid
    : '未登入';

  const getArticles = async () => {
    const res = await axios.get(`${GET_ALL_ARTICLE}`);

    const article = res.data.rows;

    const A = article.filter((e, i) => {
      const { category } = e;
      return category === 'B';
    });

    // setCollection(article);
    // const numbers = collection.map((e, i) => e.a_sid);
    // setCollectionNum(numbers);

    console.log(A);
    setArticles(A);
  };

  const getCollection = async () => {
    if (m_sid === '未登入') {
      // console.log('未登入，無法取得收藏列表');
      return;
    }
    const res = await axios.get(
      `http://localhost:6001/forum/collection?m_sid=${m_sid}`
    );
    console.log(res);
    const list = res.data.rows;

    setCollection(list);
    const numbers = collection.map((e, i) => e.a_sid);
    setCollectionNum(numbers);
    // console.log(collectionNum);
  };

  console.log(articles);

  useEffect(() => {
    getArticles();
    getCollection();
  }, []);

  return (
    <>
      {articles.map((e, i) => {
        const { title, category } = e;
        return (
          <div
            className="forumBar"
            key={e.article_sid}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="forumIconBar"
              onClick={() => {
                navigate(`/forum/detail?sid=${e.article_sid}`);
              }}
            >
              <i
                className="fa-light fa-message-question text_main_dark_color2"
                id="forum_big_Icon"
              >
                <i className="text_main_dark_color2" id="forum_big_Icon_text">
                  【發問】
                </i>
              </i>
            </div>
            <div className="forumTitleBar">
              <p
                className="text_main_dark_color2"
                id="forumTitle"
                onClick={() => {
                  navigate(`/forum/detail?sid=${e.article_sid}`);
                }}
              >
                {e.title}
              </p>
              <p className="forumTag">
                {!!e.tag ? (
                  e.tag.map((e2, i2) => {
                    return e2.tag_name;
                  })
                ) : (
                  <></>
                )}
              </p>
            </div>
            {/* 喜歡跟讚數 */}
            <div className="forum_list_like_bar" style={{ cursor: 'pointer' }}>
              <button
                className={`${
                  collection.findIndex((v) => v.a_sid === e.article_sid) === -1
                    ? 'forum_unCollect_button'
                    : 'forum_Collect_button'
                }`}
              >
                收藏
                <i className={`${
                  collection.findIndex((v) => v.a_sid === e.article_sid) === -1
                    ? 'fa-regular fa-bookmark'
                    : 'fa-solid fa-bookmark'
                }`} id="forum_Collect"></i>
              </button>
            </div>
            <div className="forumUserBar">{e.user}</div>
          </div>
        );
      })}
    </>
  );
}

export default ForumListBar2Question;
