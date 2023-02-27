import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

import Home from './component/Pages/Home';
import Services from './component/Pages/Services';
import Products from './component/Pages/Products';
import Cart from './component/Pages/Cart';
import Delivery from './component/Pages/Delivery';
import Contact from './component/Pages/Contact';
import SignUp from './component/Pages/SignUp';
import PhotoList from './component/PhotoList';




function App() {

  return (
  <div className= "App">
    <h1 className='App'>Givaway your Items...</h1>
    
    <BrowserRouter>
      <Navbar />
      <div className='product-grid'>
       
      </div>
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

