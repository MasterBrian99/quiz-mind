import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="login" element={<LoginScreen />} />
    </Routes>
  );
};

export default MainRouter;
