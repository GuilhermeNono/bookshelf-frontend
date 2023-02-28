import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import { getACep } from "../services/getACep";
import { AuthProvider } from "../context/authContext";
import { GlobalStyle } from "../styles/global";

function App() {
  const [first, setfirst] = useState("second");
  return (
    <div className="App">
      <AuthProvider value={{ first }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<About />} path={"/about"} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
