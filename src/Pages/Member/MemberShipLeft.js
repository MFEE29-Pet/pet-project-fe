import styled from  './Member.module.scss'
import { useContext } from 'react';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
import { MemberContext } from '../../contexts/MemberContext';
function MemberShipLeft({ components, pageIndex, setPageIndex }) {
  const { mode } = useContext(SwitchButtonContext);
  const { auth } = useContext(MemberContext);
  return (
    <>
      {/* <div className="member-page">
        <div className="memberWeb-path">
          <h2>首頁會員中心會員首頁</h2>
        </div> */}
      {/* <div className="member"> */}
      <div className={styled.memberShipL}>
        <div className={styled.memberShip}>
          <div className={styled.memberPhoto}>
            <img
              src={`http://localhost:6002/uploads/${auth.row.member_photo}`}
              alt=""
            />
          </div>
          <h5 style={{ color: mode === 'cat' && '#fff5de' }}>{auth.row.name}</h5>
        </div>

        <div className={styled.memberIcon}>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-light light fa-house-user" style={{ color: mode === 'cat' && '#18334e' }}></i>
            <li
              onClick={() => {
                setPageIndex(0);
              }}
            >
              會員首頁
            </li>
          </ul>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-light light fa-shield-dog" style={{ color: mode === 'cat' && '#18334e' }}></i>
            <li
              onClick={() => {
                setPageIndex(1);
              }}
            >
              我的寵物
            </li>
          </ul>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-light light fa-books" style={{ color: mode === 'cat' && '#18334e' }}></i>
            <li
              onClick={() => {
                setPageIndex(2);
              }}
            >
              文章收藏
            </li>
          </ul>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-light light fa-folder-bookmark" style={{ color: mode === 'cat' && '#18334e' }}></i>
            <li
              onClick={() => {
                setPageIndex(3);
              }}
            >
              商品收藏
            </li>
          </ul>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-thin thin fa-book-medical" style={{ color: mode === 'cat' && '#18334e' ,fontWeight: mode === 'cat' && '300'}}></i>
            <li
              onClick={() => {
                setPageIndex(4);
              }}
            >
              預約掛號
            </li>
          </ul>

          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-thin thin fa-rectangle-history-circle-plus" style={{ color: mode === 'cat' && '#18334e' ,fontWeight: mode === 'cat' && '300'}}></i>
            <li
              onClick={() => {
                setPageIndex(5);
              }}
            >
              商品訂單
            </li>
          </ul>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-light light fa-camera" style={{ color: mode === 'cat' && '#18334e' }}></i>
            
            <li
              onClick={() => {
                setPageIndex(6);
              }}
            >
              攝影訂單
            </li>
          </ul>

          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i
              className="fa-light light fa-user-gear"
              style={{ color: mode === 'cat' && '#18334e' }}
            ></i>
            <li
              onClick={() => {
                setPageIndex(7);
              }}
            >
              修改資料
            </li>
          </ul>
          <ul style={{ color: mode === 'cat' && '#fff5de' }}>
            <i className="fa-thin thin fa-key" style={{ color: mode === 'cat' && '#18334e' ,fontSize: mode === 'cat' && '20px' ,fontWeight: mode === 'cat' && '300'}}>

            </i>
            
            <li
              onClick={() => {
                setPageIndex(8);
              }}
            >
              密碼修改
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default MemberShipLeft;
