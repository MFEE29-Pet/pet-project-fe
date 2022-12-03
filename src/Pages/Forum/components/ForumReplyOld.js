import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router';
import './ForumReply.css';
import '../components/EvaluateComponents/EvaluateComponent.css';
import '../components/InputComponents/InputComponent.css';
import { GET_DETAILS, MY_HOST } from '../my-config';

const buttonReply = [{ value: 1, label: '發表', to: '/forum' }];

function ForumReplyOld({ forumComment, reRenderForum, setReRenderForum }) {
  const location = useLocation();
  const navigate = useNavigate();
  const sid = new URLSearchParams(location.search).get('sid');
  // console.log(sid);
  const [replyMessage, setReplyMessage] = useState('');
  const [content, setContent] = useState('');
  const [forumReplyArt, setForumReplyArt] = useState({
    a_sid: '',
  });
  const [forumReplyMember, setForumReplyMember] = useState({
    m_sid: 1,
  });
  const [forumReplyMemberContent, setForumReplyMemberContent] = useState({
    r_content: '',
  });

  const addReply = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('a_sid', forumReplyArt.a_sid);
    fd.append('m_sid', forumReplyMember.m_sid);
    fd.append('r_content', forumReplyMember.r_content);
    fd.append('m_sid', 1);

    console.log(forumComment);
    console.log(fd);

    const { data } = await axios.post(`${GET_DETAILS}`, fd);
    console.log(data.sid);
    navigate(`/forum/detail?sid=${data.sid}`);
  };
  const replyPost = async () => {
    const { data } = await axios.get(
      `${MY_HOST}/allReply?message=${replyMessage}&sid=${sid}`
    );
    console.log(data);
    if (data.affectedRows) {
      setReplyMessage('');
      setReRenderForum(!reRenderForum);
    }
  };

  return (
    <>
      <div className="evaluateBox">
        <div className="titleText">所有回覆</div>

        <div className="evaluateItem">
          {forumComment.map((e, i) => {
            return (
              <>
                <img className="headImg" src="" alt="" />
                <div className="senderProfile">
                  <div className="nickNameBox">
                    <div className="nickName">{e.m_sid}</div>
                    <div className="sendTime">{e.created_at}</div>
                  </div>
                  <div className="evaluate">{e.r_content}</div>
                  <div>{e.a_reply}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="sendEvaluate">
        <img className="headImg" src="" alt="" />
        <div className="inputBox">
          <textarea
            className="inputText"
            placeholder="請輸入回覆"
            // value={this.state.inputMess}
            // onChange={(e) => this.getEvaluate(e)}
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
          <button
            className="btn_post bg_main_light_color1"
            id="send_reply"
            // onClick={() => this.sendSubmit()}
            onClick={replyPost}
          >
            發文
          </button>
        </div>
      </div>
    </>
  );
}

export default ForumReplyOld;
