import { Navigate, Route, Routes } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import HomePage from './Home';
import Test from './TestPages';
import LoginPage from './Users';
import Profile from './Users/Profile';
import SearchPage from './Search';
import DetailsPage from './Details';
import RegisterPage from './Register';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/Search" element={<SearchPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Register" element={<RegisterPage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Details" element={<DetailsPage/>} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;