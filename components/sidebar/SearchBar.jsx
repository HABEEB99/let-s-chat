import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-blue-100 px-6 flex items-center justify-center w-[100%] h-[10%] border-t-4 border-t-logo border-b-2 border-b-gray-400">
      <div className="w-[100%] h-[60%] bg-white rounded-lg flex items-center px-2">
        <FaSearch className="h-[100%] text-2xl text-gray-400" />
        <input
          type="text"
          placeholder="Search for a name..."
          className="ml-2 h-[100%] w-[100%] outline-none border-0 focus:border-white border-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
