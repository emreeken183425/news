import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h1>BK MOBİL NEWS</h1>
          </Link>
          <div className="d-flex text-white align-items-center ">
          <Link to="/" className="navbar-brand text-white">
            <h5>HOME PAGE</h5>
          </Link>
          <Link to="/favoriler" className="navbar-brand text-white">
            <h5>FAVORITES</h5>
          </Link>
        
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
