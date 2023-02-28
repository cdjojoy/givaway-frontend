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
           <form onSubmit={handleSubmit} className="signup-form">
            <h1>Sign Up</h1>
            <div>
            <label>
                First name:
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
            </label>
            </div>
            <div>
            <label>
                Last name:
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
            </label>
            </div>
            <div>
            <label>
                Email:
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
            </label>
            </div>
            <div>
            <label>
                Password:
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
            </label>
            </div>
            <button type="submit">Submit</button>
           </form>
        </section>
    );
}

export default SignUp;
