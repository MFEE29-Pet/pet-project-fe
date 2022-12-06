import React from 'react'
import styled from  './Member.module.scss';
function MemberProductCollect() {
  return (
    <>
      <div className={styled.productTitle}>
        <div className={styled.checkboxTitle}>
          <div>
            <input type="checkbox" name="" id="" />
            <span>全選</span>
          </div>

          <button className={styled.delete}>刪除選中收藏</button>

        </div>
        <div className={styled.productPage}>
          <div className={styled.productPhoto}>
            <div className={styled.line}></div>
            <div className={styled.productName}>
              <div className={styled.productImg}>
                <img src="../image/product_3.png" alt="" />
              </div>
              <div className={styled.productWrap}>
                <input type="checkbox" name="" id="" />
                <span>寵物商品</span>
              </div>
              <div className={styled.proudctPrice}>
                <p>$1,280</p>
                <h5>$980</h5>
              </div>
            </div>
            <div className={styled.productName}>
              <div className={styled.productImg}>
                <img src="../image/product_4.png" alt="" />
              </div>
              <div className={styled.productWrap}>
                <input type="checkbox" name="" id="" />
                <span>寵物商品</span>
              </div>
              <div className={styled.proudctPrice}>
                <p>$1,280</p>
                <h5>$980</h5>
              </div>
            </div>
            <div className={styled.productName}>
              <div className={styled.productImg}>
                <img src="../image/product_5.png" alt="" />
              </div>
              <div className={styled.productWrap}>
                <input type="checkbox" name="" id="" />
                <span>寵物商品</span>
              </div>
              <div className={styled.proudctPrice}>
                <p>$1,280</p>
                <h5>$980</h5>
              </div>
            </div>
          </div>
          <div className={styled.memberorderPage}>
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-light light fa-1"></i>
            <i className="fa-light light fa-2"></i>
            <i className="fa-light light fa-3"></i>
            <i className="fa-light light fa-4"></i>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberProductCollect