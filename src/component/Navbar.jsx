import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import { FaBars, FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  
  return (

    <div className="header">

      <form  action="submit" >
       <input  type="text" placeholder="Givaway..." />
       <button ><FaSearch /></button>
      </form>
      
     <nav className="nav-bar">
       <h3 className="logo">Logo</h3>
        <ul 
        className={ mobile ? "nav-links-mobile" : "nav-links"}
        onClick= {() => {setMobile(false); }}
        >
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/services"><li>Services</li></NavLink>
          <NavLink to="/products"><li>Products</li></NavLink>
          <NavLink to="/cart"><li>Cart</li></NavLink>
          <NavLink to="/delivery"><li>Delivery</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
          <NavLink to="/signup"><li>Sign UP</li></NavLink>
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
