import React from 'react';
import './CollectLikeBar.css';
import CollectBar from './CollectBar';
import LikeBar from './LikeBar';

function CollectLikeBar({ a_sid }) {
  return (
    <>
      <div>
        <CollectBar a_sid={a_sid} />
        <LikeBar />
      </div>
    </>
  );
}

export default CollectLikeBar;
