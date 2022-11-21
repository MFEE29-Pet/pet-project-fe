import SearchBar from './components/SearchBar';
import ButtonBar from './components/ButtonBar';
import ForumDetailTitle from './components/ForumDetailTitle';
import ForumDetailBar from './components/ForumDetailBar';
import ForumMessage from './components/ForumMessage';
import ForumReply from './components/ForumReply';
import Issuing from './components/Issuing';
import UserBar from './components/UserBar';
import './ForumDetail.css';

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
        <div className="user_area">
          <ForumDetailTitle />
          <UserBar />
        </div>
        <ForumDetailBar />
        <div>
          <ForumMessage />
        </div>
        <ForumReply />
        <Issuing />
      </div>
    </>
  );
}

export default ForumDetail;
