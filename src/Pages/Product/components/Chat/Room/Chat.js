import styles from './styles.module.css';
import MessagesReceived from './components/Messages';
import SendMessage from './components/SendMessage';
import RoomAndUsers from './components/RoomAndUsers';

function Chat({ socket, username, room }) {
  return (
    <div>
      <div className={styles.chatContainer}>
        <RoomAndUsers socket={socket} username={username} room={room} />
        <div>
          <MessagesReceived socket={socket} />
          <SendMessage socket={socket} username={username} room={room} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
