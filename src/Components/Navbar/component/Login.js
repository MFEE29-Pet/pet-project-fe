import React, { useContext } from 'react';
import styled from 'styled-components';
import DogButton from '../../Buttons/DogButton';
import { useNavigate, Link } from 'react-router-dom';
import { MemberContext } from '../../../contexts/MemberContext';
import '../../../Pages/Member/userPhoto.scss';
const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

function Login() {
  const { auth, logout } = useContext(MemberContext);
  console.log(auth);
  const navigate = useNavigate();
  return (
    <LoginBox>
      {auth.login ? (
        <Link className="userPhoto" to="/member">
          <img
            src={'http://localhost:6002/uploads/' + auth.row.member_photo}
            alt=""
          />
        </Link>
      ) : (
        <DogButton
          Text="JoinNow"
          ClassName="bg_main_light_color1"
          nav={() => {
            navigate('/member/memberShipAdd');
          }}
        />
      )}

      {auth.login ? (
        <DogButton
          Text="LOGOUT"
          ClassName="border_main_light_color1"
          nav={() => {
            logout();
            navigate('/');
          }}
        />
      ) : (
        <DogButton
          Text="LOGIN"
          ClassName="border_main_light_color1"
          nav={() => {
            navigate('/member/memberLogIn');
          }}
        />
      )}
    </LoginBox>
  );
}

export default Login;
