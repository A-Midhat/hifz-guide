//change the favicon 

import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
import PlanCard from "./components/PlanCard";
import MainCard from "./components/MainCard";
import Profile from "./pages/Profile";
import Counter from "./pages/Counter";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<><MainCard /><PlanCard/></>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer/>  
      </div>
    </Router>
  );
}
