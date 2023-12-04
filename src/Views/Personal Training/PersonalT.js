import React, {useState} from 'react';
import './PersonalT.css';
import TraningImg from './img/traning img.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Traner from './img/personal traner.webp';


function PersonalTraning (){

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

    return(
        <div>
            <Navbar/>

                    <div class="card text-bg-dark">
                      <img src={TraningImg} class="card-img"/>
                      <div class="card-img-overlay">
                        <h1 className="text-white-traning"><b>PERSONAL TRAINING</b></h1>
                        <h3 className="text-white-traning">Certified Personal Traners.</h3>
                       </div>
                    </div>

                        <div className="membership-class">

                            <h1>YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE.
                            YOUR PERSONAL TRAINING SHOULD REFLECT THAT!</h1>

                           
                            

                            <div className="membership-container">
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

                    
                        <div className="membership-class">

                            <h1>
                                TAKE YOUR FITNESS TO THE NEXT LEVEL WITH OUR CERTIFIED PERSONAL TRAINERS.
                            </h1>

                            <img src={Traner} className='traner-img'/>

                        </div> 
        </div>
    )
}

export default PersonalTraning;