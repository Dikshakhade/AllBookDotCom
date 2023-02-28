import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/Welcome";
import { Login } from "./components/Login/Login";
import Signup from "./components/Sign-up/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/welcome" element={<Welcome />}></Route>
    </Routes>
  );
};

export default App;
