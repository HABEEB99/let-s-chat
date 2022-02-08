import React from 'react';
import { chatData } from '../chats/chatData';
import ChatBox from './ChatBox';

const ChatBoxesContainer = () => {
  return (
    <div className="w-[100%] h-[80%] bg-logo overflow-y-scroll">
      {chatData.map(({ id, message, userName, email, timestamp, imgUrl }) => (
        <ChatBox
          key={id}
          message={message}
          id={id}
          email={email}
          userName={userName}
          timestamp={timestamp}
          imgUrl={imgUrl}
        />
      ))}
    </div>
  );
};

export default ChatBoxesContainer;
