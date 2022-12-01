import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from './styles.modules.css';

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

  // 加入指定聊天室 function
  const joinRoom = () => {
    if (room !== '' && username !== '') {
      // server 收到事件
      socket.emit('join_room', { username, room });
    }

    navigate('/chat_room', { replace: true });
  };

  return (
    <>
      <Container className={styles.container}>
        <FormContainer className={styles.formContainer}>
          <h1>{`<>DevRooms</>`}</h1>
          <Input
            className={styles.input}
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />

          <Select
            className={styles.input}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option>-- Select Room --</option>
            <option value="javascript">JavaScript</option>
            <option value="node">Node</option>
            <option value="express">Express</option>
            <option value="react">React</option>
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
