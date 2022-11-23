import React from 'react';
import './ForumMessage.css';
import UserBar from './UserBar';
import Issuing from './Issuing';
import CollectLikeBar from './CollectLikeBar';
function ForumMessage() {
  return (
    <>
      <div className="forum_message_card">
        <div className="forum_message_top">
          <div className="forum_message_user">
            <UserBar />
          </div>
          <div className="forum_message_text">
            我都直接丟入洗衣機裡清洗。洗完記得脫水，如果擔心在脫水過程中娃娃會壞掉，可以套一個洗衣袋，之後放置通風處2-3天就可以了，還沒遇過沒乾的情況！
          </div>
        </div>
        <div className="forum_btm_area">
          <Issuing />
          <CollectLikeBar />
        </div>
      </div>
    </>
  );
}

export default ForumMessage;
