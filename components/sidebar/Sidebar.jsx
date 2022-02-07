import React from 'react';
import FriendsZone from './FriendsZone';
import SearchBar from './SearchBar';
import SidebarTopbar from './SidebarTopbar';

const Sidebar = () => {
  return <div className='bg-body w-[35%] h-[100%] rounded-tl-2xl rounded-bl-2xl'>
  <SidebarTopbar/>
  <SearchBar/>
  <FriendsZone/>
  </div>;
};

export default Sidebar;
