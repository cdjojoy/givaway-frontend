import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  
  return (
    <nav className="nav-bar">
     
        <h3 className="logo">Logo</h3>

        <ul 
        className={ mobile ? "nav-links-mobile" : "nav-links"}
        onClick= {() => {setMobile(false); }}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/delivery">
            <li>Delivery</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/signup">
            <li>Sign UP</li>
          </Link>
        </ul>
    <button 
       className="mobile-menu-icon"
       onClick={() => {setMobile(!mobile)}}
    >
      {mobile ? <ImCross /> :  <FaBars />}
    </button>
      
    </nav>
  );
}

export default Navbar;
