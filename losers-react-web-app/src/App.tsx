import { Navigate, Route, Routes } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import HomePage from './Home';
import Test from './TestPages';
import LoginPage from './Login';
import ProfilePage from './Profile';
import SearchPage from './Search';
import DetailsPage from './Details';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/Search" element={<SearchPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Profile" element={<ProfilePage/>} />
          <Route path="/Details" element={<DetailsPage/>} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;