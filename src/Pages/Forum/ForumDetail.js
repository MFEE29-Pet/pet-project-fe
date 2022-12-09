import './ForumDetail.css';
import SearchBar from './components/SearchBar';
import ButtonBar from './components/ButtonBar';
import ForumDetailTitle from './components/ForumDetailTitle';
import ForumDetailBar from './components/ForumDetailBar';
import ForumMessage from './components/ForumMessage';
import ForumReply from './components/ForumReply';
import UserBar from './components/UserBar';
import axios from 'axios';
import { GET_DETAILS } from './my-config';
import { useLocation } from 'react-router';
import { useEffect, useState, useNavigate } from 'react';
import dayjs from 'dayjs';
// import axios from 'axios';

const buttonText = [
  { value: 1, label: '綜合', to: '/forum' },
  { value: 2, label: '閒聊', to: '/forum/talk' },
  { value: 3, label: '發問', to: '/forum/question' },
  { value: 4, label: '活動', to: '/forum/activity' },
  { value: 5, label: '送養', to: '/forum/give' },
  { value: 6, label: '領養', to: '/forum/adoption' },
  { value: 7, label: '其他', to: '/forum/other' },
];

function ForumDetail() {
  const [details, setDetails] = useState([
    {
      name: '',
    },
  ]);
  const [forumComment, setForumComment] = useState([]);
  const [reRenderForum, setReRenderForum] = useState(false);
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

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');

  const getDetails = async () => {
    const res = await axios.get(`${GET_DETAILS}?sid=${sid}`);

    // console.log(res);
    const detail = res.data.details[0];
    const new_detail = detail.map((e, i) => {
      const { created_at } = e;
      return {
        ...detail[i],
        created_at: dayjs(created_at).format('YYYY-MM-DD HH:mm'),
      };
    });

    const forum_comment = res.data.forum_comment;

    const new_forum_comment = forum_comment.map((e, i) => {
      const { created_at } = e;
      return {
        ...forum_comment[i],
        created_at: dayjs(created_at).format('YYYY-MM-DD'),
      };
    });
    setDetails(new_detail);
    setForumComment(new_forum_comment);
    // console.log(detail[0]);
  };
  //console.log(details);

  useEffect(() => {
    getDetails();
  }, [location, reRenderForum]);

  return (
    <>
      <div className="forum_detail_wrap">
        <div className="p_space" style={{ height: '100px' }}></div>
        <div className="forum_search_bar">
          <SearchBar />
        </div>

        <div className="forum_detail_button_wrap">
          {buttonText.map((e, i) => {
            const { label, value, to } = e;
            {
              /* console.log(e); */
            }
            return <ButtonBar value={value} label={label} to={to} key={i} />;
          })}
        </div>
        <div className="forum_detail_title_area">
          <div className="forum_detail_page_icon">
            {details[0].category === 'A' ? (
              <i
                className="fa-light fa-comment-dots text_main_dark_color2"
                id="forum_detail_Icon"
              ></i>
            ) : (
              <></>
            )}
            {details[0].category === 'B' ? (
              <i
                className="fa-light fa-message-question text_main_dark_color2"
                id="forum_detail_Icon"
              ></i>
            ) : (
              <></>
            )}
            {details[0].category === 'C' ? (
              <i
                className="fa-light fa-party-horn text_main_dark_color2"
                id="forum_detail_Icon"
              ></i>
            ) : (
              <></>
            )}
            {details[0].category === 'D' ? (
              <i
                className="fa-light fa-hand-holding-heart text_main_dark_color2"
                id="forum_detail_Icon"
              ></i>
            ) : (
              <></>
            )}
            {details[0].category === 'E' ? (
              <i
                className="fa-light fa-house-chimney-heart text_main_dark_color2"
                id="forum_detail_Icon"
              ></i>
            ) : (
              <></>
            )}
            {details[0].category === 'F' ? (
              <i
                className="fa-light fa-icons text_main_dark_color2 text_main_dark_color2"
                id="forum_detail_Icon"
              ></i>
            ) : (
              <></>
            )}
            <ForumDetailTitle title={details[0] ? details[0].title : ''} />{' '}
          </div>
          {/* <UserBar name={details[0].name} /> */}
        </div>
        <div className="forum_article_area">
          <ForumDetailBar details={details[0] ? details[0] : ''} />
        </div>
        {/* <div>
          <ForumMessage />
        </div> */}
        <ForumReply
          forumComment={forumComment}
          reRenderForum={reRenderForum}
          setReRenderForum={setReRenderForum}
          getDetails={getDetails}
        />
      </div>
    </>
  );
}

export default ForumDetail;
