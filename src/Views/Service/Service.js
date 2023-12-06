import Navbar from '../../Components/Navbar/Navbar';
import './Service.css';
import React, { useState, useEffect } from 'react';
import ServiceImg from './img/service-img.jpg'


const Service = () => {

  

  return (
        <div>
            <Navbar/>

            <div>
                <img src={ServiceImg} className='service-img'/>
            </div>
           
             <div>
              
             </div>
              
            
        </div> 
  );
};

export default Service;
