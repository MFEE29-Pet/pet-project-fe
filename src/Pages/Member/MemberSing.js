import React from 'react';
import './MemberSing.css'
function MemberSing() {
  return (
    <>
      {/* <div className="fill"></div>
      <div className="success">
        <h1>註冊成功</h1>
      </div> */}
      <div className="member-page">
        <div className="singUp-page">
          <div className="page">
            <div className="page-left">
              <div className="enter-A">
                <h2>使用者帳號</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>設定密碼</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>確認密碼</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>姓名</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>信箱</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>手機</h2>
                <input type="text" className="cc" />
              </div>
              <div className="enter-A">
                <h2>地址</h2>
                <div className="address">
                  <div className="enter-C">
                    <select name="" id="">
                      <option value="">縣/市</option>
                      <option value="">台北市</option>
                      <option value="">新北市</option>
                      <option value="">桃園市</option>
                      <option value="">台中市</option>
                      <optio value="">台南市</optio>
                      <option value="">高雄市</option>
                    </select>
                  </div>
                  <div className="enter-C">
                    <div className="input-Choose">
                      <select name="" id="">
                        <option value="">行政區</option>
                        <option value="">台北市</option>
                        <option value="">新北市</option>
                        <option value="">桃園市</option>
                        <option value="">台中市</option>
                        <optio value="">台南市</optio>
                        <option value="">高雄市</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="enter-A">
                <input type="text" className="cc addressText" />
              </div>
              <div className="enter-A">
                <h2>性別</h2>
                <div className="radio">
                  <input type="radio" />
                  <label for="">生理男</label>
                  <input type="radio" />
                  <label for="">生理女</label>
                  <input type="radio" />
                  <label for="">其他</label>
                </div>
              </div>
              <div className="enter-A">
                <h2>生日</h2>
                <div className="address">
                  <div className="enter-C">
                    <select name="" id="" className="year">
                      <option value="">年</option>
                      {Array(2022 - 1992 + 1)
                        .fill(1)
                        .map((v, i) => {
                          return (
                            <option value={v} key={i}>
                              {v}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="enter-C">
                    <div className="input-Choose">
                      <select name="" id="">
                        <option value="">月</option>
                        <option value="">1月</option>
                        <option value="">2月</option>
                        <option value="">3月</option>
                        <option value="">4月</option>
                        <option value="">5月</option>
                        <option value="">6月</option>
                        <option value="">7月</option>
                        <option value="">8月</option>
                        <option value="">9月</option>
                        <option value="">10月</option>
                        <option value="">11月</option>
                        <option value="">12月</option>
                      </select>
                    </div>
                  </div>
                  <div className="enter-C">
                    <div className="input-Choose">
                      <select name="" id="">
                        <option value="">日</option>
                        <option value="">1日</option>
                        <option value="">2日</option>
                        <option value="">3日</option>
                        <option value="">4日</option>
                        <option value="">5日</option>
                        <option value="">6日</option>
                        <option value="">7日</option>
                        <option value="">8日</option>
                        <option value="">9日</option>
                        <option value="">10日</option>
                        <option value="">11日</option>
                        <option value="">12日</option>
                        <option value="">13日</option>
                        <option value="">14日</option>
                        <option value="">15日</option>
                        <option value="">16日</option>
                        <option value="">17日</option>
                        <option value="">18日</option>
                        <option value="">19日</option>
                        <option value="">20日</option>
                        <option value="">21日</option>
                        <option value="">22日</option>
                        <option value="">23日</option>
                        <option value="">24日</option>
                        <option value="">25日</option>
                        <option value="">26日</option>
                        <option value="">27日</option>
                        <option value="">28日</option>
                        <option value="">29日</option>
                        <option value="">30日</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-A">
                <button className="button">註冊</button>
              </div>
            </div>
            <div className="photo">
              <div className="up-photo">
                <i className="fa-thin thin fa-user"></i>
              </div>
              <input type="button" value="上傳照片" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSing;
