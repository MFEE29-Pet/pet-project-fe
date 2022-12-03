import './ForumPost.css';
import ButtonBar from './components/ButtonBar';
import { useNavigate } from 'react-router';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ADD_MESS } from './my-config';

const buttonText = [{ value: 1, label: '發表', to: '/forum' }];

function ForumPost({ setDoRerender, doRerender }) {
  // const useParams = useParams();
  const navigate = useNavigate();
  const [messMessTitle, setMessTitle] = useState({
    title: '',
  });
  const [messCategory, setMessCategory] = useState({
    category: 1,
  });
  const [messContent, setMessContent] = useState({
    content: '',
  });
  const [messM_sid, setMessM_sid] = useState({
    m_sid: 1,
  });
  // const [messCreated_at, setMessCreated_at] = useState({
  //   created_at: new Date(),
  // });

  const addMessage = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', messMessTitle.title);
    fd.append('category', messCategory.category);
    fd.append('content', messContent.content);
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

  return (
    <>
      <form>
        <input defaultValue={1} hidden />
        <div className="forum_post_card">
          <div className="forum_post_top">
            <select
              className="forum_post_sort"
              id=""
              value={messCategory.setMessCategory}
              onChange={(e) => setMessCategory({ category: e.target.value })}
            >
              <option value="">選擇主題</option>
              <option value="A">綜合版</option>
              <option value="B">發問版</option>
              <option value="C">經驗版</option>
              <option value="D">活動版</option>
              <option value="E">送養版</option>
              <option value="F">領養版</option>
              <option value="G">其他版</option>
            </select>

            <div className="forum_post_title_bar">
              <input
                placeholder="文章標題"
                id="forum_post_title_bar"
                value={messMessTitle.setMessTitle}
                onChange={(e) => setMessTitle({ title: e.target.value })}
              />
            </div>
          </div>

          <div className="forum_post_content_bar">
            <textarea
              type="text"
              name="setMessContent"
              placeholder="文章內容"
              id="forum_post_content_bar"
              value={messContent.content}
              onChange={(e) => setMessContent({ content: e.target.value })}
            />
          </div>

          <div className="forum_post_icon">
            <i className="fa-light fa-face-smile" id="forum_smile"></i>
            <i className="fa-light fa-image" id="forum_image"></i>
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
              發表
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ForumPost;
