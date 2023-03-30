import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pricing from "../pages/Pricing";
import { GlobalStyle } from "../styles/global";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<About />} path={"/about"} />
          <Route element={<Login />} path={"/Login"} />
          <Route element={<Pricing />} path={"/Pricing"} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
