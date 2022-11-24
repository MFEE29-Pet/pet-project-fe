import React from 'react';
import './CollectLikeBar.css';
import CollectBar from './CollectBar';
import LikeBar from './LikeBar';

function CollectLikeBar() {
  return (
    <>
      <div>
        <CollectBar />
        <LikeBar />
      </div>
    </>
  );
}

export default CollectLikeBar;
