import React from "react";
import './AboutUs.css';
import image4 from './../../img/image 4.png'; 
import image38 from './../../img/image 38.png'; 
import image16 from './../../img/image 16.png'; 


const AboutUs = () => {
    return (
        <div  className="About-wrap">

            <div className="photos">
                <img src={image4} alt="image" />
                <div className="column-photo">
                    <img src={image38 } alt="image"/>
                    <img src={image16 } alt="image"/>
                </div>
            </div>
            <p className="About-txt">
            Grilled premium quality beef and unforgettable flavor of special sauce Grilled premium quality beef and unforgettable flavor of special sauce
            </p>
        </div>
    )
}

export default AboutUs;