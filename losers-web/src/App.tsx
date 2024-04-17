import { Navigate, Route, Routes } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import HomePage from './Home';
import Test from './TestPages';
import LoginPage from './Users/login';
import Profile from './Users/profile';
import SearchPage from './Search';
import DetailsPage from './Details';
import RegisterPage from './Users/register';
import Details from './External_API/details';
import { Provider } from 'react-redux';
import store from './StateVariables/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Search" element={<SearchPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Details" element={<DetailsPage />} />
            <Route path="/ExternalAPI" element={<Details />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;