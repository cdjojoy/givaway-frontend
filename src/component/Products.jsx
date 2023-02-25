import React from "react";
import { useEffect, useState } from "react";
import PhotoList from "./PhotoList";


 const Products = () => {

    const [products, setProducts] = useState ([]);
    

    useEffect( () => {
        fetch("https://dummyjson.com/products")
          .then(response => response.json())
          .then(products => setProducts(products.products));
    }, []);

    //const productsComp =
return (
    <main>
    <h1>I am array of photos</h1>
    <div className="product">
        { products.map((product) => {
        return (
          <PhotoList
            key={product.id}
            product={product}

          />
        );
    })}
    </div>
  </main>
  );
}

export default Products;
