import React from "react";
import { Link } from "react-router-dom";
import Browsecomponents from "../browse";
import Searchbar from "../searchbar";
// import logo from "../../assets/images/logo.png";
import "./index.css";
import Signupc from "../signupc";


function Navbar() {
  return (
    <nav className="nav_menu">
      {/* <Link to="/">
        <img src={logo} alt="Logo" />
      </Link> */}
      
      <div>
        <Link to="/">Home</Link>
        <Browsecomponents />
      </div>

      <div className="nav_right">
        <Searchbar />
        <Link to='/signup'>
          <Signupc />
        </Link>
       
      </div>
    </nav>
  );
}

export default Navbar;
