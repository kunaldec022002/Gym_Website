import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import BrandImg from './img/brand-img.png'

function Navbar(){
    return(

        <nav class="navbar navbar-expand-lg" id="nav-container">
            <div class="container-fluid">
              <img src={BrandImg} className="brand-img"/>
              <Link to="/" class="navbar-brand">FITCLUB</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse link-container" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

                  <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/class" class="nav-link">Classes</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/membership" class="nav-link">Membership</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/training" class="nav-link">Personal Tranning</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/Career" class="nav-link">Careers</Link>
                  </li>
                 
                </ul>
                <form class="d-flex" role="search">
                  <Link to="/signup" className="btn signup">Signup</Link>
                  <Link to="/login" className="btn login">login</Link>
                </form>
              </div>
            </div>
        </nav>
        

         
    )
}

export default Navbar