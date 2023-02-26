import React from "react";
import { useEffect, useState } from "react";
import PhotoList from "./PhotoList";
import Products from './data/products.json';



 const Products = () => {

    const [products, setProducts] = useState ([]);
    

    useEffect( () => {
       // fetch("https://dummyjson.com/products")
        //  .then(response => response.json())
        //  .then(products => setProducts(products.products));
        setProducts(products.products.json)
    }, []);

    //const productsComp =
return (
    <main>
    <div className="product">
        { products.map((product) => {
        return (
          <PhotoList
            key={product.id}
            product={product}
            images={product.images}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
    })}
    </div>
  </main>
  );
}

export default Products;
