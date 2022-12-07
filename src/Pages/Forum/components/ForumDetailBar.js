import './ForumDetailBar.css';
import React from 'react';
import Issuing from './Issuing';
import CollectLikeBar from './CollectLikeBar';

function ForumDetailBar({ details }) {
  const forumpic = `http://localhost:6001/uploads/imgs/${details.img}`;
  return (
    <>
      <div
        className="forum_detail_card"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="forum_detail_top">
          {/* <div className="forumIconBar"> */}
          {/* <i
              className="fa-light fa-message-question text_main_dark_color2"
              id="proIcon"
            ></i> */}
          {/* </div> */}
          <pre className="forum_detail_text">{details.content}</pre>
        </div>

        <div className="forum_detail_pic" style={{ width: '1000px' }}>
          <img src={forumpic} style={{ width: '100%' }} />
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
