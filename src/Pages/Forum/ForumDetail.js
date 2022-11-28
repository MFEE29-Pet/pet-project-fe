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
import { useEffect, useState } from 'react';

const buttonText = [
  { value: 1, label: '綜合', to: '/complex' },
  { value: 2, label: '發問', to: '/question' },
  { value: 3, label: '經驗', to: '/experience' },
  { value: 4, label: '活動', to: '/activity' },
  { value: 5, label: '送養', to: '/give' },
  { value: 6, label: '領養', to: '/adoption' },
  { value: 7, label: '其他', to: '/other' },
];

function ForumDetail() {
  const [details, setDetails] = useState([]);

  // 取得 queryString
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let sid = +params.get('sid');

  const getDetails = async () => {
    const res = await axios.get(`${GET_DETAILS}?sid=${sid}`);

    // console.log(res);
    const detail = res.data.details;

    setDetails(detail[0]);
    // console.log(detail[0]);
  };

  useEffect(() => {
    getDetails();
  }, [location]);

  return (
    <>
      <div className="forum_detail_wrap">
        <div className="forum_search_bar">
          <SearchBar />
        </div>

        <div className="forum_detail_button_wrap">
          {buttonText.map((e, i) => {
            const { label, value, to } = e;
            console.log(e);
            return <ButtonBar value={value} label={label} to={to} key={i} />;
          })}
        </div>
        <div className="forum_detail_title_area">
          <ForumDetailTitle title={details[0] ? details[0].title : ''} />
          <UserBar />
        </div>
        <div className="forum_article_area">
          <ForumDetailBar details={details[0] ? details[0] : ''} />
        </div>
        <div>
          <ForumMessage />
        </div>
        <ForumReply />
      </div>
    </>
  );
}

export default ForumDetail;
