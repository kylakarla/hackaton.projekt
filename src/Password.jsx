import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Progress from "./Progress";

function Game() {
  const [password, setPassword] = useState("");
  const [completedStages, setCompletedStages] = useState(0);
    const [previousCompletedStages, setPreviousCompletedStages] = useState(0); // Track previous completed stages
  const navigate = useNavigate(); // Hook for navigation

  const validatePassword = (password) => {
    return [
      password.length >= 8, // ✅ At least 8 characters
      /[A-Z]/.test(password), // ✅ At least 1 uppercase letter
      /[a-z]/.test(password), // ✅ At least 1 lowercase letter
      /[0-9]/.test(password), // ✅ At least 1 number
      /[^A-Za-z0-9]/.test(password), // ✅ At least 1 special character
      password.length > 0 && !/(password|1234|qwerty)/i.test(password) // ✅ Not a common password
    ];
  };

  const requirementsMet = validatePassword(password);
  const currentStage = requirementsMet.findIndex((req) => !req); // Find first unmet requirement
  const canProceed = currentStage === -1; // ✅ All requirements met


  
  const handleSubmit = () => {
    if (canProceed) {
        setPreviousCompletedStages(completedStages); // Track previous completed stages
        setCompletedStages(requirementsMet.filter(Boolean).length); // Update completed stages
        console.log("Moving to next stage...");
        navigate("/EndScreen"); // Continue with navigation
    }
};
useEffect(() => {
  if (previousCompletedStages !== completedStages) {
      if (completedStages > previousCompletedStages) {
          alert("You gained a star!");
      } else if (completedStages < previousCompletedStages) {
          alert("You lost a star!");
      }
  }
}, [completedStages, previousCompletedStages]);


  return (
    <div className="flex flex-col w-full text-center justify-center items-center">
       <Progress stage={requirementsMet.filter(Boolean).length} />
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-4/6 text-center justify-center">
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sisesta parool"
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
          Lõpeta
        </button>
      </div>
    </div>
  );
}

export default Game;