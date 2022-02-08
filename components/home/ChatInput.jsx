import React from 'react';
import { IoMdAttach } from 'react-icons/io';
import { RiBearSmileFill } from 'react-icons/ri';
import { MdKeyboardVoice } from 'react-icons/md';

const ChatInput = () => {
  return (
    <div className="w-[100%] h-[10%] px-2 bg-blue-100 rounded-br-xl flex items-center justify-between">
      <IoMdAttach className="text-3xl text-logo hover:text-btn h[100%] w-[10%]" />
      <div className="flex items-center bg-white h-[70%] w-[80%] rounded-2xl">
        <RiBearSmileFill className="text-3xl text-yellow-400 hover:text-btn h[100%] w-[10%]" />
        <input
          className="w-[90%] h-[100%] outline-none rounded-2xl"
          type="text"
          placeholder="type a message..."
        />
      </div>
      <MdKeyboardVoice className="text-3xl text-logo hover:text-btn h[100%] w-[10%]" />
    </div>
  );
};

export default ChatInput;
