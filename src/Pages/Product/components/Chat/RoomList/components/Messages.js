import { useContext, useEffect, useState } from 'react';
import styles from '../styles.module.css';
import SwitchButtonContext from '../../../../../../contexts/SwitchButtonContext';

function Messages({ socket }) {
  const [messagesReceived, setMessagesReceived] = useState([]);
  const { mode } = useContext(SwitchButtonContext);

  // Runs whenever a socket event is received form the server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    // Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket]);

  // date dd/mm/yyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <>
      <div className={styles.messagesColumn}>
        {messagesReceived.map((msg, i) => (
          <div
            className={styles.message}
            style={{
              backgroundColor: `${mode === 'dog' ? '#f8b62b' : '#00a29a'}`,
            }}
            key={i}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span
                className={styles.msgMeta}
                style={{
                  color: `${mode === 'dog' ? '#40220f' : '#18334e'}`,
                  fontSize: '16px',
                }}
              >
                {msg.username}
              </span>
              <span
                className={styles.msgMeta}
                style={{ color: `${mode === 'dog' ? '#40220f' : '#18334e'}` }}
              >
                {formatDateFromTimestamp(msg.__createdtime__)}
              </span>
            </div>
            <p className={styles.msgText}>{msg.message}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default Messages;
