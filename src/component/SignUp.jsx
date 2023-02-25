import React, { useState } from "react";

 const SignUp = () => {
    const [formData, setFormData] = useState({
       //Data Inputs
       firstName: "",
       lastName: "",
       email: "",
       password: "",
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      //Submit the form using formData to SERVER
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.valeu,
        });

    };

    return(
        <section className="main-navbar">
           <form onSubmit={handleSubmit}>
            <labelhtml>
                First name:
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
            </labelhtml>
            <br />
            <labelhtml>
                Last name:
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
            </labelhtml>
            <br />
            <labelhtml>
                Email:
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
            </labelhtml>
            <br />
            <labelhtml>
                Password:
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
            </labelhtml>
            <br />
            <button type="submit">Submit</button>
           </form>
        </section>
    );
}

export default SignUp;
