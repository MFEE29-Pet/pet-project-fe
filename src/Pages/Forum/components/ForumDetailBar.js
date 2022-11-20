import React from 'react';
import './ForumDetailBar.css';

function ForumDetailBar() {
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
        <div className="forum_detail_pic">這裡要放狗狗圖片</div>
      </div>
    </>
  );
}

export default ForumDetailBar;
