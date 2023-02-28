import React, { useState }from "react";

export default function PhotoList ( { product }) {
  const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
      setCart([...cart, product]);
    }
   return(
    <section className="main-navbar">
        <form className="photo-list">

          <div className="photo-parag">
            <img
               src={product.image}
               alt={product.title} 
            />
          </div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>€{product.price}</strong></p>
           
            <button 
            className="btn-cart"
            onClick={handleAddToCart}
            >Add to cart</button>
        </form>  
    </section>
  );
}