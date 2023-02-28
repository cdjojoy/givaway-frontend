import React, { useState, useEffect } from "react";





//import SearchBox from "./SearchBox";

 const Home = ({id, image, description, price, title}) => {
   //Data inputs
   const [products, setProducts] = useState ([]);
   const [searchInputs, setSearchInput] = useState ('');
   
   
  const handleSearch = () => {
    const searchInput = e.target.value;
    setSearchInput(searchInput); 

    
  };

  //filter products based on search Input
  const filteredProducts = products.filter( (product) => 
  product.name.toLowerCase().includes(product.toLowerCase()));

  useEffect( () => {
    fetch("./data/productsData.json")
      .then(response => response.json())
      .then(products => setProducts(products));
  
}, []);

   const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
   };
 
  return (
    <div>
      <h1>Product Search</h1>
      <input 
          className="search"
          type="Search" 
          aria-label="search"
          placeholder="Search Products" 
          onChange={handleSearch} 
          value={searchInputs} />

      <div className="products-container">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;