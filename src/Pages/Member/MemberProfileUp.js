import { color } from '@mui/system';
import React from 'react';

function MemberProfileUp() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        marginTop: '80px',
        fontSize: '20px',
      }}
    >
      <div className="pageProfileUp">
        <div className="page-left">
          <div className="enter-P user">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>使用者帳號</h2>
            <div style={{ fontSize: '18px', color: '#727171', width: '250px' }}>
              Kunda
            </div>
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>姓名</h2>
            <div
              style={{
                display: 'flex',
                width: '250px',
                justifyContent: 'start',
              }}
            >
              <input
                type="text"
                className="dd"
                value="艾蜜莉"
                style={{
                  width: '100px',
                  border: '1px solid #727171',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>信箱</h2>
            <input
              type="text"
              className="dd"
              value="emily2022@testmail.com"
              style={{
                border: '1px solid #727171',
                outline: 'none',
                backgroundColor: 'transparent',
              }}
            />
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>手機</h2>
            <input
              type="text"
              className="dd"
              value="0912345678"
              style={{
                border: '1px solid #727171',
                outline: 'none',
                backgroundColor: 'transparent',
              }}
            />
          </div>
          <div className="enter-P">
            <h2
              style={{
                fontSize: '18px',
                color: '#727171',
                verticalAlign: 'top"',
              }}
            >
              地址
            </h2>
            <div className="addressA">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div className="enter-M">
                  <select name="" id="">
                    <option value="">台北市</option>
                    <option value="">新北市</option>
                    <option value="">桃園市</option>
                    <option value="">台中市</option>
                    <optio value="">台南市</optio>
                    <option value="">高雄市</option>
                  </select>
                </div>
                <div className="enter-M">
                  <select name="" id="">
                    <option value="">大安區</option>
                    <option value="">文山區</option>
                    <option value="">新店區</option>
                    <option value="">忠孝區</option>
                    <option value="">台中區</option>
                    <optio value="">台南區</optio>
                    <option value="">高雄區</option>
                  </select>
                </div>
              </div>
              <input
                type="text"
                className="dd"
                value="復興南路一段390號"
                style={{
                  border: '1px solid #727171',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>
          <div className="enter-P" style={{ marginTop: '50px' }}>
            <h2 style={{ fontSize: '18px', color: '#727171' }}>性別</h2>
            <div className="radio">
              <input style={{ margin: '0px' }} type="radio" />
              <label htmlFor="" style={{ color: '#727171', fontSize: '18px' }}>
                生理男
              </label>
              <input style={{ margin: '0px' }} type="radio" />
              <label htmlFor="" style={{ color: '#727171', fontSize: '18px' }}>
                生理女
              </label>
              <input style={{ margin: '0px' }} type="radio" />
              <label htmlFor="" style={{ color: '#727171', fontSize: '18px' }}>
                其他
              </label>
            </div>
          </div>
          <div className="enter-P">
            <h2 style={{ fontSize: '18px', color: '#727171' }}>生日</h2>
            <div className="member_date">
              <div className="enter-L">
                <select name="" id="" className="year">
                  <option value="">年</option>
                </select>
              </div>
              <div className="enter-L">
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
              <div className="enter-L">
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
          <div className="">
            <button
              className="button bg_main_light_color1"
              style={{ marginLeft: '189px' }}
            >
              儲存
            </button>
          </div>
        </div>
        <div className="photo">
          <div className="up-photoProfile">
            <img src="../image/person_1.jpg" alt="" />
          </div>
          <input type="button" value="上傳照片" />
        </div>
      </div>
    </div>
  );
}

export default MemberProfileUp;
