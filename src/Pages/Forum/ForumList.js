import SearchBar from './components/SearchBar';
import ButtonPost from './components/ButtonPost';
import SelectBar from './components/SelectBar';
import ButtonBar from './components/ButtonBar';
import ForumListBar from './components/ForumListBar';
import './ForumList.css';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';

const buttonText = [
  { value: 1, label: '綜合', to: '/forum' },
  { value: 2, label: '閒聊', to: '/forum/talk' },
  { value: 3, label: '發問', to: '/forum/question' },
  { value: 4, label: '活動', to: '/forum/activity' },
  { value: 5, label: '送養', to: '/forum/give' },
  { value: 6, label: '領養', to: '/forum/adoption' },
  { value: 7, label: '其他', to: '/forum/other' },
];

const forumroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/forum',
    label: '寵物論壇',
  },
  {
    to: '/forum',
    label: '綜合版',
  },
];

function ForumList() {
  return (
    <>
      <div className="forum_list_wrap">
        <Breadcrumb
          routes={forumroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
        <div className="forum_search_select" style={{ marginTop: '20px' }}>
          <SearchBar />
          <div className="forum_btn_post_select">
            <ButtonPost />
            {/* <SelectBar /> */}
          </div>
        </div>

        <div className="forum_list_button_wrap">
          {buttonText.map((e, i) => {
            const { label, value, to } = e;
            return <ButtonBar value={value} label={label} to={to} key={i} />;
          })}
        </div>

        <ForumListBar />
      </div>
    </>
  );
}

export default ForumList;
