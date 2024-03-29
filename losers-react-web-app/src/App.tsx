import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HomePage from './Pages/HomePage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<HomePage/>} />
      </Routes>
    </HashRouter>

  );
}

export default App;
