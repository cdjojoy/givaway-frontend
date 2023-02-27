import React, { useState }from "react";

export default function PhotoList ( { product }) {
  const [cart, setCart] = useState([]);

    const handleAdToCart = (product) => {
      setCart([...cart, product]);
    }
   return(
    <section className="main-navbar">
        <form className="photo-list">
            <img
               src={product.image}
               alt={product.title} 
            />
            <div className="photo-parag">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>€{product.price}</strong></p>
            </div>
            <button 
            className="btn-cart"
            onClick={handleAdToCart}
            >Add to cart</button>
        </form>  
    </section>
  );
}