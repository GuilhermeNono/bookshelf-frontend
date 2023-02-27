import './App.css'
import { GlobalStyle } from "./styles/global";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
