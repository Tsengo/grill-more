import React from "react";
import logo from '../../img/Logo.png';
import '../header/Logo.css';
import './Links.css';

const Links = () => {
    return (
    <div className="links">            
        <div className="Top-Logo">
            <img src={logo} alt="logo"/>
        </div>
            <ul className="Socials">
                <li className="instagram"><a></a></li>
                <li className="facebook"><a></a></li>
        </ul>    
    </div>
    )
}

export default Links;