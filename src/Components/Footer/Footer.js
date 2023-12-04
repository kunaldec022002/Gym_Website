import React from "react";
import {Link} from "react-router-dom"
import './Footer.css';
import FitClubImg from '../../Views/Membership/img/club-img.jpeg';
import GitHub from './icon/github-sign.png';
import Gmail from './icon/gmail (1).png'
import Google from './icon/google-maps.png';
import Insta from './icon/instagram (3).png'

function Footer(){
    return(
        <div>
            <div className="footer-container">
                <div>
                    <h3>FITCLUB</h3>
                    <div>
                        <img src={FitClubImg} className="footer-club-img"/>
                    </div>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <p><Link to="/service" className="quick-link">Service</Link></p>
                    <p><Link to="/class"  className="quick-link">Class</Link></p>
                    <p><Link to="membership"  className="quick-link">Membership</Link></p>
                    <p><Link to="/training"  className="quick-link">Personal Traning</Link></p>
                    <p><Link to="/signup"  className="quick-link">Signup</Link></p>
                    <p><Link to="/login"  className="quick-link">Login</Link></p>
                </div>

                <div>
                    <h3>Feedback</h3>

                    
                </div>

                <div>
                    <h3>Social Media</h3>
                    
                    <div className="footer-icon-container">
                        <a href="#"><img src={GitHub} className="footer-icons"/></a>
                        <a href="#"><img src={Gmail} className="footer-icons"/></a>
                       
                    </div>

                    <div>
                      <a href="#"><img src={Google} className="footer-icons"/></a>
                      <a href="#"><img src={Insta} className="footer-icons"/></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;