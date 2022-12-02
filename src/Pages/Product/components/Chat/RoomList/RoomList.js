import axios from 'axios';
import { useEffect, useState } from 'react';
import { MEMBER_DATA } from '../../../my-config';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoomList({ socket }) {
  const sid = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')).sid
    : 0;
  const name = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')).name
    : 0;
  const navigate = useNavigate();
  const [memberData, setMemberData] = useState([]);
  const [roomId, setRoomId] = useState(0);
  const [username, setUsername] = useState(sid === 2 ? '客服人員' : name);
  const [userSid, setUserSid] = useState(0);

  const getMemberData = async () => {
    const res = await axios.get(MEMBER_DATA);

    const data = res.data.rows;
    console.log(data);

    setMemberData(data);
  };
  // 加入指定聊天室 function
  const joinRoom = () => {
    if (roomId !== '') {
      // server 收到事件
      socket.emit('join_room', { username, roomId });
    }
  };

  useEffect(() => {
    getMemberData();
  }, []);
  // console.log(roomId);
  return (
    <>
      <div
        className="list_wrap"
        style={{
          width: '70%',
          height: '800px',
          margin: '10px auto 50px auto',
          backgroundColor: '#fff',
          display: 'flex',
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
          {memberData.map((e, i) => {
            return (
              <div
                key={e.sid}
                className="room_list"
                style={{
                  display: 'flex',
                  margin: '10px 0',
                  height: '80px',
                  width: '100%',
                  padding: '0 10px',
                  outline: `${roomId === e.sid ? '1px solid red' : ''}`,
                }}
                onClick={() => {
                  setRoomId(e.sid);
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
                    src="/images/person_4.jpeg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
                  <h1>{e.name}</h1>
                  <button style={{ margin: '10px 0' }} onClick={joinRoom}>
                    加入
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="chat_room"
          style={{ width: '70%', outline: '1px solid blue' }}
        >
        </div>
      </div>
    </>
  );
}

export default RoomList;
