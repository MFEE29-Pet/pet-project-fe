import React from 'react';
import './UserBar.css';

function UserBar({ name }) {
  return (
    <>
      <div className="forum_user_wrap">
        <div className="forum_user_pic"></div>
        <div className="forum_user_name">{name}</div>
      </div>
    </>
  );
}

export default UserBar;
