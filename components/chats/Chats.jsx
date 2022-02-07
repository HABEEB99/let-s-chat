import React from 'react';
import Chat from './Chat';
import { BsPersonCircle } from 'react-icons/bs';

const Chats = () => {
  return (
    <div className="w-[100%] flex flex-col items-center h-[90%] px-3">
      <Chat
        name="Ola"
        timeSent="3:40 PM"
        message="what's up bro ?"
        Icon={BsPersonCircle}
      />

      <Chat
      name="Bayo"
      timeSent="7:32 PM"
      message="pls send me your phone number"
      Icon={BsPersonCircle}
    />
    </div>
  );
};

export default Chats;
