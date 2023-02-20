import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return(
        <section className="nav-bar">
           <h1>Welcome to Navbar Page</h1>

           <nav className="nav-bar">
            <h3 className="logo"> Logo</h3>
            <ul className="nav-links">
              <Link to="/"><li>Home</li></Link>
              <Link to="/services"><li>Services</li></Link>
              <Link to="/products"><li>Products</li></Link>
              <Link to="/cart"><li>Cart</li></Link>
              <Link to="/delivery"><li>Delivery</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/signup"><li>Sign UP</li></Link>
            </ul>
           </nav>
        </section>
    );
}

export default Navbar;
