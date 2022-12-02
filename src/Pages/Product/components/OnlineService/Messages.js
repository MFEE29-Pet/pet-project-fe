import React from 'react';
import './Messages.scss';
function Messages({ own }) {
  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <div className="messagesTop">
          <img className="messageImg" src="/images/test/user1.jpeg" alt="" />

          <div
            className="wrap"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <p className="messageUser" style={{ marginRight: '10px' }}>
              user1:
            </p>
            <p className="messageText">
              Hello, there! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate at saepe reiciendis neque explicabo!
              Necessitatibus dolore inventore laudantium culpa voluptatum sequi
              maiores. Accusamus reprehenderit, quae unde voluptatum consectetur
              ipsum vitae?
            </p>
          </div>
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </>
  );
}

export default Messages;
