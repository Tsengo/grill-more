import React from "react";
import logo from '../../img/Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Top-Logo">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;