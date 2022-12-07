import React from 'react';
// import { useNavigate } from 'react-router';
import './ButtonPost.css';
import { Link } from 'react-router-dom';

function ButtonPost() {
  // const navigate = useNavigate();
  return (
    <>
      <Link to={'/forum/post'}>
        <button
          className="btn_post bg_main_light_color1"
          // onClick={() => navigate('post')}
        >
          發表文章
        </button>
      </Link>
    </>
  );
}

export default ButtonPost;
