import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import StudentRegistration from "./components/student/StudentRegistration";
//import StartScholarship from "./components/StartScholarship";

import LandingPage from "./components/landing/LandingPage"
import { Routes, Route, Link } from "react-router-dom";
export const AccountContest = React.createContext("light");

const App = () => {

  useEffect(() => {
  }, []);

  return (
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<StudentRegistration />} />
      </Routes>
  );
};
export default App;
