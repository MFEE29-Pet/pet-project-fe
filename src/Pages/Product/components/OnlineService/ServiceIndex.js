import { useContext } from 'react';
import SwitchButtonContext from '../../../../contexts/SwitchButtonContext';
import './Service.scss';
import Messages from './Messages';

function ServiceIndex() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <div
        className="servicePage_wrap"
        style={{
          width: '70%',
          height: '800px',
          margin: '10px auto 50px auto',
          backgroundColor: '#fff',
          display: 'flex',
          borderRadius: '20px',
          flexDirection: 'column',
        }}
      >
        <div
          className="service_bar"
          style={{
            width: '100%',
            height: '50px',
            borderRadius: '20px 20px 0 0',
            backgroundColor: `${mode === 'dog' ? '#f8b62b' : '#4c748e'}`,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div className="service_bar_icon">
            <div
              className="notifications"
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 20px',
              }}
            >
              <i
                class="fa-sharp fa-solid fa-comment"
                style={{ color: '#fff', fontSize: '30px' }}
              ></i>
            </div>
          </div>
        </div>
        <div
          className="list_and_room"
          style={{
            width: '100%',
            height: 'calc(100%-50px)',
            display: 'flex',
            overflow: 'auto',
            padding: '5px',
          }}
        >
          <div
            className="room_container"
            style={{
              display: 'flex',
              width: '30%',
              height: '100%',
              outline: '1px solid red',
              overflow: 'auto',
              flexDirection: 'column',
            }}
          >
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0 ',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0 ',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0 ',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0 ',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
            <div
              className="room_list"
              style={{
                display: 'flex',
                margin: '10px 0 0 0 ',
                height: '80px',
                width: '100%',
                padding: '0 10px',
              }}
            >
              <div
                className="user_img_wrap"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/test/user1.jpeg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                <h1>user1</h1>
                <button style={{ margin: '10px 0' }}>加入</button>
              </div>
            </div>
          </div>
          <div
            className="chat_room"
            style={{
              width: '70%',
              // backgroundColor: 'blue',
              outline: '1px solid blue',
              padding: '5px',
            }}
          >
            <div
              className="messages_window"
              style={{
                height: '88%',
                overflowY: 'scroll',
                paddingRight: '10px',
              }}
            >
              <Messages />
              <Messages own={true} />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
            </div>
            <div
              className="messages_input"
              style={{
                height: '10%',
                // backgroundColor: 'lightcoral',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <textarea
                placeholder="輸入訊息..."
                style={{
                  height: '50px',
                  width: '80%',
                  borderRadius: '10px',
                  padding: '10px',
                }}
              />
              <button
                style={{
                  height: '30px',
                  width: '70px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  color: '#fff',
                  backgroundColor: 'lightblue',
                }}
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceIndex;
