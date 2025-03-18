import { useLocation } from "react-router-dom";
import React from "react";

const EndScreen = () => {
  const location = useLocation();
  const password = location.state?.password || "N/A"; // Get password from navigation state

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Palju Õnne! 🎉</h2>
      <p className="text-lg mt-4">Olete loonud endale tugeva parooli</p>
      <p className="text-xl mt-2 bg-gray-700 p-2 rounded-md">{password}</p>
    </div>
  );
};

export default EndScreen;