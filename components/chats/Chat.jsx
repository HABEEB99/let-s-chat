import React from 'react';

const Chat = ({ name, message, timeSent, Icon }) => {
  return (
    <div className="flex items-center justify-between w-[100%] h-[12%] border-2 rounded-xl border-gray-500 mt-2 px-2 ">
      <div className="flex-1">
        <Icon className="text-4xl text-gray-400" />
      </div>

      <div className="flex-[5] flex flex-col justify-start">
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold text-btn'>{name}</span>
          <span className='text-md text-blue-400'>{timeSent}</span>
        </div>

        <span className='text-lg text-gray-500'>{message}</span>
      </div>
    </div>
  );
};

export default Chat;
