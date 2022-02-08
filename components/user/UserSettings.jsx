import React from 'react';
import {signOut} from '@firebase/auth'
import { auth } from '../../firebase';

const UserSettings = () => {
  return (
    <div className="absolute top-4 right-4 w-32 h-40">
      <span onClick={signOut(auth)}>LogOut</span>
    </div>
  );
};

export default UserSettings;
