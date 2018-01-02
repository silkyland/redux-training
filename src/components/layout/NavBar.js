import React from "react";
import { Link, withRouter } from "react-router-dom";
const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            หน้าหลัก
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            ผู้ใช้งาน
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default withRouter(NavBar);
