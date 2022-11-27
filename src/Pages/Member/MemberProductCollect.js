import React from 'react';

function MemberProductCollect() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          我的商品收藏
        </h2>
        <div className="product-title">
          <div className="checkbox-title">
            <div>
              <input type="checkbox" name="" id="" />
              <span>全選</span>
            </div>

            <button className="delete">刪除選中收藏</button>
          </div>
          <div className="product-page">
            <div className="product-photo">
              <div className="line"></div>
              <div className="product-name">
                <div className="product-img">
                  <img src="../image/product_3.png" alt="" />
                </div>
                <div className="product-wrap">
                  <input type="checkbox" name="" id="" />
                  <span>寵物商品</span>
                </div>
                <div className="proudct-price">
                  <p style={{fontSize:'16px',color:'#c9caca',textDecoration:'line-through'}}>$1,280</p>
                  <h5 style={{fontSize:'20px'}}>$980</h5>
                </div>
              </div>
              <div className="product-name">
                <div className="product-img">
                  <img src="../image/product_4.png" alt="" />
                </div>
                <div className="product-wrap">
                  <input type="checkbox" name="" id="" />
                  <span>寵物商品</span>
                </div>
                <div className="proudct-price">
                  <p style={{fontSize:'16px',color:'#c9caca',textDecoration:'line-through'}}>$1,280</p>
                  <h5 style={{fontSize:'20px'}}>$980</h5>
                </div>
              </div>
              <div className="product-name">
                <div className="product-img">
                  <img src="../image/product_5.png" alt="" />
                </div>
                <div className="product-wrap">
                  <input type="checkbox" name="" id="" />
                  <span>寵物商品</span>
                </div>
                <div className="proudct-price">
                  <p style={{fontSize:'16px',color:'#c9caca',textDecoration:'line-through'}}>$1,280</p>
                  <h5 style={{fontSize:'20px'}}>$980</h5>
                </div>
              </div>
            </div>
            <div className="orderPage">
              <i className="fa-solid fa-angle-left"></i>
              <i className="fa-light light fa-1"></i>
              <i className="fa-light light fa-2"></i>
              <i className="fa-light light fa-3"></i>
              <i className="fa-light light fa-4"></i>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberProductCollect;
