import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from '@firebase/auth';

const Login = () => {
  const name = "Let's Chat";
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-6xl text-logo mb-4">
        Welcome to <span className="text-btn italic font-bold">{name}</span>
      </h1>
      <h3 className="text-2xl text-gray-400 mb-4">
        Sign in to connect with your Friends
      </h3>

      <div
        onClick={signInWithGoogle}
        className="cursor-pointer rounded-xl flex items-center justify-center w-96 h-16 bg-logo hover:bg-btn"
      >
        <FcGoogle className="text-3xl font-bold" />
        <span className="text-3xl text-white font-bold ml-2">
          Sign in with Google
        </span>
      </div>
    </div>
  );
};

export default Login;
