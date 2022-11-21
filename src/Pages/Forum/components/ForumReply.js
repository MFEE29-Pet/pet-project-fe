import React from 'react';
import './ForumReply.css';
import ButtonBar from './ButtonBar';
import UserBar from './UserBar';
function ForumReply() {
  return (
    <>
      <div className="forum_reply_card">
        <div className="forum_relay_user">
          <UserBar />
        </div>
        <div className="forum_right_area">
          <div className="forum_reply_text"></div>
          <div className="forum_ButtonBar_wrap">
            <ButtonBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForumReply;
