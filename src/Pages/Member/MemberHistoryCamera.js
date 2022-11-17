import './Member.css';

function MemberHistoryCamera() {
  return (
    <>
     <div className="orderCamera-right">
      <div className="orderCameraWrap">
        <div className="pet-orderCamera">
          <div className="orderCamera">
            <div className="detailCamera">
              <h1>訂單明細</h1>
              <p>訂單完成於2022-11-28</p>
            </div>
            <div className="priceCamera">
              <h1>訂單金額</h1>
              <h4>$4,770</h4>
            </div>
          </div>
          <div className="productCamera">
            <div className="titleCamera">
              <p>頭像</p>
              <p>攝影師</p>
              <p>預約日期</p>
              <p>預約時段</p>
              <p>單價</p>
            </div>
            <div className="productCamera-all">
              <div className="productCamera-p">
                <img src="../image/person_5.jpeg" alt="" />
              </div>
              <div className="orderCameradetail">
                <p>伯延</p>
                <p>2023/01/02</p>
                <p>下午</p>
                <p>$4,280</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pet-orderCamera">
          <div className="orderCamera">
            <div className="detailCamera">
              <h1>訂單明細</h1>
              <p>訂單完成於2022-11-28</p>
            </div>
            <div className="priceCamera">
              <h1>訂單金額</h1>
              <h4>$4,770</h4>
            </div>
          </div>
          <div className="productCamera">
            <div className="titleCamera">
              <p>頭像</p>
              <p>攝影師</p>
              <p>預約日期</p>
              <p>預約時段</p>
              <p>單價</p>
            </div>
            <div className="productCamera-all">
              <div className="productCamera-p">
                <img src="../image/person_2.jpeg" alt="" />
              </div>
              <div className="orderCameradetail">
                <p>伯延</p>
                <p>2023/01/02</p>
                <p>下午</p>
                <p>$4,280</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pet-orderCamera">
          <div className="orderCamera">
            <div className="detailCamera">
              <h1>訂單明細</h1>
              <p>訂單完成於2022-11-28</p>
            </div>
            <div className="priceCamera">
              <h1>訂單金額</h1>
              <h4>$4,770</h4>
            </div>
          </div>
          <div className="productCamera">
            <div className="titleCamera">
              <p>頭像</p>
              <p>攝影師</p>
              <p>預約日期</p>
              <p>預約時段</p>
              <p>單價</p>
            </div>
            <div className="productCamera-all">
              <div className="productCamera-p">
                <img src="../image/person_3.jpeg" alt="" />
              </div>
              <div className="orderCameradetail">
                <p>伯延</p>
                <p>2023/01/02</p>
                <p>下午</p>
                <p>$4,280</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orderCameraPage">
        <i className="fa-solid fa-angle-left"></i>
        <i className="fa-light fa-1"></i>
        <i className="fa-light fa-2"></i>
        <i className="fa-light fa-3"></i>
        <i className="fa-light fa-4"></i>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>

    </>
  )
}

export default MemberHistoryCamera