import React, {useState,useEffect} from "react";
import Navbar from '../../Components/Navbar/Navbar';
import ContactImg from './img/contact-img.jpg'
import './Contact.css';
import Footer from "../../Components/Footer/Footer";

function  Contact  ()  {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile,setMobile] = useState('+91');
  
    useEffect(() => {
      // Load contacts from local storage when the component mounts
      const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      setContacts(storedContacts);
    }, []);
  
    const addContact = () => {
      if (name && email) {
        // Add a new contact and update local storage
        const newContact = { name, email, mobile };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        if(addContact===addContact)
        {
            alert('Add Contact Successfully');
        }
      
  
        localStorage.setItem('contacts', JSON.stringify(newContacts));
  
        // Clear input fields
        setName('');
        setEmail('');
        setMobile('');
      }
    };
  
    return (
      <div>
        <div>
          <Navbar/>
        </div>
          <div className="Contact-main">
            <div>
              <img src={ContactImg} className="contact-img"/>
            </div>
              <div className="contact-container">
              
                <div>
                  <label>Name:</label>
                  <input type="text" value={name} 
                      onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="input-text" />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="input-text" />
                </div>

                <div>
                    <label>Mobile:</label>
                    <input type="text" value={mobile}
                      onChange={(e)=> setMobile(e.target.value)} placeholder="Enter Mobile" className="input-text"/>
                </div>
                <button onClick={addContact} className="signup-btn">Add Contact</button>
              </div>
        </div>      

        <Footer/>
    
      </div>
    );
  };
  
  export default Contact;