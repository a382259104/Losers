import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./index.css";

function DropdownNavbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark" >
      <a className="nav-layout navbar-brand" href="#">Navbar</a>
      <button className="nav-layout navbar-toggler" type="button" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-dropdown-layout nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-dropdown-layout nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-dropdown-layout nav-item">
            <a className="nav-link" href="#">Something else</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DropdownNavbar;
