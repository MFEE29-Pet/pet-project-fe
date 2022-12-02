import styles from './styles.module.css';
import MessagesReceived from './components/Messages';
import SendMessage from './components/SendMessage';
import RoomAndUsers from './components/RoomAndUsers';
import { useEffect, useState } from 'react';

function Chat({ socket, username, room }) {
  // const [notifications, setNotifications] = useState([]);


  // const sendMessageAndNotification = () => {
  //   if (message !== '') {
  //     const __createdtime__ = Date.now();
  //     // send message to server . We can't specify who we send the msg to from the frontend . We can only send to server . Server can then send msg to rest of users in room.
  //     socket.emit('send_message', { username, room, message, __createdtime__ });
  //     setMessage('');
  //     socket.emit('sendNotification', {
  //       senderName: username,
  //       receiverName: '客服',
  //       message,
  //     });
  //   }
  // }

  //   useEffect(() => {
  //     socket.on('getNotification', (data) => {
  //       setNotifications((prev) => [...prev, data]);
  //     });
  //   }, [socket]);
  //   console.log(notifications);
    // 傳送通知
    // const handleNotification = (msg) => {
    //   socket.emit('sendNotification', {
    //     senderName: username,
    //     receiverName: '客服',
    //     msg,
    //   });
    // };

    // const [notifications, setNotifications] = useState([]);

    // useEffect(() => {
    //   socket.on('getNotification', (data) => {
    //     setNotifications((prev) => [...prev, data]);
    //   });
    // }, [socket]);
  
    // console.log(notifications);



  return (
    <div>
      <div className={styles.chatContainer}>
        <RoomAndUsers socket={socket} username={username} room={room} />
        <div>
          <MessagesReceived socket={socket} />
          <SendMessage socket={socket} username={username} room={room}  />
        </div>
      </div>
    </div>
  );
}

export default Chat;
