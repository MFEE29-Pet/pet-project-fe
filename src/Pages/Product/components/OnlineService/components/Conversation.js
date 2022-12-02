import React, { useEffect, useState } from 'react';

function Conversation({ conversations, receivedId }) {
  const [user, setUser] = useState(0);
  // console.log(receivedId);
  // console.log(conversations);
  useEffect(() => {
    setUser(receivedId);
  }, [conversations, receivedId]);

  return (
    <>
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
            src={`http://localhost:6001/uploads/imgs/${
              receivedId === 2
                ? conversations?.senderImg
                : conversations?.receiverImg
            }`}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="user_name_wrap" style={{ margin: '10px 20px' }}>
          <h1>
            {user === 2 ? conversations.senderName : conversations.receiverName}
          </h1>
          <button style={{ margin: '10px 0' }}>加入</button>
        </div>
      </div>
    </>
  );
}

export default Conversation;
