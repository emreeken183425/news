import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h1>BK MOBİL HABER</h1>
          </Link>
          <div className="d-flex text-white align-items-center ">
          <Link to="/" className="navbar-brand text-white">
            <h5>ANASAYFA</h5>
          </Link>
          <Link to="/favoriler" className="navbar-brand text-white">
            <h5>FAVORİLER</h5>
          </Link>
        
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
