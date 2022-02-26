import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SigninScreen from "../screens/SigninScreen/SigninScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="login" element={<SigninScreen />} />
      <Route path="signup" element={<SignupScreen />} />
    </Routes>
  );
};

export default MainRouter;
