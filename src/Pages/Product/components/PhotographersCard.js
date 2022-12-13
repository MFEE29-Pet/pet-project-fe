import { useContext } from 'react';
import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';
import Swal from 'sweetalert2';

const NAME = styled.p`
  text-align: center;
  color: '#40220f';
  font-size: 16px;
  font-weight: bold;
`;
const SPAN = styled.span`
  font-weight: bold;
  font-size: 16px;
  &::after {
    content: '-';
    font-size: 25px;
    margin: 0 5px;
  }
`;

function PhotographersCard({ photoGraphers, setFloatNum, floatNum }) {
  const { mode } = useContext(SwitchButtonContext);
  const { myAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname);
  return (
    <>
      {photoGraphers.map((el, i) => {
        return (
          <div
            className="photographer_cards"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            key={el.sid}
          >
            <div
              className={`dog_foot ${floatNum === el.sid ? 'floatUp' : ''}`}
              style={{
                width: '100px',
                position: 'relative',
                zIndex: 0,
                transformOrigin: ' top left',
                // transform: ' rotateZ(135deg)',
                top: floatNum === 3 ? '30%' : '35%',
                left: '30%',
              }}
            >
              <img
                src={`/images/${
                  mode === 'dog' ? 'dogs_foot_01.png' : 'cats_foot_01.png'
                }`}
                style={{
                  position: 'absolute',
                  width: '30px',

                  // transform: 'rotateX(45deg)',
                }}
                alt=""
              />
            </div>
            <div
              className={`photo_img_wrap ${
                floatNum === el.sid ? 'floatUp' : ''
              }`}
              style={{
                width: '200px',
                height: '200px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                margin: '0 0 20px 0',
                backgroundColor: 'transparent',
              }}
              key={el.sid}
              onClick={() => {
                setFloatNum(el.sid);
              }}
            >
              <img
                src={`/images/${el.image}`}
                alt=""
                style={{ height: '100%' }}
              />
            </div>
            <div className="photograph_name" style={{ marginBottom: '20px' }}>
              <NAME>
                <SPAN>攝影師</SPAN>
                {el.name}
              </NAME>
            </div>
            <div
              className="reserver_btn"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <button
                type="button"
                className="bg_main_light_color1"
                style={{
                  color: '#fff',
                  border: 'none',
                  borderRadius: '20px',
                  padding: ' 10px 50px',
                  fontWeight: 'bold ',
                }}
                onClick={() => {
                  if (!myAuth.sid) {
                    Swal.fire({
                      title: '<strong>請先登入會員</strong>',
                      icon: 'warning',
                      scrollbarPadding: false,
                    });
                    navigate('/member/memberLogIn');
                    return;
                  }
                  navigate(`${location.pathname}/reserve?sid=${el.sid}`);
                }}
              >
                立即預約
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PhotographersCard;
