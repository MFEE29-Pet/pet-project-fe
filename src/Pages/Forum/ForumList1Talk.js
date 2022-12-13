import SearchBar from './components/SearchBar';
import ButtonPost from './components/ButtonPost';
import SelectBar from './components/SelectBar';
import ButtonBar from './components/ButtonBar';
import ForumListBar1Talk from './components/ForumListBar1Talk';
import './ForumList.css';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';

const MySwal = withReactContent(Swal);

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
    to: '/forum/talk',
    label: '閒聊版',
  },
];

function ForumList1Talk() {
  const navigate = useNavigate();
  const { myAuth } = useContext(AuthContext);
  return (
    <>
      <div className="p_space" style={{ height: '100px' }}></div>
      <div className="forum_list_wrap">
        <Breadcrumb
          routes={forumroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
        <div className="forum_search_select" style={{ marginTop: '20px' }}>
          <SearchBar />
          <div className="forum_btn_post_select">
            <ButtonPost />
            <button
              className="border_main_light_color1"
              id="btnGoCollection"
              onClick={() => {
                if (!myAuth.sid) {
                  Swal.fire({
                    title: '<strong>請先登入會員</strong>',
                    icon: 'info',
                  });
                  navigate('/member/memberLogIn');
                }
              }}
            >
              前往收藏
            </button>
            {/* <SelectBar /> */}
          </div>
        </div>

        <div className="forum_list_button_wrap">
          {buttonText.map((e, i) => {
            const { label, value, to } = e;
            return <ButtonBar value={value} label={label} to={to} key={i} />;
          })}
        </div>

        <ForumListBar1Talk />
      </div>
    </>
  );
}

export default ForumList1Talk;
