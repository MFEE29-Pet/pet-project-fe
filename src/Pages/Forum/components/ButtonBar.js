import React from 'react';
import './ButtonBar.css';
import { Link } from 'react-router-dom';

function ButtonBar({ label, value, to }) {
  return (
    <>
      {/* <div className="btn_area"> */}
      <Link to={to}>
        <button className="btn_total bg_main_light_color1" id={value}>
          {label}
        </button>
      </Link>
    </>
  );
}

export default ButtonBar;
