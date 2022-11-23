import React, { useState } from 'react';
import './LikeBar.css';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const onLikeButtonClick = () => {
    if (isLike !== true) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  return (
    <>
      <button
        className={
          isLike === false ? 'forum_unlike_button' : 'forum_like_button'
        }
        onClick={onLikeButtonClick}
      >
        喜歡
        <i className="fa-light fa-thumbs-up" id="forum_like"></i>
      </button>
    </>
  );
};

export default function CollectBar() {
  return <LikeButton />;
}
