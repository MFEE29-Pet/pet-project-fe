import React, { useState, useEffect } from 'react';
import { MEMBER_DATA } from '../../../my-config';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from './styles.modules.css';
import axios from 'axios';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 73, 204);
`;
const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto 0 auto;
  padding: 32px;
  background: lightblue;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgb(63, 73, 204);
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgb(63, 73, 204);
  font-size: 0.9rem;
  option {
    margin-top: 20px;
  }
`;

function Home({ username, setUsername, room, setRoom, socket }) {
  const navigate = useNavigate();
  const sid = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')).sid
    : 0;
  const [memberData, setMemberData] = useState([]);
  const getMemberData = async () => {
    const res = await axios.get(MEMBER_DATA);

    const data = res.data.rows;
    console.log(data);

    setMemberData(data);
  };

  // 加入指定聊天室 function
  const joinRoom = () => {
    if (room !== '' && username !== '') {
      // server 收到事件
      socket.emit('join_room', { username, room });
    }

    navigate('/chat_room', { replace: true });
  };

  // 傳送通知
  const handleNotification = (msg) => {
    socket.emit('sendNotification', {
      senderName: username,
      receiverName: '客服',
      msg,
    });
  };

  useEffect(() => {
    getMemberData();
    setUsername(
      localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')).name
        : '使用者'
    );
  }, []);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('getNotification', (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(notifications);

  return (
    <>
      <Container className={styles.container}>
        <FormContainer className={styles.formContainer}>
          <h1>{`<>DevRooms</>`}</h1>
          <Input
            className={styles.input}
            placeholder="Username..."
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Select
            className={styles.input}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option>-- Select Room --</option>
            {sid === 2 ? (
              <>
                {memberData.map((e, i) => {
                  return <option value={e.sid}>會員{e.sid}</option>;
                })}
              </>
            ) : (
              <>
                <option value={sid}>客服人員</option>
              </>
            )}
          </Select>

          <button
            className="btn btn-secondary"
            style={{ width: '100%' }}
            onClick={joinRoom}
          >
            Join Room
          </button>
        </FormContainer>
      </Container>
    </>
  );
}

export default Home;
