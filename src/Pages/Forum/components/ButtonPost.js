import React, { useContext } from 'react';
import './ButtonPost.css';
import AuthContext from '../../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function ButtonPost() {
  const navigate = useNavigate();
  const { myAuth } = useContext(AuthContext);

  return (
    <>
      <button
        className="btn_post bg_main_light_color1"
        onClick={() => {
          if (!myAuth.sid) {
            Swal.fire({
              title: '<strong>請先登入會員</strong>',
              icon: 'info',
            });
            navigate('/member/memberLogIn');
          }
        }}
      >
        發表文章
      </button>
    </>
  );
}

export default ButtonPost;
