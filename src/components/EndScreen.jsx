import { useLocation } from "react-router-dom";
import React, { useState } from "react";

const EndScreen = () => {
  const location = useLocation();
  const password = location.state?.password || "N/A"; // Get password from navigation state
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2 sec
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Palju Õnne! 🎉</h2>
      <p className="text-lg mt-4">Olete loonud endale tugeva parooli</p>
      
      {/* Parooli kast ja kopeerimisnupp */}
      <div className="flex items-center justify-between w-96 mt-2">
        <div className="bg-gray-700 p-2 rounded-md flex-1 text-xl text-center">{password}</div>
        <button 
          onClick={handleCopy}
          className="ml-4 bg-[#3BE489] hover:bg-[#2DBF73] text-white font-bold py-1 px-3 rounded-md"
        >
          📋 Kopeeri
        </button>
      </div>

      {copied && <p className="mt-2 text-green-400">Copied to clipboard!</p>}


    </div>
  );
};

export default EndScreen;
