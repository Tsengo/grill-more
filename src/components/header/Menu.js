import React, { useState } from "react";
import './Menu.css';
import { Link } from "react-scroll";
import Grill from '../../img/Grill-Burger.png';


const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const [toggleTab, setToggleTab] = useState(1);
    const tabToggle = (index) => {
        setToggleTab(index);
    }
    return (
        <div>
            <ul id="Home" className="Top-list">
                <li><Link to="Home" className={toggleTab === 1 ? 'active' : ''} onClick={() => tabToggle(1)} >
                    Home
                </Link></li>
                <li><Link to="Menu" className={toggleTab === 2 ? 'active' : ''} onClick={() => tabToggle(2)}>
                    
                    Menu
                </Link></li>
                <li><Link to="AboutUs" className={toggleTab === 3 ?'active':''}  onClick={() => tabToggle(3)}>
                    About Us
                </Link></li>
            </ul>
                <div className="full-burger">
                <div className={`burger burger-${toggle ? 'open' : "close"}`} onClick={handleToggle}>
                    <img src={Grill} alt="Grill"/>
                </div>
                    <div
                    className={`Burger-Menu Burger-Menu-${toggle ? 'open' : "close"}`} onClick={handleToggle}>
                        <ul>

                            <li><Link to="Home" className={toggleTab === 1 ?'active':''} onClick={() => tabToggle(1)} >
                                Home
                            </Link></li>
                            <li><Link to="Menu" className={toggleTab === 2 ? 'active' : ''} onClick={() => tabToggle(2)}>
                                
                                Menu
                            </Link></li>
                            <li><Link to="AboutUs" className={toggleTab === 3 ?'active':''}  onClick={() => tabToggle(3)}>
                                About Us
                            </Link></li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Header;