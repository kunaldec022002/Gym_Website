import React from "react";
import './Navbar.css';

function Navbar(){
    return(

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">FITCLUB</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse link-container" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Classes</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Membership</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Personal Tranning</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Service</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>

                </ul>
                <form class="d-flex" role="search">
                  <button class="btn btn-outline-success" type="submit">Signup</button>
                  <button class="btn btn-outline-success" type="submit">Login</button>
                </form>
              </div>
            </div>
        </nav>
        

         
    )
}

export default Navbar