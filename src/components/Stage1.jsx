import React from "react";
import { Link } from "react-router-dom";
import Game from "../Password.jsx"

const Stage1 = () => {
    const onStart = () => {
        console.log('ok')
      };
      return (
        <>
          <div className="flex justify-center mt-4">
            <Link
              to="/Stage2"
              onClick={onStart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </Link>
          </div>
          <div className="flex justify-center">
            <Game />
          </div>
        </>
    )
}

export default Stage1;