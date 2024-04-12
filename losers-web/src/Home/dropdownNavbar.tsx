import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Link } from 'react-router-dom';
import {FaRegUserCircle } from "react-icons/fa";


function DropdownNavbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark" >
      <span>
        <a className="nav-layout navbar-brand" href="#">Navbar</a>
        <button className="nav-layout navbar-toggler" type="button" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

      </span>
      <Link to={""} className="icon navbar-brand float-end" >
        <FaRegUserCircle className="fs-3" /> </Link>


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
        <form role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
  );
}

export default DropdownNavbar;
