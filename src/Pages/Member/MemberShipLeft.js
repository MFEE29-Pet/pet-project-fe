import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

import './Member.css';
function MemberShipLeft({ components, pageIndex, setPageIndex }) {
  const { myAuth } = useContext(AuthContext);
  return (
    <>
      <div className="member-shipL">
        <div className="member-ship">
          <div className="member-photo">
            <img
              src={`http://localhost:6001/uploads/imgs/${myAuth.member_photo}`}
              alt=""
            />
          </div>
          <h5 className="text_main_dark_color2">{myAuth.name}</h5>
        </div>

        <div className="member-icon" style={{ width: '100px' }}>
          <Link to="memberCenter">
            <ul style={{ width: '100%' }}>
              <i className="fa-light light fa-house-user text_main_dark_color1"></i>
              <li className="text_main_dark_color1">會員首頁</li>
            </ul>
          </Link>
          <Link to="memberPet">
            <ul>
              <i className="fa-light light fa-shield-dog text_main_dark_color1"></i>
              <li className="text_main_dark_color1">我的寵物</li>
            </ul>
          </Link>
          <Link to="memberPost">
            <ul>
              <i className="fa-light light fa-keyboard text_main_dark_color1"></i>
              <li className="text_main_dark_color1">發文紀錄</li>
            </ul>
          </Link>
          <Link to="memberArticle">
            <ul>
              <i className="fa-light light fa-books text_main_dark_color1"></i>
              <li className="text_main_dark_color1">文章收藏</li>
            </ul>
          </Link>
          <Link to="memberProductCollect">
            <ul>
              <i className="fa-light light fa-folder-bookmark text_main_dark_color1"></i>
              <li className="text_main_dark_color1">商品收藏</li>
            </ul>
          </Link>
          <Link to="memberClinic">
            <ul>
              <i className="fa-light thin fa-book-medical text_main_dark_color1"></i>
              <li className="text_main_dark_color1">預約掛號</li>
            </ul>
          </Link>
          <Link to="memberProductHistory">
            <ul>
              <i className="fa-light thin fa-rectangle-history-circle-plus text_main_dark_color1"></i>
              <li className="text_main_dark_color1">商品訂單</li>
            </ul>
          </Link>
          <Link to="memberPhotoHistory">
            <ul>
              <i className="fa-light light fa-camera text_main_dark_color1"></i>
              <li className="text_main_dark_color1">攝影訂單</li>
            </ul>
          </Link>
          <Link to="memberDataRevise">
            <ul>
              <i className="fa-light light fa-user-gear text_main_dark_color1"></i>
              <li className="text_main_dark_color1">修改資料</li>
            </ul>
          </Link>
          <Link to="memberPasswordRevise">
            <ul>
              <i className="fa-light thin fa-key text_main_dark_color1"></i>
              <li className="text_main_dark_color1">密碼修改</li>
            </ul>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MemberShipLeft;
