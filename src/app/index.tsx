import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<About />} path={"/about"} />
            <Route element={<Login />} path={"/Login"} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
