import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

import Home from './component/Home';
import Services from './component/Services';
import Products from './component/Products';
import Cart from './component/Cart';
import Delivery from './component/Delivery';
import Contact from './component/Contact';
import SignUp from './component/SignUp';



function App() {
  return (
  <div className= "App">
    <h1 className='App'>Products Givaway</h1>
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path='/' element ={<Home />} /> 
         <Route path='/services' element ={<Services />} />
         <Route path='/products' element ={<Products/>} />
         <Route path='/cart' element ={<Cart />}/>
         <Route path='/delivery' element ={<Delivery />} />
         <Route path='/contact' element ={<Contact />} />
         <Route path='/signup' element ={<SignUp/>} />
       </Routes> 
    </BrowserRouter>
  </div> 
  );
}

export default App;

