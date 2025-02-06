import React, { useState, useEffect } from "react";
import "./Loader.css";
import { CiPlay1 } from "react-icons/ci";
import Typewriter from 'typewriter-effect';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-2 w-9/12">
        <div
          className="animeBox rounded-l-lg p-2 border bg-white/10 flex items-center justify-center text-gray-800 text-sm font-medium"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hey chat crée moi le meilleur portfolio')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .changeDelay(10)
                .pauseFor(2500)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </div>

        <div className="flex items-center justify-center h-full p-2 animePlay border rounded-lg">
          <CiPlay1 size={30} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
