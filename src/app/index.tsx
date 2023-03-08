import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/ContactPageComponents/Footer";
import Header from "../components/ContactPageComponents/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import { getACep } from "../services/getACep";
import { AuthProvider } from "../context/authContext";
import { GlobalStyle } from "../styles/global";
import Contact from "../pages/Contact/Index";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <GlobalStyle />
          <Routes>
 
            <Route element={<Home />} path={"/"} />
            <Route element={<About />} path={"/about"} />
            <Route element={<Contact />} path={"/Contact"} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
