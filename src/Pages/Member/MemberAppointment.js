import './Member.css';
function MemberAppointment() {
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
          掛號預約紀錄
        </h2>
        <div className="Hospital">
          <div className="Hospital-all">
            <div className="Hospital-order">
              <h3>進行中</h3>
              <h3>取消預約</h3>
            </div>
            <div className="Hospital-info">
              <h2 style={{ fontSize: '20px' }}>診所資訊</h2>
              <div className="Hospital-A">
                <h5>診所</h5>
                <span>暖陽寵物照護中心</span>
              </div>
              <div className="Hospital-A">
                <h5>地址</h5>
                <span>116文山區景美街15號</span>
              </div>
              <div className="Hospital-A">
                <h5>電話</h5>
                <span>(02)2328-5915</span>
              </div>
            </div>
            <div className="time">
              <h2 style={{ fontSize: '20px' }}>預約時間</h2>
              <div className="Hospital-A">
                <h5>日期</h5>
                <span>2022/12/14</span>
              </div>
              <div className="Hospital-A">
                <h5>時段</h5>
                <span>下午</span>
              </div>
              <div className="Hospital-A">
                <h5>序號</h5>
                <span>06</span>
              </div>
            </div>
          </div>
          <div className="Hospital-all">
            <div className="Hospital-order">
              <h3>進行中</h3>
              <h3>取消預約</h3>
            </div>
            <div className="Hospital-info">
              <h2 style={{ fontSize: '20px' }}>診所資訊</h2>
              <div className="Hospital-A">
                <h5>診所</h5>
                <span>暖陽寵物照護中心</span>
              </div>
              <div className="Hospital-A">
                <h5>地址</h5>
                <span>116文山區景美街15號</span>
              </div>
              <div className="Hospital-A">
                <h5>電話</h5>
                <span>(02)2328-5915</span>
              </div>
            </div>
            <div className="time">
              <h2>預約時間</h2>
              <div className="Hospital-A">
                <h5>日期</h5>
                <span>2022/12/14</span>
              </div>
              <div className="Hospital-A">
                <h5>時段</h5>
                <span>下午</span>
              </div>
              <div className="Hospital-A">
                <h5>序號</h5>
                <span>06</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberAppointment;
