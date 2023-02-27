import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Contact from "./pages/Contact/Index";

function App() {
  return (
    <div className="App">
      <h1></h1>

      <BrowserRouter>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
