import SearchBar from './components/SearchBar';
import ButtonPost from './components/ButtonPost';
import SelectBar from './components/SelectBar';
import ButtonBar from './components/ButtonBar';
import ForumListBar3Activity from './components/ForumListBar3Activity';
import './ForumList.css';

const buttonText = [
  { value: 1, label: '綜合', to: '/forum' },
  { value: 2, label: '閒聊', to: '/forum/talk' },
  { value: 3, label: '發問', to: '/forum/question' },
  { value: 4, label: '活動', to: '/forum/activity' },
  { value: 5, label: '送養', to: '/forum/give' },
  { value: 6, label: '領養', to: '/forum/adoption' },
  { value: 7, label: '其他', to: '/forum/other' },
];

function ForumList3Activity() {
  return (
    <>
      <div className="forum_list_wrap">
        <div className="forum_search_select">
          <SearchBar />
          <div className="forum_btn_post_select">
            <ButtonPost />
            <SelectBar />
          </div>
        </div>

        <div className="forum_list_button_wrap">
          {buttonText.map((e, i) => {
            const { label, value, to } = e;
            return <ButtonBar value={value} label={label} to={to} key={i} />;
          })}
        </div>

        <ForumListBar3Activity />
      </div>
    </>
  );
}

export default ForumList3Activity;
