import './Member.css'
function MemberLevel() {
  return (
    <>
      <div className="card-degree">
        <div className="degreeC">
          <div className="degreeWrap">
            <div className="degree d1">
              <div className="degreeImg">
                <img src="../image/MemberCard_1.png" alt="" />
              </div>
              <div className="degree-card">
                <h2>初階學士</h2>
                <h2>elementary</h2>
                <p>會員卡</p>
              </div>
            </div>
            <div className="degree d2">
              <div className="degreeImg">
                <img src="../image/MemberCard_2.png" alt="" />
              </div>
              <div className="degree-card">
                <h2>中階碩士</h2>
                <h2>master</h2>
                <p>會員卡</p>
              </div>
            </div>
            <div className="degree d3">
              <div className="degreeImg">
                <img src="../image/MemberCard_3.png" alt="" />
              </div>
              <div className="degree-card">
                <h2>高階博士</h2>
                <h2>doctor</h2>
                <p>會員卡</p>
              </div>
            </div>
          </div>
          <div className="degree-txt">
            <div className="degreeIcon">
              <i className="fa-solid fa-caret-right right"></i>
              <span>每月第一筆訂單，不限金額，即可享免運優惠。</span>
            </div>
            <div className="degreeIcon">
              <i className="fa-solid fa-caret-right right"></i>
              <span>單筆凡超過2,500元可享5%折扣</span>
            </div>
          </div>
        </div>
        <div className="ship-bottom">
          <div className="ship">
            <h2>解鎖進階等級</h2>
            <p>目前級別：初階學士</p>
          </div>
          <div className="input">
            <div className="inputRange">
              <div className="input-text">
                <p>累積訂單</p>
                <span>4</span>
                <span>/10</span>
              </div>
              <div className="range">
                <div></div>
              </div>
            </div>
            <div className="inputRange">
              <div className="input-text">
                <p>累積消費</p>
                <span>＄5,080</span>
                <span>/8,000</span>
              </div>

              <div className="range">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLevel
