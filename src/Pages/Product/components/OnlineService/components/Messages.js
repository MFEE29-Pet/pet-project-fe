import React from 'react';
import './Messages.scss';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function Messages({ own, message }) {
  console.log(message);
  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <div className="messagesTop">
          <img
            className="messageImg"
            src={`http://localhost:6001/uploads/imgs/${message.senderImg}`}
            alt=""
          />

          <div
            className="wrap"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <p className="messageUser" style={{ marginRight: '10px' }}>
              {message.sender}
            </p>
            <p className="messageText">{message.messages}</p>
          </div>
        </div>
        <div className="messageBottom">
          {dayjs(message.created_at).fromNow()}
        </div>
      </div>
    </>
  );
}

export default Messages;
