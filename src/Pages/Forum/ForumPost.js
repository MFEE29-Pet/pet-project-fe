import './ForumPost.css';
import ButtonBar from './components/ButtonBar';
import { useNavigate } from 'react-router';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from 'axios';
import { ADD_MESS } from './my-config';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import EmojiPicker from 'emoji-picker-react';

const buttonText = [{ value: 1, label: '發表', to: '/forum' }];

function ForumPost({ setDoRerender, doRerender }) {
  // const useParams = useParams();
  const navigate = useNavigate();
  const [messMessTitle, setMessTitle] = useState('');
  const [messCategory, setMessCategory] = useState(1);
  const [messContent, setMessContent] = useState('');
  // const [messCreated_at, setMessCreated_at] = useState({
  //   created_at: new Date(),
  // });

  //圖片上傳
  //選擇檔案
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log(selectedFile);
  //是否有檔案被選到
  const [isFilePicked, setIsFilePicked] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsFilePicked(true);
      setSelectedFile(file);
    } else {
      setIsFilePicked(false);
      setSelectedFile(null);
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  console.log(selectedFile);

  const addMessage = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', messMessTitle);
    fd.append('category', messCategory);
    fd.append('content', messContent);
    fd.append('img', selectedFile);
    fd.append('m_sid', 1);
    // fd.append('img', messContent.img);

    console.log(fd);
    const { data } = await axios.post(`${ADD_MESS}`, fd);
    console.log(data.sid);
    navigate(`/forum/detail?sid=${data.sid}`);
    // if (date.success) {
    //   alert('發文成功');
    //   setDoRerender(!doRerender);
    // } else {
    //   console.log('失敗');
    // }
  };
  // const m_sid = JSON.parse(localStorage.getItem('auth')).m_sid;
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
      to: '/forum/post',
      label: '論壇發文',
    },
  ];

  //emoji
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setMessContent((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <>
      <form>
        <div className="post_crumb">
          <Breadcrumb
            routes={forumroutes}
            separator={<BreadcrumbRightArrowIcon />}
          />
        </div>
        <input defaultValue={1} hidden />
        <div className="forum_post_card">
          <div className="forum_post_top">
            <select
              className="forumPostSort"
              id=""
              value={messCategory}
              onChange={(e) => setMessCategory(e.target.value)}
            >
              <option value="">選擇主題</option>
              <option value="A">閒聊版</option>
              <option value="B">發問版</option>
              <option value="C">活動版</option>
              <option value="D">送養版</option>
              <option value="E">領養版</option>
              <option value="F">其他版</option>
            </select>

            <div className="forum_post_title_bar">
              <input
                placeholder="文章標題"
                id="forum_post_title_bar"
                value={messMessTitle}
                onChange={(e) => setMessTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="forum_post_content_bar">
            <textarea
              type="text"
              name="setMessContent"
              placeholder="文章內容"
              id="forum_post_content_bar"
              value={messContent}
              onChange={(e) => setMessContent(e.target.value)}
            />
            {showPicker && (
              <EmojiPicker
                pickerStyle={{ width: '100%' }}
                onEmojiClick={onEmojiClick}
              />
            )}
          </div>

          <div className="forum_post_icon">
            <i
              className="fa-light fa-face-smile"
              id="forum_smile"
              onClick={(e) => setShowPicker((val) => !val)}
            ></i>
            <input
              type="file"
              onChange={changeHandler}
              ref={hiddenFileInput}
              style={{ display: 'none' }}
            />
            <i
              className="fa-light fa-image"
              id="forum_image"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            ></i>
            {/* <input
              type="file"
              accept="image/gif,image/jpeg,image/jpg,image/png"
              multiple
            /> */}
          </div>

          <div className="forum_post_button">
            <button
              className="btn_total bg_main_light_color1"
              id="forum_post_button"
              type="submit"
              onClick={addMessage}
              value={'value'}
              label={'label'}
              // to={to}
              key={'i'}
            >
              留言
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ForumPost;
