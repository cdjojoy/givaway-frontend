import React from "react";
import Image from "../Image";


 const Services = () => {
    return(
        <div className="main-navbar">
           <h2>Our Customers</h2>
           <section className="image-grid">
            <Image 
             src="/images/flowers.png"
             alt="Flowers"
            />
            <Image 
             src="/images/animal.png"
             alt="Animal"
            />
            <Image 
             src="/images/butcher.png"
             alt="Butcher"
            />
            <Image 
             src="/images/fashion.png"
             alt="Fashion"
            />
            <Image 
             src="/images/gadget.png"
             alt="Gadget"
            />
            <Image 
             src="/images/groceries.png"
             alt="Groceries"
            />
            <Image 
             src="/images/toys.png"
             alt="Toys"
            />
           </section>

        </div>
    );
}

export default Services;
