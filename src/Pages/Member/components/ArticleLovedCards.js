import React from 'react';
import { useNavigate } from 'react-router';

function ArticleLovedCards({ loveList, setDeleteList, deleteList }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    //toggle(切換)
    // 如果目前這個值在陣列中 -> 移出陣列
    if (deleteList.includes(+e.target.value)) {
      // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
      // 2. 在拷貝出的新陣列(物件)上運算或處理
      const newDeleteList = deleteList.filter((v, i) => {
        return v !== +e.target.value;
      });
      // 3. 設定回原本的狀態
      setDeleteList(newDeleteList);
    } else {
      // 反之如果目前這個值"沒在"陣列中 -> 加入陣列
      // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
      // 2. 在拷貝出的新陣列(物件)上運算或處理
      const newDeleteList = [...deleteList, +e.target.value];

      // 3. 設定回原本的狀態
      setDeleteList(newDeleteList);
    }
  };
  return (
    <>
      {loveList.map((e, i) => {
        return (
          <div className="articleInfo" key={i}>
            <div className="article-details" style={{ cursor: 'pointer' }}>
              <div className="article-all">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={e.a_sid}
                  checked={deleteList.includes(e.a_sid)}
                  onChange={handleChange}
                />
                {e.category === 'A' ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '30%',
                      alignItems: 'center',
                    }}
                  >
                    <i
                      className="fa-light fa-comment-dots text_main_dark_color2"
                      style={{ fontSize: '40px' }}
                    ></i>
                    <div
                      className="text_main_dark_color2"
                      style={{ fontSize: '16px', marginTop: '10px' }}
                    >
                      【閒聊】
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {e.category === 'B' ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '30%',
                      alignItems: 'center',
                    }}
                  >
                    <i
                      className="fa-light fa-message-question text_main_dark_color2"
                      style={{ fontSize: '40px' }}
                    ></i>
                    <div
                      className="text_main_dark_color2"
                      style={{ fontSize: '16px', marginTop: '10px' }}
                    >
                      【發問】
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {e.category === 'C' ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '30%',
                      alignItems: 'center',
                    }}
                  >
                    <i
                      className="fa-light fa-party-horn text_main_dark_color2"
                      style={{ fontSize: '40px' }}
                    ></i>
                    <div
                      className="text_main_dark_color2"
                      style={{ fontSize: '16px', marginTop: '10px' }}
                    >
                      【活動】
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {e.category === 'D' ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '30%',
                      alignItems: 'center',
                    }}
                  >
                    <i
                      className="fa-light fa-hand-holding-heart text_main_dark_color2"
                      style={{ fontSize: '40px' }}
                    ></i>
                    <div
                      className="text_main_dark_color2"
                      style={{ fontSize: '16px', marginTop: '10px' }}
                    >
                      【送養】
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {e.category === 'E' ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '30%',
                      alignItems: 'center',
                    }}
                  >
                    <i
                      className="fa-light fa-house-chimney-heart text_main_dark_color2"
                      style={{ fontSize: '40px' }}
                    ></i>
                    <div
                      className="text_main_dark_color2"
                      style={{ fontSize: '16px', marginTop: '10px' }}
                    >
                      【領養】
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {e.category === 'F' ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '30%',
                      alignItems: 'center',
                    }}
                  >
                    <i
                      className="fa-light fa-icons text_main_dark_color2"
                      style={{ fontSize: '40px' }}
                    ></i>
                    <div
                      className="text_main_dark_color2"
                      style={{ fontSize: '16px', marginTop: '10px' }}
                    >
                      【其他】
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="article">
                  <h5
                    onClick={() => {
                      // console.log(e2.sid);
                      navigate(`/forum/detail/?sid=${e.a_sid}`);
                    }}
                  >
                    {e.title}
                  </h5>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '15%',
                }}
              >
                <div className="author">
                  <h2>{e.name}</h2>
                  <p style={{ fontSize: '14px' }}>{e.created_at}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ArticleLovedCards;
