import { useReducer, useEffect } from "react";

// Define initial state
const initialState = { level: 0 };

// Reducer function
const securityReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LEVEL":
      return { level: action.payload };
    default:
      return state;
  }
};

const SecurityProgressBar = ({ password }) => {
  const [state, dispatch] = useReducer(securityReducer, initialState);

  // Function to calculate security level
  const calculateSecurityLevel = (password) => {
    let level = 0;
    if (password.length >= 8) level++;
    if (/[A-Z]/.test(password)) level++;
    if (/[a-z]/.test(password)) level++;
    if (/[0-9]/.test(password)) level++;
    if (/[^A-Za-z0-9]/.test(password)) level++;

    // Convert level (0-5) to a percentage (0-100)
    dispatch({ type: "UPDATE_LEVEL", payload: (level / 5) * 100 });
  };

  // Call function when password changes
  useEffect(() => {
    calculateSecurityLevel(password);
  }, [password]);

  // Determine the security message based on progress
  const getSecurityMessage = (progress) => {
    if (progress <= 20) return "🚨 Critical Risk! Hackers love weak passwords!";
    if (progress <= 60) return "⚠️ Medium Risk! Try adding more symbols.";
    return "🛡️ Strong! Your password is hacker-proof.";
  };

  return (
    <div className="w-full text-center">
      {/* Progress bar */}
      <div className="w-full bg-gray-300 rounded-full mt-4 mb-2">
        <div
          className={`h-4 rounded-full transition-all duration-300 ${
            state.level <= 20 ? "bg-red-500" : state.level <= 60 ? "bg-yellow-500" : "bg-green-500"
          }`}
          style={{ width: `${state.level}%` }}
        ></div>
      </div>
      {/* Security level message */}
      <p className="text-white font-semibold mb-4">{getSecurityMessage(state.level)}</p>
    </div>
  );
};

export default SecurityProgressBar;
