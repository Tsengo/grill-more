import React from "react";
import AboutUs from "./AboutUs";
import './About.css';
import Delivery from "./Delivery";

const About = () => {
    return (
        <div id="AboutUs">
            <h1>About US</h1>
            <AboutUs />
            <h1>Delivery</h1>
            <Delivery />
        </div>
    )
}

export default About;