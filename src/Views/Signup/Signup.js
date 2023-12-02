import React, { useState } from "react";
import './Signup.css'
import SignupImg from './signup img.jpg';
import Navbar from "../../Components/Navbar/Navbar";


function Signup(){


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Basic form validation
        if (!formData.username || !formData.email || !formData.password) {
          alert('All fields are required');
          return;
        }
    
        // Check if the user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find((user) => user.email === formData.email);
        if (existingUser) {
          alert('User with this email already exists');
          return;
        }
    
        // Save the user data to local storage
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
    
        // Reset the form
        setFormData({
          username: '',
          email: '',
          password: '',
        });
    
        alert('Signup successful!');
        window.location.href ="/login"
      };
    
      return (
        <div>
            <Navbar/>
                    <div className="main-class2">
                      <img src={SignupImg} className="loginimg2"/>
                          <div className="signup-container">
                            <h2 className="text-center">Signup</h2>
                            <form onSubmit={handleSubmit}>
                                <label>
                                Username:
                                <input
                                    placeholder="Enter Username"
                                    className="input-text"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br />
                                <label>
                                Email:
                                <input
                                    placeholder="Enter Email"
                                    className="input-text"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br />
                                <label>
                                Password:
                                <input
                                    placeholder="Enter Password"
                                    className="input-text"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br />
                                <button type="submit" className="signup-btn">Signup</button>
                            </form>
                            <p className="text-center">Already User? Please <a href="/login">Login</a></p>
                          </div>
                    </div>
        </div>            
      );
    };
    

export default Signup;