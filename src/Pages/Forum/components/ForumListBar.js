import React from 'react';
import './ForumListBar.css';

function ForumListBar() {
  return (
    <>
      <div className="forumBar">
        <div className="forumIconBar">
          <i
            className="fa-light fa-message-question text_main_dark_color2"
            id="proIcon"
          ></i>
        </div>

        <div className="forumTitleBar">
          <p className="forumTitle">貓用品/玩具如何消毒？</p>
          <p className="forumTag">#貓 #狗 #玩具</p>
        </div>

        <div className="forumUserBar">User</div>
      </div>
    </>
  );
}

export default ForumListBar;
