import './Member.css';
function MemberShipLeft({ components, pageIndex, setPageIndex }) {
  return (
    <>
      {/* <div className="member-page">
        <div className="Web-path">
          <h2>首頁會員中心會員首頁</h2>
        </div> */}
      {/* <div className="member"> */}
      <div className='member-shipL'>
        <div className="member-ship">
          <div className="member-photo">
            <img src="../image/person_1.jpg" alt="" />
          </div>
          <h5>艾蜜莉</h5>
        </div>

        <div className="member-icon">
          <ul>
            <i className="fa-light light fa-house-user"></i>
            <li
              onClick={() => {
                setPageIndex(0);
              }}
            >
              會員首頁
            </li>
          </ul>
          <ul>
            <i className="fa-light light fa-shield-dog"></i>
            <li
              onClick={() => {
                setPageIndex(1);
              }}
            >
              我的寵物
            </li>
          </ul>
          <ul>
            <i className="fa-light light fa-books"></i>
            <li
              onClick={() => {
                setPageIndex(2);
              }}
            >
              文章收藏
            </li>
          </ul>
          <ul>
            <i className="fa-light light fa-folder-bookmark"></i>
            <li
              onClick={() => {
                setPageIndex(3);
              }}
            >
              商品收藏
            </li>
          </ul>
          <ul>
            <i className="fa-thin thin fa-book-medical"></i>
            <li
              onClick={() => {
                setPageIndex(4);
              }}
            >
              預約掛號
            </li>
          </ul>

          <ul>
            <i className="fa-thin thin fa-rectangle-history-circle-plus"></i>
            <li
              onClick={() => {
                setPageIndex(5);
              }}
            >
              歷史訂單（商品）
            </li>
          </ul>
          <ul>
            <i className="fa-light light fa-camera"></i>
            <li
              onClick={() => {
                setPageIndex(6);
              }}
            >
              歷史訂單（攝影）
            </li>
          </ul>

          <ul>
            <i className="fa-light light fa-user-gear"></i>
            <li
              onClick={() => {
                setPageIndex(7);
              }}
            >
              修改資料
            </li>
          </ul>
          <ul>
            <i className="fa-thin thin fa-key"></i>
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
