import React from "react";
import './Home.css'
import Dropdown from "../../Components/DropDown/Dropdown";
import Navbar from "../../Components/Navbar/Navbar";
import Homeimg from '../Home/img/home img.jpg'
import Homeimg2 from '../Home/img/home-img2.jpg'
import Homeimg3 from '../Home/img/home-img3.jpg'
import Homeimg4 from '../Home/img/home-img4.jpg'
import Homeimg5 from '../Home/img/home-img5.jpg'
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Trainer from './img/PT.jpeg'



function Home(){
    
    
    return(

        

        <div>
            <Navbar/>

            <div>
                
                <div>

                        
                <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Homeimg} className="card-img"/>
                            </div>
                            <div className="carousel-item">
                            <img src={Homeimg2} className="card-img"/>
                            </div>
                            <div className="carousel-item">
                            <img src={Homeimg3} className="card-img"/>
                            </div>
                            <div className="carousel-item">
                            <img src={Homeimg4} className="card-img"/>
                            </div>
                            <div className="carousel-item">
                            <img src={Homeimg5} className="card-img"/>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                            
                </div>

                <div>
                    <div className="bgColor">
                        <h2 className="text-center white">EXPERIENCE THE FITNESS WAVE <br/>AT FITCLUB FRIENDLIEST GYM!</h2>
                        <h1 className="text-center main-head">JOIN FITCLUB TODAY</h1>

                         <div className="dropdown-information"> 

                          <Dropdown/>

                        </div>

                        <h1 className="text-center">#19YEARS OF SERVICE TO THE FITNESS & WELNESS COMMUNITY.
                         #HEREFORYOU #HERETOSTAY</h1>

                    </div>

                    <div>
                        <ImageSlider/>
                    </div>

                    <div className="trainer-container">
                        <div>
                            <h5>YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!</h5>
                            <h1>CERTIFIED PERSONAL TRAINERS</h1>
                            <p>Our internationally certified gym trainers help accomplish your fitness and weight loss goals, quicker. 
                                They aid in guiding you through a balanced combination of cardio, aerobic exercise, strength, and weight training with the help of the latest training techniques, 
                                technology, and high-end fitness equipment. Our personal gym trainers help you turn the IMPOSSIBLE to I’M’POSSIBLE.</p>
                        </div>

                        <div>
                            <img src={Trainer} className="trainer-img-home"/>
                        </div>
                    </div>
                  

                </div>


            </div>

            <Footer/>
        </div>
    )
}

export default Home;