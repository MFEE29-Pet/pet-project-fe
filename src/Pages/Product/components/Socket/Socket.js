import React, { useEffect, useState, useContext } from 'react';
import webSocket from 'socket.io-client';
import { SOCKET_HOST } from '../../my-config';
import AuthContext from '../../../../contexts/AuthContext';

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

  // messages state
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <>
      <div className="socket">
        {/* 新增下拉是選單選擇房間 */}
        {/* <select
          name=""
          id=""
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        >
          <option value="">請選擇房間</option>
          <option value="room1">Room1</option>
          <option value="room2">Room2</option>
        </select>
        <input type="button" value={`連線`} onClick={connectWebSocket} />
        <input
          type="button"
          value={`送出訊息，只有自己收到回傳`}
          onClick={() => {
            sendMessage('getMessage');
          }}
        />
        <input
          type="button"
          value={`送出訊息，讓所有人收到回傳`}
          onClick={() => {
            sendMessage('getMessageAll');
          }}
        />
        <input
          type="button"
          value={`送出訊息，除了自己外所有人收到回傳`}
          onClick={() => {
            sendMessage('getMessageLess');
          }}
        /> */}
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
        {messageReceived}
      </div>
    </>
  );
}

export default Socket;
