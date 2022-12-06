import React, { useEffect,useContext } from 'react';
import { useLocation ,useNavigate} from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AuthContext from '../../contexts/AuthContext';

const MySwal = withReactContent(Swal);

function LineCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  const code = new URLSearchParams(location.search).get('code');
  const { setMyAuth } = useContext(AuthContext);

  const lineBack = async () => {
    const { data } = await axios.get(
      `http://localhost:6001/member/linecallback?code=${code}`
    );

    console.log(data);

    if (data.registersuccess) {
      MySwal.fire({
        title: <strong>註冊成功</strong>,
        text: '歡迎回來PetBen',
        icon: 'success',
      });
      navigate('/member/memberLogIn');
    }

    if (data.loginsuccess) {
      localStorage.setItem('auth', JSON.stringify(data.auth));
      setMyAuth({ ...data.auth, authorized: true });
      MySwal.fire({
        title: <strong>成功登入</strong>,
        text: '歡迎回來PetBen',
        icon: 'success',
      });
      navigate('/');
    }
  };

  useEffect(() => {
    lineBack();
  }, []);

  return <div>LineCallback</div>;
}

export default LineCallback;
