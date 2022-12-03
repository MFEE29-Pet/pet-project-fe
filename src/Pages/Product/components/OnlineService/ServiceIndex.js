import { useContext, useState, useEffect, useRef } from 'react';
import SwitchButtonContext from '../../../../contexts/SwitchButtonContext';
import './Service.scss';
import Messages from './components/Messages';
import AuthContext from '../../../../contexts/AuthContext';
import axios from 'axios';
import { SOCKET, SOCKET_HOST } from '../../my-config';
import Conversation from './components/Conversation';
import { io } from 'socket.io-client';

function ServiceIndex({ socket }) {
  const { mode } = useContext(SwitchButtonContext);
  const { myAuth } = useContext(AuthContext);

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessaage, setArrivalMessaage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [socket, setSocket] = useState(null);

  const scrollRef = useRef();

  const getConversations = async () => {
    try {
      const res = await axios.get(`${SOCKET}/conversation/${myAuth.sid}`);
      setConversations(myAuth.sid === 2 ? res.data.result : res.data.receiver);
      // console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const showConversations = conversations.filter((v,i)=> v.senderId === myAuth.sid)

  const getMessages = async () => {
    try {
      const res = await axios.get(
        `${SOCKET}/messages/${currentChat ? currentChat : 0}`
      );
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRead = () => {
    setNotifications([]);
  };

  useEffect(() => {
    socket.emit('addUser', myAuth.sid);
    // 取得socket上個別使用者sid
    socket.on('getUsers', (users) => {
      // console.log(users);
    });
  }, [myAuth.sid]);

  useEffect(() => {
    getConversations();
  }, [myAuth.sid]);

  useEffect(() => {
    getMessages();
  }, [currentChat, newMessage, arrivalMessaage]);

  // console.log(myAuth);
  // console.log({ currentChat });
  // console.log({ conversations });
  // console.log(messages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat,
      senderId: myAuth.sid,
      messages: newMessage,
    };

    // const receiverId = currentChat?.find((member) => member !== myAuth.sid);
    // console.log(conversations);

    socket.emit('sendMessage', {
      senderId: myAuth.sid,
      receiverId: currentChat === myAuth.sid ? 2 : currentChat,
      text: newMessage,
    });

    try {
      const res = await axios.post(`${SOCKET}/newMessage`, message);
      setMessages([...messages, message.messages]);
      setNewMessage('');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.on('getMessage', (data) => {
      setArrivalMessaage({
        senderId: data.senderId,
        text: data.text,
      });

      setNotifications((prev) => [...prev, data]);
    });
  }, []);
  console.log(notifications);

  // console.log(arrivalMessaage);
  useEffect(() => {
    arrivalMessaage &&
      currentChat === arrivalMessaage.senderId &&
      setMessages((prev) => [...prev, arrivalMessaage]);
  }, [arrivalMessaage, currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
                className="fa-sharp fa-solid fa-comment"
                style={{ color: '#fff', fontSize: '30px' }}
              ></i>
            </div>
          </div>
        </div>
        <div
          className="list_and_room"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'auto',
            // padding: '5px',
          }}
        >
          <div
            className="room_container"
            style={{
              display: 'flex',
              width: '30%',
              height: '100%',
              borderRight: '1px solid red',
              padding: '0 5px',
              overflow: 'auto',
              flexDirection: 'column',
            }}
          >
            {conversations.map((e, i) => (
              <div
                key={i}
                onClick={() => {
                  setCurrentChat(e.sid);
                }}
              >
                <Conversation
                  conversations={e}
                  receivedId={myAuth.sid}
                  username={myAuth.name}
                  notifications={notifications.filter(
                    (v, i) =>
                      v.receiverId === myAuth.sid && v.senderId === e.sid
                  )}
                  setNotifications={setNotifications}
                />
              </div>
            ))}
          </div>
          <div
            className="chat_room"
            style={{
              width: '70%',
              // backgroundColor: 'blue',
              // outline: '1px solid blue',
              padding: '5px',
            }}
          >
            <div
              className="messages_window"
              style={{
                height: '88%',
                overflowY: 'scroll',
                paddingRight: '10px',
                position: 'relative',
              }}
            >
              {currentChat ? (
                <>
                  {messages &&
                    messages.map((e, i) => (
                      <div ref={scrollRef} key={i}>
                        <Messages
                          message={e}
                          own={e.sender_sid === myAuth.sid}
                        />
                      </div>
                    ))}
                </>
              ) : (
                <>
                  <span
                    style={{
                      position: 'absolute',
                      top: '5%',
                      fontSize: '30px',
                      color: 'gray',
                      textAlign: 'center',
                      cursor: 'default',
                    }}
                  >
                    Open a conversation to start .
                  </span>
                </>
              )}
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
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
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
                disabled={currentChat ? false : true}
                onClick={handleSubmit}
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
