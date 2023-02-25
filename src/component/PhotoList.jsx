import React from "react";

export default function PhotoList ( { product }) {
   //console.log(product);
   return(
    <section className="main-navbar">
        <form className="photo-list">
            <img
               src={product.images[0]}
               alt={product.title} 
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button>Add to cart</button>
        </form>  
    </section>
  );
}