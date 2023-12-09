import React, { useState } from "react";
import './Membership.css'
import MembershipImg from './img/membership.jpg'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Membership (){



            const [name, setName] = useState('');
            const [email, setEmail] = useState('');

            const handleSubmit = (e) => {
                e.preventDefault();

                // Store user data in local storage
                const userData = { name, email };
                localStorage.setItem('userData', JSON.stringify(userData));

                if (userData===userData){
                    alert('Join Successfully');
                    
                }


                // Optional: You can also send the data to a server or perform other actions here

                // Clear form fields
                setName('');
                setEmail('');
            };

            return (

                <div>

                    <Navbar/>

                    <div class="card text-bg-dark">
                      <img src={MembershipImg} class="card-img"/>
                      <div class="card-img-overlay">
                        <h1 className="text-white">Membership</h1>
                        <h3 className="text-white">We are all about you and it's our privilege to serve you.</h3>
                       </div>
                    </div>



                        <div className="membership-class">

                            <h1 className="mem-head">SERVING THE COMMUNITY FOR #19YEARS FOR THEIR FITNESS AND WELL-BEING.</h1>

                           
                            

                            <div className="membership-container">
                                <h1 className="text-center">Sign-Up Today!</h1>
                                <form onSubmit={handleSubmit}>
                                <label> Name: </label>
                                
                                    <input type="text"
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="membership"
                                    placeholder="Enter Name"
                                    />
                                
                                <label>  Email:  </label>
                                
                                    <input type="email"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="membership"
                                    placeholder="Enter Email"
                                    />
                                
                                <br />
                                <input type="checkbox"/>
                                <span> I am interested in a Membership at FitClub</span>
                                
                                <button type="submit"
                                className="join-today">Join Today</button>
                                </form>
                            </div>
                            

                        </div>  

                        <div>
                            <Footer/>
                        </div>

                </div>  
            );
};

      
export default Membership;