import React from "react";
import { Link } from "react-router-dom";

const IntroScreen = () => {

  const onStart = () => {
    console.log('järgmine')
  };


  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center bg-white text-black p-6 rounded-2xl shadow-lg max-w-md">
        <h2 className="text-xl font-bold mb-2">Welcome!</h2>
        <p className="text-base mb-4">
        This game is for learning about cybersecurity! Learn to create strong passwords. When creating a password, avoid qwerty, password, 1234, and your own name.
        </p>
        <Link 
          to="/Stage0" 
          onClick={onStart}
          className="bg-[#3BE489] hover:bg-[#2DBF73] text-white px-4 py-2 rounded-lg">
          Play
        </Link>
      </div>
    </div>
  );
};

export default IntroScreen;