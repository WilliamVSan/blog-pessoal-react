import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterUser from "./pages/registerUser/RegisterUser";

import "./App.css";

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh' }}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usuarios/logar" element={<Login />} />          
          <Route path="/usuarios/cadastrar" element={<RegisterUser />} />          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
