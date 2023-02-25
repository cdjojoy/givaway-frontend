import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

export default function PhotoList () {
    //Data inputs and side effects
    const [products, setProducts] = useState ([]);
    //const {id} = useParams();

    useEffect( () => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(products => setProducts(products));
    }, []);

    return(
         <main>
            <h1>I am array of photos</h1>
            <div className="photo-list">
                {products.map((product) =>(
                    <Products
                     key ={product.id}
                     product ={product}
                    />
                ))}

            </div>
          </main>
   );
}