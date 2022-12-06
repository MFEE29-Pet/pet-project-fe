import styled from './Member.module.scss';
function MemberLevel() {
  return (
    <>
      <div className={styled.cardDegree}>
        <div className={styled.degreeC}>
          <div className={styled.degreeWrap}>
            <div className={`${styled.degree} ${styled.d1}`}>
              <div className={styled.degreeImg}>
                <img src="../image/MemberCard_1.png" alt="" />
              </div>
              <div className={styled.degreeCard}>
                <h2>初階學士</h2>
                <h2>elementary</h2>
                <p>會員卡</p>
              </div>
            </div>
            <div className={`${styled.degree} ${styled.d2}`}>
              <div className={styled.degreeImg}>
                <img src="../image/MemberCard_2.png" alt="" />
              </div>
              <div className={styled.degreeCard}>
                <h2>中階碩士</h2>
                <h2>master</h2>
                <p>會員卡</p>
              </div>
            </div>
            <div className={`${styled.degree} ${styled.d3}`}>
              <div className={styled.degreeImg}>
                <img src="../image/MemberCard_3.png" alt="" />
              </div>
              <div className={styled.degreeCard}>
                <h2>高階博士</h2>
                <h2>doctor</h2>
                <p>會員卡</p>
              </div>
            </div>
          </div>
          <div className={styled.degreeTxt}>
            <div className={styled.degreeIcon}>
              <i className="fa-solid fa-caret-right right"></i>
              <span>每月第一筆訂單，不限金額，即可享免運優惠。</span>
            </div>
            <div className={styled.degreeIcon}>
              <i className="fa-solid fa-caret-right right"></i>
              <span>單筆凡超過2,500元可享5%折扣</span>
            </div>
          </div>
        </div>
        <div className={styled.shipBottom}>
          <div className={styled.ship}>
            <h2>解鎖進階等級</h2>
            <p>目前級別：初階學士</p>
          </div>
          <div className={styled.input}>
            <div className={styled.inputRange}>
              <div className={styled.inputText}>
                <p>累積訂單</p>
                <span>4</span>
                <span>/10</span>
              </div>
              <div className={styled.range}>
                <div></div>
              </div>
            </div>
            <div className={styled.inputRange}>
              <div className={styled.inputText}>
                <p>累積消費</p>
                <span>＄5,080</span>
                <span>/8,000</span>
              </div>

              <div className={styled.range}>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberLevel;
