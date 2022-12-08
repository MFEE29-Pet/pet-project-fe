import axios from 'axios';
import CollectLikeBar from './CollectLikeBar';
import { GET_ALL_ARTICLE } from '../my-config';
import { useEffect, useState } from 'react';
import './ForumListBar.css';
import { useNavigate } from 'react-router';

function ForumListBar() {
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
  const [collection, setCollection] = useState([]);
  const [collectionNum, setCollectionNum] = useState([]);
  const m_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).sid
    : '未登入';
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

  const getArticles = async () => {
    const res = await axios.get(`${GET_ALL_ARTICLE}`);

    // console.log(res.data.rows);
    const article = res.data.rows;
    const tag = res.data.tags;
    const tagsIntoArticles = article.map((e, i) => {
      return {
        ...e,
        tag: tag.filter((v, i2) => {
          return v.a_sid === e.article_sid;
        }),
      };
    });

    setArticles(tagsIntoArticles);
    setTags(tag);
    // console.log({ articles, tags });
  };

  useEffect(() => {
    getArticles();
    getCollection();
  }, []);
  return (
    <>
      {articles.map((e, i) => {
        return (
          <div
            className="forumBar"
            key={e.article_sid}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="forumIconBar"
              onClick={() => {
                navigate(`detail?sid=${e.article_sid}`);
              }}
            >
              {e.category === 'A' ? (
                <i
                  className="fa-light fa-comment-dots text_main_dark_color2"
                  id="forum_big_Icon"
                >
                  <i className="text_main_dark_color2" id="forum_big_Icon_text">
                    【閒聊】
                  </i>
                </i>
              ) : (
                <></>
              )}
              {e.category === 'B' ? (
                <i
                  className="fa-light fa-message-question text_main_dark_color2"
                  id="forum_big_Icon"
                >
                  <i className="text_main_dark_color2" id="forum_big_Icon_text">
                    【發問】
                  </i>
                </i>
              ) : (
                <></>
              )}
              {e.category === 'C' ? (
                <i
                  className="fa-light fa-party-horn text_main_dark_color2"
                  id="forum_big_Icon"
                >
                  <i className="text_main_dark_color2" id="forum_big_Icon_text">
                    【活動】
                  </i>
                </i>
              ) : (
                <></>
              )}
              {e.category === 'D' ? (
                <i
                  className="fa-light fa-hand-holding-heart text_main_dark_color2"
                  id="forum_big_Icon"
                >
                  <i className="text_main_dark_color2" id="forum_big_Icon_text">
                    【送養】
                  </i>
                </i>
              ) : (
                <></>
              )}
              {e.category === 'E' ? (
                <i
                  className="fa-light fa-house-chimney-heart text_main_dark_color2"
                  id="forum_big_Icon"
                >
                  {' '}
                  <i className="text_main_dark_color2" id="forum_big_Icon_text">
                    【領養】
                  </i>
                </i>
              ) : (
                <></>
              )}
              {e.category === 'F' ? (
                <i
                  className="fa-light fa-icons text_main_dark_color2"
                  id="forum_big_Icon"
                >
                  {' '}
                  <i className="text_main_dark_color2" id="forum_big_Icon_text">
                    【其他】
                  </i>
                </i>
              ) : (
                <></>
              )}
            </div>

            <div className="forumTitleBar">
              <p
                className="text_main_dark_color2"
                id="forumTitle"
                onClick={() => {
                  navigate(`detail?sid=${e.article_sid}`);
                }}
              >
                {e.title}
              </p>
              <p className="forumTag">
                {e.tag.map((e2, i2) => {
                  return e2.tag_name;
                })}
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
                <i className="fa-light fa-bookmark" id="forum_Collect"></i>
              </button>
            </div>
            <div className="forumUserBar">{e.user}</div>
          </div>
        );
      })}
    </>
  );
}

export default ForumListBar;
