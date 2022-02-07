import React from 'react';
import Link from 'next/link';

const InvalidPage = () => {
  return (
    <div className="w-[65%] h-[100%] bg-red-300 rounded-r-2xl flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 animate-pulse text-logo">INVALID PAGE</h1>
      <Link href="/" passHref>
        <button className='text-xl w-80 h-12 bg-btn rounded-xl text-white hover:bg-logo'>Go back to Home-Page</button>
      </Link>
    </div>
  );
};

export default InvalidPage;
