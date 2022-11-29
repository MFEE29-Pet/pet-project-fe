function Comments({ comments }) {
  // console.log(comments);
  return (
    <>
      <div
        className="score-reply"
        style={{ height: '355px', overflow: 'auto' }}
      >
        {comments && comments.map((e, i) => {
          return (
            <div
              className="reply-card"
              style={{
                height: '90px',
                // paddingTop: '20px',
                marginBottom: '5px 0',
              }}
              key={e.sid}
            >
              <div className="user-img-wrap">
                <img src={`/images/test/${e.member_photo}`} alt="" />
              </div>
              <div className="star-reply">
                <div className="star-score">
                  {Array(Math.floor(e.scores))
                    .fill(1)
                    .map((e2, i2) => {
                      return <i key={i2} className="fa-solid fa-star"></i>;
                    })}
                </div>
                <div className="reply-text">
                  <p>{e.comment}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="reply-card">
          <div className="user-img-wrap">
            <img src="./images/person_6.jpeg" alt="" />
          </div>
          
          <div className="star-reply">
            <div className="star-score">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="reply-text">
              <p>
                被包裝吸引決定買買看，沒想到價格實惠，我家Ｑ醬超愛吃！從沒見過Ｑ醬把盤子舔這麼乾淨過。
              </p>
            </div>
          </div>
        </div>
        <div className="reply-card">
          <div className="user-img-wrap">
            <img src="./images/person_3.jpeg" alt="" />
          </div>
          
          <div className="star-reply">
            <div className="star-score">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="reply-text">
              <p>
                這次是第三次回購，可惜特價的機會不多，每次要都趁著特價時買齊半年的份量，希望特價的檔次可以頻繁一點。
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Comments;
