import React from 'react';
import './ForumDetailTitle.css';

function ForumDetailTitle({ title }) {
  // console.log(title);
  return (
    <>
      <div className="title_area">
        <div className="title_text">
          <i>{title}</i>
        </div>
      </div>
    </>
  );
}

export default ForumDetailTitle;
