import './ForumDetailBar.css';
import React from 'react';
import Issuing from './Issuing';
import CollectLikeBar from './CollectLikeBar';

function ForumDetailBar() {
  const dogpic = '/images/toys_1.png';
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
          <div className="forum_detail_text">
            想請問狗狗玩的絨毛娃娃應該如何消毒較好？擔心口水殘留會有細菌滋生，擔心丟洗衣機裡面的填充棉花會乾不了。原本想直接噴酒精，但不確定是否妥當，所以上來問問大家。
          </div>
        </div>

        <div className="forum_detail_pic">
          <img src={dogpic} />
        </div>
        <div className="forum_btm_area">
          <Issuing />
          <CollectLikeBar />
        </div>
      </div>
    </>
  );
}

export default ForumDetailBar;
