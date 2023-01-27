import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import{ImSearch} from "react-icons/im"

function Header() {
 
  return (
    <nav className="header">
      <img src={logo} alt="logo header" />
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="">Movies</Link>
        <Link to="">Recently Added</Link>
        <Link to="">My List</Link>
      </div>
      <ImSearch/>
    </nav>
  );
}

export default Header;
