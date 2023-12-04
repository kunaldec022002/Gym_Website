import Navbar from '../../Components/Navbar/Navbar';
import './Service.css';
import React, { useState, useEffect } from 'react';
import ServiceImg from './img/service-img.jpg'

const Service = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');

  // Load services from local storage on component mount
  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    setServices(storedServices);
  }, []);

  // Save services to local storage whenever the services state changes
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  const addService = () => {
    if (newService.trim() !== '') {
      setServices([...services, newService]);
      setNewService('');
      alert("Service Added Successfully")
    }
  };

  return (
        <div>
            <Navbar/>

            <div>
                <img src={ServiceImg} className='service-img'/>
            </div>
            <div className='Service-container'>
                
             
             <ul>
                {services.map((service, index) => (
                <li className='services' key={index}>{service}</li>
                ))}
             </ul>
                <div>
                    <input
                    type="text"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className='service-text'
                    placeholder='Enter Service'
                    />
                    <button onClick={addService} className='service-btn'>Add Service</button>
                </div>
            </div>
        </div>    
  );
};

export default Service;
