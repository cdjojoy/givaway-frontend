import React from "react";
import { useEffect, useState } from "react";
import PhotoList from "../PhotoList";




 const Products = () => {

    const [products, setProducts] = useState ([]);
    
    

    useEffect( () => {
        //fetch("https://dummyjson.com/products")
        fetch("./data/productsData.json")
        //fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(products => setProducts(products));
      
    }, []);

return (
    <main>
    <div className="product">
        { products.map((product) => {
        return (
          <PhotoList
            key={product.id}
            product={product}
            image={product.image}
           title={product.title}
           description={product.description}
           price={product.price}
           button={product.button}
          />
        );
    })}
    </div>
  </main>
  );
}

export default Products;
