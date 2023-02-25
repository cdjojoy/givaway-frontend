import React from "react";

 const Products = ( { product } ) => {
    return(
        <section className="main-navbar">
             <h1>Welcome to Products Page</h1>
            <form className="product">
                <img 
                   src={product.image}
                   alt={product.title} 
                />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <button>Add to cart</button>
            </form>
          
        </section>
    );
}

export default Products;
