import React, { useState } from 'react';
import './CollectBar.css';

const CollectButton = () => {
  const [isLike, setIsCollect] = useState(false);
  const onCollectButtonClick = () => {
    if (isLike !== true) {
      setIsCollect(true);
    } else {
      setIsCollect(false);
    }
  };

  return (
    <>
      <button
        className={
          isLike === false ? 'forum_unCollect_button' : 'forum_Collect_button'
        }
        onClick={onCollectButtonClick}
      >
        收藏
        <i class="fa-light fa-bookmark" id="forum_Collect"></i>
      </button>
    </>
  );
};

export default function CollectBar() {
  return <CollectButton />;
}
