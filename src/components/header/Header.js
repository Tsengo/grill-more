import React from "react";
import Logo from './Logo';
import Menu from './Menu';
import Call from "./Call";
import './Header.css';
import Slider from './Slider';


const Header = () => {
    return (
        <div id="Home" className="Top-header">
            <Slider className="Big-Slider" />
            <div style={{position:'fixed', width: '100%'}}>
                <div className="head">
                    <Logo />
                    <Menu />
                    <div className="call">
                        <Call />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;