import React, { useEffect, useState, useContext } from 'react';
import webSocket from 'socket.io-client';
import { SOCKET_HOST } from '../../my-config';
import AuthContext from '../../../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';

const socket = webSocket.connect(`${SOCKET_HOST}`);

function Socket() {
  // const [ws, setWs] = useState(null);

  const { myAuth, setMyAuth } = useContext(AuthContext);
  // console.log(myAuth);

  // const connectWebSocket = () => {
  //   // 開啟
  //   setWs(webSocket(`${SOCKET_HOST}`));
  // };

  // const initWebSocket = () => {
  //   // 對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此捕捉
  //   ws.on('getMessage', (message) => {
  //     console.log(message);
  //   });
  //   // 傳送給所有人
  //   ws.on('getMessageAll', (message) => {
  //     console.log(message);
  //   });
  //   // 傳送給除自己以外所有人
  //   ws.on('getMessageLess', (message) => {
  //     console.log(message);
  //   });

  //   // 增加監聽
  //   ws.on('addRoom', (message) => {
  //     console.log(message);
  //   });
  // };
  // // const user = myAuth.account;
  // const changeRoom = () => {
  //   if (room !== '') {
  //     ws.emit('addRoom', room);
  //   }
  // };

  // const sendMessage = (name) => {
  //   // 以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
  //   ws.emit(name, '收到訊息!');
  // };

  // useEffect(() => {
  //   if (ws) {
  //     // success
  //     console.log('success connect!');
  //     // 設定監聽
  //     initWebSocket();
  //   }
  // }, [ws]);

  // another try

  // room state
  const [room, setRoom] = useState('');

  // username
  const [username, setUsername] = useState('');

  // messages state
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState([]);

  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }
    navigate('/chat');
  };

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
    // console.log(message);
    // console.log(messageReceived);
  };
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUsername(JSON.parse(localStorage.getItem('auth')).name);
    }
    // console.log({ username });
  }, []);
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessageReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    return () => socket.off('receive_message');
  }, [socket]);


  return (
    <>
      <div className="socket">
        <input type="text" defaultValue={username || '未登入'} hidden />
        <input
          type="text"
          placeholder="Room number"
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <button onClick={joinRoom}>加入</button>
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>送出</button>
        <h1> Message</h1>
        <div className="message_socket">
          <p>{messageReceived}</p>
        </div>
      </div>
    </>
  );
}

export default Socket;
