import React from 'react';

const ChatBox = ({ userName, email, message, timestamp, id, imgUrl }) => {
//   const myMsg = () => (
//     <div className="ml-auto p-[15px] pb-[26px] text-right bg-orange-300 mb-[10px] relative rounded-xl">
//       <span>{message}</span>
//     </div>
//   );

//   const frMsg = () => (
//     <div className="text-left p-[15px] pb-[26px]  bg-white mb-[10px] relative rounded-xl">
//       <span>{message}</span>
//     </div>
//   );

//   const person = 'ola@gmail.com';
//   const msgPosition = email === person ? <myMsg/> : 

  return (
    <div className="flex p-6  ">
      <div className="flex flex-col max-w-10 p-[15px] pb-[26px] text-left bg-white mb-[10px] relative rounded-xl">
        <span className='text-btn italic text-base'>{userName}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatBox;
