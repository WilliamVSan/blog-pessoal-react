import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterUser from "./pages/registerUser/RegisterUser";
import ListTheme from "./components/themes/listtheme/ListTheme";
import ListPost from "./components/Posts/listpost/ListPost";
import CreatePost from "./components/Posts/createPost/CreatePost";
import CreateTheme from "./components/themes/createTheme/CreateTheme";
import DeleteTheme from "./components/themes/deleteTheme/DeleteTheme";
import DeletePost from "./components/Posts/deletePost/DeletePost";
import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<RegisterUser />} />
            <Route path="/temas" element={<ListTheme />} />
            <Route path="/postagens" element={<ListPost />} />
            <Route path="/formularioPostagem" element={<CreatePost />} />
            <Route path="/formularioPostagem/:id" element={<CreatePost />} />
            <Route path="/formularioTema/" element={<CreateTheme />} />
            <Route path="/formularioTema/:id" element={<CreateTheme />} />
            <Route path="/deletarTema/:id" element={<DeleteTheme />} />
            <Route path="/deletarPostagem/:id" element={<DeletePost />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );

}
export default App;
