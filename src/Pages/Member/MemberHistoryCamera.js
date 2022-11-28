import './Member.css';

function MemberHistoryCamera() {
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
      <div className="orderCamera-right">
        <div className="orderCameraWrap">
          <div className="orderCamera">
            <div className="detailCamera">
              <h1
                className="text_main_dark_color2"
                style={{ marginRight: '20px' }}
              >
                攝影預約明細
              </h1>
              <p style={{ color: '#727171', fontSize: '16px' }}>
                訂單完成於2022-11-28
              </p>
            </div>
            <div className="priceCamera">
              <h1 className="text_main_dark_color2">訂單金額</h1>
              <p
                style={{
                  marginLeft: '20px',
                  color: '#f00',
                  fontWeight: '700',
                  fontSize: '18px',
                }}
              >
                $4,770
              </p>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '20px',
            }}
          >
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ color: '#727171', fontSize: '16px' }}>頭像</th>
                  <th style={{ color: '#727171', fontSize: '16px' }}>攝影師</th>
                  <th style={{ color: '#727171', fontSize: '16px' }}>
                    預約日期
                  </th>
                  <th style={{ color: '#727171', fontSize: '16px' }}>
                    預約時段
                  </th>
                  <th style={{ color: '#727171', fontSize: '16px' }}>單價</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      height: '150px',
                    }}
                  >
                    <img
                      src=""
                      alt=""
                      style={{ width: '100px', height: '100px' }}
                    />
                  </td>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    柏延
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#727171',
                    }}
                  >
                    2023/01/02
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#727171',
                    }}
                  >
                    下午
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#f00',
                    }}
                  >
                    $1960
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberHistoryCamera;
