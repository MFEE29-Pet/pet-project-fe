import './ForumDetailBar.css';
import React from 'react';
import Issuing from './Issuing';
import CollectLikeBar from './CollectLikeBar';

function ForumDetailBar({ details }) {
  const forumpic = '/images/toys_1.png';
  return (
    <>
      <div className="forum_detail_card">
        <div className="forum_detail_top">
          <div className="forumIconBar">
            <i
              className="fa-light fa-message-question text_main_dark_color2"
              id="proIcon"
            ></i>
          </div>
          <div className="forum_detail_text">{details.content}</div>
        </div>

        <div className="forum_detail_pic">
          <img src={forumpic} />
        </div>
        <div className="forum_btm_area">
          <Issuing date={details.created_at} />
          <CollectLikeBar />
        </div>
      </div>
    </>
  );
}

export default ForumDetailBar;
