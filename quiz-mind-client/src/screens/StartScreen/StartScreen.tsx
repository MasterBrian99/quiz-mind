import React from "react";

const StartScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-sky-200 start-screen">
      <div className="flex items-center justify-center ">
        <h1 className="text-6xl font-bold text-gray-600 heading-text">
          Start Your Game
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-20 ">
        <h2 className="text-3xl font-bold heading-text">
          Select Your Category
        </h2>
        <select className="h-16 px-2 mt-4 text-2xl font-bold border rounded-lg w-96 bg-gradient-to-tl from-sky-400 to-sky-200 focus:outline-none border-slate-600 heading-text">
          <option value="">Select an option&hellip;</option>
          <option value="aye">Aye</option>
          <option value="eh">Eh</option>
          <option value="ooh">Ooh</option>
          <option value="whoop">Whoop</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 ">
        <h2 className="text-3xl font-bold heading-text">Select Your Type</h2>
        <select className="h-16 px-2 mt-4 text-2xl font-bold border rounded-lg w-96 bg-gradient-to-tl from-sky-400 to-sky-200 focus:outline-none border-slate-600 heading-text">
          <option value="">Select an option&hellip;</option>
          <option value="aye">Aye</option>
          <option value="eh">Eh</option>
          <option value="ooh">Ooh</option>
          <option value="whoop">Whoop</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 ">
        <h2 className="text-3xl font-bold heading-text">
          Select Your Difficulty
        </h2>
        <select className="h-16 px-2 mt-4 text-2xl font-bold border rounded-lg w-96 bg-gradient-to-tl from-sky-400 to-sky-200 focus:outline-none border-slate-600 heading-text">
          <option value="">Select an option&hellip;</option>
          <option value="aye">Aye</option>
          <option value="eh">Eh</option>
          <option value="ooh">Ooh</option>
          <option value="whoop">Whoop</option>
        </select>
      </div>
      <button className="py-3 mt-4 font-bold bg-blue-400 rounded-lg w-96 text-extrawhite-300 heading-text">
        Start
      </button>
    </div>
  );
};

export default StartScreen;
