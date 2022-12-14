import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router';
import './ForumReply.css';
import './ForumReplyOld.css';
import '../components/EvaluateComponents/EvaluateComponent.css';
import '../components/InputComponents/InputComponent.css';
import { SEND_REPLY, MY_HOST } from '../my-config';
import AuthContext from '../../../contexts/AuthContext';
import { useEffect } from 'react';

const buttonReply = [{ value: 1, label: '發表', to: '/forum' }];

function ForumReplyOld({
  forumComment,
  reRenderForum,
  setReRenderForum,
  getDetails,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const sid = Number(new URLSearchParams(location.search).get('sid'));
  // console.log(sid);
  const [replyMessage, setReplyMessage] = useState('');
  const { myAuth } = useContext(AuthContext);

  const [show, setShow] = useState(true);
  // const [content, setContent] = useState('');
  // const [forumReplyArt, setForumReplyArt] = useState({
  //   a_sid: '',
  // });
  // const [forumReplyMember, setForumReplyMember] = useState({
  //   m_sid: 1,
  // });
  // const [forumReplyMemberContent, setForumReplyMemberContent] = useState({
  //   r_content: '',
  // });

  //從localStorage拿會員sid
  const memberID = JSON.parse(localStorage.getItem('auth'));
  // console.log(memberID);

  const addReply = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('a_sid', sid);
    fd.append('m_sid', memberID.sid);
    fd.append('r_content', replyMessage);

    console.log('a_sid', sid);
    console.log('m_sid', memberID.sid);
    console.log('r_content', replyMessage);

    const { data } = await axios.post(`${SEND_REPLY}`, fd);

    if (data.success) {
      setReplyMessage('');
      getDetails();
    }
    console.log(data);
  };
  useEffect(() => {
    if (!myAuth.sid) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  return (
    <>
      <div className="evaluateBox">
        <div className="titleText">所有回覆</div>

        <div className="evaluateItem">
          {forumComment.map((e, i) => {
            return (
              <div className="reply_card" key={i}>
                <img
                  className="headImg"
                  src={`http://localhost:6001/uploads/imgs/${e.member_photo}`}
                  alt=""
                />
                <div className="senderProfile">
                  <div className="nickNameBox">
                    <div className="nickName">{e.name}</div>
                    <div className="sendTime">{e.created_at}</div>
                    <div className="evaluate">{e.r_content}</div>
                    <div>{e.a_reply}</div>
                  </div>
                </div>
              </div>
            );
          })}

          {show ? (
            <button
              className="bg_main_light_color1"
              style={{
                width: '200px',
                alignSelf: 'center',
                padding: '5px 10px',
                borderRadius: '17px',
                color: '#fff',
                border: 'none',
                marginBottom: '20px',
                fontSize: '20px',
              }}
              onClick={() => {
                navigate('/member/memberLogIn');
              }}
            >
              登入後回覆
            </button>
          ) : (
            <div className="sendEvaluate">
              <img
                className="headImg"
                src={`http://localhost:6001/uploads/imgs/${myAuth.member_photo}`}
                alt=""
              />
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
                  onClick={addReply}
                >
                  留言
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ForumReplyOld;
