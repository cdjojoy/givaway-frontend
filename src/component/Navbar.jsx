import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import { FaBars} from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  
  return (
   
    <div className="header">
      <nav className="nav-bar">
       <h3 className="logo">Logo</h3>
        <ul 
        className={ mobile ? "nav-links-mobile" : "nav-links"}
        onClick= {() => {setMobile(false); }}
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
          <li><NavLink to="/delivery">Delivery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/signup">Sign UP</NavLink></li>
        </ul>
      <button 
       className="mobile-menu-icon"
       onClick={() => {setMobile(!mobile)}}
      >
      {mobile ? <ImCross /> :  <FaBars />}
      </button>
      </nav>
    </div>
 );
}

export default Navbar;
