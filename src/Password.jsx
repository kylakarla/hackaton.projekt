import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState(0); // Track current stage number
  const navigate = useNavigate(); // Hook for navigation

  const HandleSubmit = () => {
    console.log("Parool sisestatud: ", password);
    setStage((prev) => prev + 1); // Move to the next stage
    navigate(`/Stage${stage + 1}`); // Navigate dynamically
  };

  return (
    <div className="flex flex-col w-full text-center justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-4/6 text-center justify-center">
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sisesta parool"
        />
        <div>
          <button
            onClick={HandleSubmit}
            className="mt-4 bg-[#3BE489] hover:bg-[#2DBF73] text-white font-semibold py-2 px-4 rounded-full w-1/6 inline-block"
          >
            Jätka
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2>Või vajuta "Enter"</h2>
      </div>
    </div>
  );
}

export default Game;
