import axios from 'axios';
import CollectLikeBar from './CollectLikeBar';
import { GET_ALL_ARTICLE } from '../my-config';
import { useEffect, useState } from 'react';
import './ForumListBar.css';
import { useNavigate } from 'react-router';

function ForumListBar1Talk({ talkListData }) {
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

  const getArticles = async () => {
    const res = await axios.get(`${GET_ALL_ARTICLE}`);

    // console.log(res.data.rows);
    const article = res.data.rows;
    // const tag = res.data.tags;
    // const tagsIntoArticles = article.map((e, i) => {
    //   return {
    //     ...e,
    //     tag: tag.filter((v, i2) => {
    //       return v.a_sid === e.article_sid;
    //     }),
    //   };
    // });

    const A = article.filter((e, i) => {
      const { category } = e;
      return category === 'A';
    });

    console.log(A);
    setArticles(A);
    // setTags(tag);
    // console.log({ articles, tags });
  };

  console.log(articles);

  useEffect(() => {
    getArticles();
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
                className="fa-light fa-comment-dots text_main_dark_color2"
                id="forum_big_Icon"
              >
                <i className="text_main_dark_color2" id="forum_big_Icon_text">
                  【閒聊】
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
                {/* {e.tag.map((e2, i2) => {
                  return e2.tag_name;
                })} */}
              </p>
            </div>
            {/* 喜歡跟讚數 */}
            <div className="forum_list_like_bar">
              <CollectLikeBar />
            </div>
            <div className="forumUserBar">{e.user}</div>
          </div>
        );
      })}
      {/* {articles.map((e, i) => {
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
                ></i>
              ) : (
                <></>
              )}
            </div> */}

      {/* <div className="forumTitleBar">
              <p
                className="forumTitle"
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
            </div> */}
    </>
  );
}

export default ForumListBar1Talk;
