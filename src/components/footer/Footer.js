import React from "react";
import Links from "./Links";
import Contact from "./Contact";
// import BottomMenu from "./BottomMenu";
import Address from "./Address";
import './Footer.css';
// import '../../App.css';

const Footer = () => {
    return (
        <div  className="Footer_Content">
            <Links />
            <div className="footer-wrap">
                <Contact />
                {/* <BottomMenu /> */}
                <Address />
            </div>
        </div>
    )
}

export default Footer;