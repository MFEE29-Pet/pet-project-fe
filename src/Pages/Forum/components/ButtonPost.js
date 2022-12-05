import React from 'react';
import { useNavigate } from 'react-router';
import './ButtonPost.css';

function ButtonPost() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn_post bg_main_light_color1"
        onClick={() => navigate('post')}
      >
        發表文章
      </button>
    </>
  );
}

export default ButtonPost;
