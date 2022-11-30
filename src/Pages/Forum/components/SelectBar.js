import React from 'react';
import './SelectBar.css';
import { Link } from 'react-router-dom';

function SelectBar({ label, value, to }) {
  return (
    <>
      <select className="forumSort" id={value}>
        {label}
        {/* <option value="">文章排序</option>
          <option value="forumbydate">依日期排序</option>
          <option value="forumbypop">依人氣排序</option> */}
      </select>
    </>
  );
}

export default SelectBar;
