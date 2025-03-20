import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Progress from "./Progress";
import AdBanner from "./ADBanner";
import SecurityProgressBar from "./SecurityProgressBar";

function Game() {
  const [password, setPassword] = useState("");
  const [completedStages, setCompletedStages] = useState(0);
  const [previousCompletedStages, setPreviousCompletedStages] = useState(0);
  const [hackerAlert, setHackerAlert] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const commonPasswords = ["password", "1234", "qwerty", "letmein", "admin", "iloveyou", "parool","passw0rd" ];

  const validatePassword = (password) => {
    return [
      password.length >= 8, // At least 8 characters
      /[A-Z]/.test(password), // At least 1 uppercase letter
      /[a-z]/.test(password), // At least 1 lowercase letter
      /[0-9]/.test(password), // At least 1 number
      /[^A-Za-z0-9]/.test(password), // At least 1 special character
      password.length > 0 && !commonPasswords.includes(password.toLowerCase()) // Not a common password
    ];
  };

  const requirementsMet = validatePassword(password);
  const showAd = requirementsMet[3]; // Show ad when the number condition is met
  const currentStage = requirementsMet.findIndex((req) => !req);
  const canProceed = currentStage === -1;

  useEffect(() => {
    if (commonPasswords.includes(password.toLowerCase())) {
      setHackerAlert(true);
      setInputDisabled(true);

      // Fake hacking effect
      setTimeout(() => {
        setHackerAlert(false);
        setInputDisabled(false);
        setPassword(""); // Reset input
      }, 3000);
    }
  }, [password]);

  const handleSubmit = () => {
    if (canProceed) {
      setPreviousCompletedStages(completedStages);
      setCompletedStages(requirementsMet.filter(Boolean).length);
      console.log("End");
      navigate("/EndScreen", { state: { password } });
    }
  };

  return (
    <div className="flex flex-col w-full text-center justify-center items-center">
      <div className="w-4/6">
      <Progress stage={requirementsMet.filter(Boolean).length} />
      <SecurityProgressBar password={password} />
      </div>
      <div className={`bg-gray-800 p-6 rounded-lg shadow-lg w-4/6 text-center justify-center ${hackerAlert ? "animate-glitch" : ""}`}>
        {hackerAlert && (
          <div className="bg-red-700 text-white p-4 mb-4 font-bold text-lg animate-pulse">
            ⚠️ WEAK PASSWORD! SYSTEM LOCKDOWN... ⏳
          </div>
        )}

        <input
          ref={inputRef}
          type="text"
          className={`w-full p-2 rounded bg-gray-700 text-white focus:outline-none ${inputDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          disabled={inputDisabled}
        />

        <div className="mt-4">
          {[
            "At least 8 characters",
            "At least 1 uppercase letter",
            "At least 1 lowercase letter",
            "At least 1 number",
            "At least 1 special character",
            "Not a common password"
          ].map((text, index) => (
            <p key={index} className={requirementsMet[index] ? "text-green-500" : "text-red-500"}>
              {text}
            </p>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className={`mt-4 font-semibold py-2 px-4 rounded-full w-1/6 inline-block ${
            canProceed ? "bg-[#3BE489] hover:bg-[#2DBF73] text-white" : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!canProceed}
        >
          Finish
        </button>
      </div>

      <AdBanner showAd={showAd} />
    </div>
  );
}

export default Game;
