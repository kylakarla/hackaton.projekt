import React from "react";
import { Link } from "react-router-dom";
import Game from "../Password.jsx"

const Stage0 = () => {
    const onStart = () => {
        console.log('ok')
      };
      return (
        <>
          <div className="flex justify-center mt-4">

          </div>
          <div className="flex justify-center">
            <Game />
          </div>
        </>
    )
}

export default Stage0;