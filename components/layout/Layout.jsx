import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <main className="w-[90vw] h-[90vh] bg-gray-400 flex items-center rounded-2xl">
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
