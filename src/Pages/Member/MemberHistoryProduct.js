import styled from  './Member.module.scss';

function MemberHistoryProduct() {
  return (
    <div className={styled.orderProductRight}>
      <div className={styled.orderProductWrap}>
        <div className={styled.peatOrderProduct}>
          <div className={styled.orderProduct}>
            <div className={styled.detailProduct}>
              <h1>訂單明細</h1>
              <p>訂單完成於2022-11-28</p>
            </div>
            <div className={styled.priceProduct}>
              <h1>訂單金額</h1>
              <h4>$4,770</h4>
            </div>
          </div>
          <div className={styled.product}>
            <div className={styled.titleProduct}>
              <p>商品圖</p>
              <p>商品名</p>
              <p>數量</p>
              <p>價格</p>
            </div>
            <div className={styled.productAll}>
              <div className={styled.productP}>
                <img src="../image/product_1.png" alt="" />
              </div>
              <p>濃郁機白館頭</p>
              <p>2</p>
              <p>$1,960</p>
             
            </div>
          </div>
        </div>
        <div className={styled.peatOrderProduct}>
          <div className={styled.orderProduct}>
            <div className={styled.detailProduct}>
              <h1>訂單明細</h1>
              <p>訂單完成於2022-11-28</p>
            </div>
            <div className={styled.priceProduct}>
              <h1>訂單金額</h1>
              <h4>$4,770</h4>
            </div>
          </div>
          <div className={styled.product}>
            <div className={styled.titleProduct}>
              <p>商品圖</p>
              <p>商品名</p>
              <p>數量</p>
              <p>價格</p>
            </div>
            <div className={styled.productAll}>
              <div className={styled.productP}>
                <img src="../image/product_1.png" alt="" />
              </div>            
              <p>濃郁機白館頭</p>
              <p>2</p>
              <p>$1,960</p>
             
            </div>
          </div>
        </div>
        <div className={styled.peatOrderProduct}>
          <div className={styled.orderProduct}>
            <div className={styled.detailProduct}>
              <h1>訂單明細</h1>
              <p>訂單完成於2022-11-28</p>
            </div>
            <div className={styled.priceProduct}>
              <h1>訂單金額</h1>
              <h4>$4,770</h4>
            </div>
          </div>
          <div className={styled.product}>
            <div className={styled.titleProduct}>
              <p>商品圖</p>
              <p>商品名</p>
              <p>數量</p>
              <p>價格</p>
            </div>
            <div className={styled.productAll}>
              <div className={styled.productP}>
                <img src="../image/product_1.png" alt="" />
              </div>
             
              <p>濃郁機白館頭</p>
              <p>2</p>
              <p>$1,960</p>
             
            </div>
          </div>
        </div>
      </div>
      <div className={styled.orderProductPage}>
        <i className="fa-solid fa-angle-left"></i>
        <i className="fa-light light fa-1"></i>
        <i className="fa-light light fa-2"></i>
        <i className="fa-light light fa-3"></i>
        <i className="fa-light light fa-4"></i>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  )
}

export default MemberHistoryProduct