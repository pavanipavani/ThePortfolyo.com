import React from "react";
import './homepage.css';
import { Link } from "react-router-dom";

function Homepage(){
    return(
        <div>
            <div className="navbar">
                <div>
                    <img src="resources/portfolyo.png" alt="titleimage"/>
                </div>
                <div className="flex">
                    <Link className="border_removing" to="/herosection"><div className="display ">HeroSection</div></Link>
                    <Link className="border_removing" to="/testimonials"><div className="display">Testimonials</div></Link>
                    <Link className="border_removing" to="/project"><div className="display">Projects</div></Link>
                    <Link className="border_removing" to="/skills"><div className="display">Skills</div></Link>
                    <Link className="border_removing" to="/services"><div className="display">Services</div> </Link>
                    <Link className="border_removing" to="/socialhandles"><div className="display">SocialMediaHandles</div></Link>
                </div>
            </div>
            <div>
                <img className="portfoliyoimage" src="resources/portfolyoimage.png" alt="portpoliyoimage" />
            </div>
        </div>
    )
}
export default Homepage;