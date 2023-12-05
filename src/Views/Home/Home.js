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

                    </div>

                </div>


            </div>

            <Footer/>
        </div>
    )
}

export default Home;