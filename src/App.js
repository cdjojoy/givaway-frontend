import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './component/Home';
import Services from './component/Services';
import Products from './component/Products';
import Cart from './component/Cart';
import Delivery from './component/Delivery';
import Contact from './component/Contact';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="App">
      Joy's Project
      <Router>
      <Navbar />
      
       <Switch>
         <Route path='/' component ={Home} exact><Home/></Route>
         <Route path='/services' component ={Services} exact><Services/></Route>
         <Route path='/products' component ={Products} exact><Products/></Route>
         <Route path='/cart' component ={Cart} exact><Cart/></Route>
         <Route path='/delivery' component ={Delivery} exact><Delivery/></Route>
         <Route path='/contact' component ={Contact} exact><Contact/></Route>
         <Route path='/signup' component ={SignUp} exact><SignUp/></Route>
       </Switch>
      </Router>
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >Learn React
        </a>
      </header>

    </div>
  );
}

export default App;

