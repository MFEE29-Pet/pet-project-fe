import React, { useEffect, useState } from 'react';

function Conversation({
  conversations,
  receivedId,
  notifications,
  setNotifications,
}) {
  const [user, setUser] = useState(0);
  // const [showNotifications, setShowNotifications] = useState(notifications.length > 0 ? notifications.length : '');
  // console.log(receivedId);
  // console.log(conversations);
  console.log(notifications);
  useEffect(() => {
    setUser(receivedId);
  }, [conversations, receivedId]);

  const handleRead = () => {
    setNotifications([]);
  };

  return (
    <>
      <div
        className="room_list"
        style={{
          display: 'flex',
          margin: '10px 0 0 0 ',
          height: '80px',
          width: '100%',
          // padding: '0 10px',
        }}
        onClick={handleRead}
      >
        <div
          className="user_img_wrap"
          style={{
            width: '70px',
            height: '70px',
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
        <div className="user_name_wrap" style={{ margin: '10px ' }}>
          <h1>
            {user === 2 ? conversations.senderName : conversations.receiverName}
          </h1>
        </div>
        <div>
          <span>
            {notifications.length > 0
              ? notifications.length > 10
                ? 10 + '+'
                : notifications.length
              : ''}
          </span>
        </div>
      </div>
    </>
  );
}

export default Conversation;
