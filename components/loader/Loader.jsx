import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <AiOutlineLoading3Quarters className="text-btn text-[12rem] font-bold animate-spin" />
      <h1 className="text-3xl text-logo font-bold animate-pulse">
        Check your internet connection
      </h1>
    </div>
  );
};

export default Loader;
