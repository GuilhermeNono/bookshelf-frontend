import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register";
import { GlobalStyle } from "../styles/global";

function App() {
    const path = window.location.pathname;

    const [hasHeader, setHasHeader] = useState(false);

    useEffect(() => {
      if(path === "/login" || path === "/register") {
        return setHasHeader(true);
      }
      return setHasHeader(false)
    }, [path])

    console.log(path)
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyle />
        {!hasHeader && <Header />}
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<About />} path={"/about"} />
          <Route element={<Login />} path={"/login"} />
          <Route element={<Register />} path={"/register"} />
          <Route element={<Pricing />} path={"/pricing"} />
        </Routes>
        {!hasHeader && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
