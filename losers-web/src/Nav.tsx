import { Link, useLocation } from "react-router-dom";
function Nav() {
      const { pathname } = useLocation();
      return (
            <nav className="nav nav-tabs mt-2">
                  <Link to="/Home"
                        className={`nav-link ${pathname.includes("Home") ? "active" : ""}`}>Home</Link>
                  <Link to="/Search  "
                        className={`nav-link ${pathname.includes("Search") ? "active" : ""}`}>Search</Link>
                  <Link to="/Profile"
                        className={`nav-link ${pathname.includes("Profile") ? "active" : ""}`}>Profile</Link>
                  <Link to="/Login"
                        className={`nav-link ${pathname.includes("Login") ? "active" : ""}`}>Login</Link>
                  <Link to="/Details"
                        className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}>Details</Link>
            </nav>
      );
}


export default Nav;