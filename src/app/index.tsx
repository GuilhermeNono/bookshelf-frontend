import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { getACep } from "../services/getACep";
import { AuthProvider } from "../context/authContext";
import { GlobalStyle } from "../styles/global";
import Pricing from "../pages/Pricing";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<About />} path={"/about"} />
            <Route element={<Login />} path={"/Login"} />
            <Route element={<Pricing />} path={"/Pricing"} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
