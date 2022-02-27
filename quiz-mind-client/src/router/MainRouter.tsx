import React from "react";
import { Routes, Route } from "react-router-dom";
import GameScreen from "../screens/GameScreen/GameScreen";
import MainScreen from "../screens/MainScreen";
import SigninScreen from "../screens/SigninScreen/SigninScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import StartScreen from "../screens/StartScreen/StartScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="login" element={<SigninScreen />} />
      <Route path="signup" element={<SignupScreen />} />
      <Route path="start" element={<StartScreen />} />
      <Route path="game" element={<GameScreen />} />
    </Routes>
  );
};

export default MainRouter;
