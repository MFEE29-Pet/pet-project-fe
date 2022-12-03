import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AuthContext from '../../contexts/AuthContext';

const MySwal = withReactContent(Swal);

function GoogleCallback() {
  const location = useLocation();
  const navigate = useNavigate()

  const { setMyAuth } = useContext(AuthContext);

  const code = new URLSearchParams(location.search).get('code');

  // console.log(code);

  const googleBack = async () => {
    const { data } = await axios.get(
      `http://localhost:6001/member/callback?code=${code}`
    );
    console.log(data);
    if (data.success) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      setMyAuth({ ...data.auth, authorized: true });
      MySwal.fire({
        title: <strong>成功登入</strong>,
        text: '歡迎回來PetBen',
        icon: 'success',
      });
      navigate('/')
    }
  };

  useEffect(() => {
    googleBack();
  }, []);

  //console.log(usp);
  return <div>GoogleCallback</div>;
}

export default GoogleCallback;
