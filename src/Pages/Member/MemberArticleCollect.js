import './Member.css';
function MemberArticleCollect() {
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
          我的寵物列表
        </h2>
        <div className="articleWrap">
          <div className="article-title">
            <div style={{display:'flex',alignItems:'center'}}>
              <input type="checkbox" name="" id="" style={{marginRight:'10px'}}/>
              <span>全選</span>
            </div>
            <button style={{padding:'10px 20px',borderRadius:'17px',backgroundColor:'transparent',fontSize:'18px',color:'#727171',border:'1px solid #727171'}}>刪除選中收藏</button>
          </div>
          <div className="articleInfo">
            <div className="article-details">
              <div className="article-all">
                <input type="checkbox" name="" id="" style={{marginRight:'10px'}}/>
                <div className="article">
                  <h5>關於貓有二尖瓣輕微逆流</h5>
                  <div className="hashtag">
                    <span>貓</span>
                    <span>生病</span>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',width:'20%'}}>
              <div className="author">
                <h2>花輪</h2>
                <p>2022-12-14</p>
              </div>
              <i className="fa-thin thin fa-trash-can trash " style={{cursor:'pointer'}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberArticleCollect;
