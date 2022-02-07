import React from 'react';
import { BsPersonCircle, BsMessenger } from 'react-icons/bs';
import { BiDotsVertical } from 'react-icons/bi';

const SidebarTopbar = () => {
  return (
    <div className="w-[100%] h-[10%] rounded-tl-2xl px-4  bg-body flex items-center justify-between">
      <BsPersonCircle className='text-logo text-5xl cursor-pointer' />
      <div className='flex items-center'>
        <BsMessenger className='text-logo text-3xl mr-4 hover:text-white hover:font-bold cursor-pointer'  />
        <BiDotsVertical className='text-btn text-3xl cursor-pointer'  />
      </div>
    </div>
  );
};

export default SidebarTopbar;
