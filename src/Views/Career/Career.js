import React, {useState,useEffect} from "react";
import showToast from 'crunchy-toast';
import './Career.css';
import Footer from "../../Components/Footer/Footer";
import Navbar from '../../Components/Navbar/Navbar';
import Logo from './img/logo.jpg';


function Career (){
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
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
        if (!formData.name || !formData.email || !formData.number) {
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
          name: '',
          email: '',
          number: '',
        });
    
        alert('Submit  successful!');
        
      };

    return(
        <div>
            <Navbar/>
            
                <div class="card text-bg-dark">
                      <img src={Logo} class="card-img"/>
                </div>

                <div className="Career">

                            <div>
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.210339513624!2d72.81450375541992!3d19.138227800000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b769baa9d761%3A0x504b5a20fb2cf18f!2sFitness%20Factory%20Andheri%2FBest%20gym%20in%20Andheri!5e0!3m2!1sen!2sin!4v1701963338325!5m2!1sen!2sin"
                                  width="600" height="450"  allowfullscreen="" 
                                  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                  <h1>Location</h1>
                            </div>
                      
                          <div className="signup-container">
                            
                            <h2 className="text-center">Apply Now !</h2>
                            <form onSubmit={handleSubmit}>
                                <label>
                                Name:
                                <input
                                    placeholder="Enter Username"
                                    className="input-text"
                                    type="text"
                                    name="name"
                                    value={formData.name}
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
                                Number:
                                <input
                                    placeholder="Enter Number"
                                    className="input-text"
                                    type="text"
                                    name="number"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br/><br/>


                                <input type="checkbox"/>
                                
                                <span className="span">I want to apply for a employment opportunity<br/> at FITCLUB Gym, Andheri West - Mumbai</span>


                                <br />
                                <button type="submit" className="signup-btn">Submit</button>
                            </form>
                          </div>

                </div>

                <Footer/>




        </div>
    )
}

export default Career;