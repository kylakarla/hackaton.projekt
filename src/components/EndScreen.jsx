import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const onStart = () => {
  console.log('Next stage started');
};

const EndScreen = () => {
  const location = useLocation();
  const password = location.state?.password || "N/A"; // Get password from navigation state
  const [copied, setCopied] = useState(false);
  const [breachMessage, setBreachMessage] = useState("Checking password security...");

  useEffect(() => {
    checkPasswordBreach(password);
  }, [password]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2 sec
    });
  };

  const checkPasswordBreach = async (password) => {
    if (password === "N/A") return;

    // Convert password to SHA-1 hash
    const hashed = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(password));
    const hashHex = Array.from(new Uint8Array(hashed)).map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
    const prefix = hashHex.substring(0, 5);
    const suffix = hashHex.substring(5);

    try {
      const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      const data = await response.text();
      
      if (data.includes(suffix)) {
        setBreachMessage("🚨 Warning! This password has been found in data breaches. Choose a stronger one!");
      } else {
        setBreachMessage("✅ Safe! This password has not been found in any known breaches.");
      }
    } catch (error) {
      console.error("Error checking password breach:", error);
      setBreachMessage("⚠️ Unable to check password security. Please try again later.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Congratulations! 🎉</h2>
      <p className="text-lg mt-8">You have successfully made a strong password</p>
      
      {/* Password Box & Copy Button */}
      <div className="flex items-center justify-between w-96 mt-2">
        <div className="bg-gray-700 p-2 rounded-md flex-1 text-xl text-center">{password}</div>
        <button 
          onClick={handleCopy}
          className="ml-4 bg-[#3BE489] hover:bg-[#2DBF73] text-white font-bold py-1 px-3 rounded-md"
        >
          📋 Copy
        </button>
      </div>

      {copied && <p className="mt-2 text-green-400">Copied to clipboard!</p>}

      {/* Password Breach Check Message */}
      <p className="mt-4 text-lg font-semibold">{breachMessage}</p>

      
      {/* Play Again Button */}
      <Link 
        to="/Stage0" 
        onClick={onStart}
        className="bg-[#3BE489] hover:bg-[#2DBF73] text-white font-bold py-2 px-4 rounded-md mt-8"
      >
        🔄 Play again
      </Link>
    </div>
  );
};

export default EndScreen;
