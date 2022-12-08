import React from 'react';
import './Member.css';
function MemberResavePassword() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height:'800px',
        marginTop: '80px',
        fontSize: '20px',
      }}
    >
      <div className="pagePassword">
        <div className="enter-A">
          <h2>新密碼</h2>
          <div className="enter-B" style={{ backgroundColor: 'transparent' }}>
            <div>
              <input
                type="text"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
        <div className="enter-A">
          <h2>新密碼確認</h2>
          <div className="enter-B" style={{ backgroundColor: 'transparent' }}>
            <div>
              <input
                type="text"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
        <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="bg_main_light_color1"
            style={{
              padding: '10px 20px',
              border: 'none',
              fontSize: '16px',
              color: '#fff',
              borderRadius: '15px',
            }}
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemberResavePassword;
