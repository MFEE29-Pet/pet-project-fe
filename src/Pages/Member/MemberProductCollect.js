import React from 'react'

function MemberProductCollect() {
  return (
    <>
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
                <p>$1,280</p>
                <h5>$980</h5>
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
                <p>$1,280</p>
                <h5>$980</h5>
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
                <p>$1,280</p>
                <h5>$980</h5>
              </div>
            </div>
          </div>
          <div className="orderPage">
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-light fa-1"></i>
            <i className="fa-light fa-2"></i>
            <i className="fa-light fa-3"></i>
            <i className="fa-light fa-4"></i>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberProductCollect