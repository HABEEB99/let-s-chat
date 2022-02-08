import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BiDotsVertical } from 'react-icons/bi';
import { FaLink } from 'react-icons/fa';

const MainTopbar = () => {
  const name = "Let's Chat";
  return (
    <div className="w-[100%] h-[10%] rounded-tr-2xl px-4 bg-body flex items-center justify-between">
      <div className="flex items-center">
        <BsPersonCircle className="text-logo text-5xl cursor-pointer" />
        <div className="flex flex-col  justify-items-start ml-4">
          <span className="text-xl font-bold text-gray-500">hbo@gmail.com</span>
          <span className="text-lg text-gray-400">
            Last seen: 40 minutes ago
          </span>
        </div>
      </div>

      <h1 className="text-4xl text-btn font-mono italic font-bold">{name}</h1>

      <div className="flex items-center">
        <FaLink className="text-logo text-3xl mr-4 hover:text-white hover:font-bold cursor-pointer" />
        <BiDotsVertical className="text-btn text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default MainTopbar;
