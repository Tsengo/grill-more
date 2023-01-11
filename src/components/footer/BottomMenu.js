import React, { useState } from "react";
import { Link } from "react-scroll";

import '../header/Menu.css';

const BottomMenu = () => {
    const [toggleTab, setToggleTab] = useState(3);
    const tabToggle = (index) => {
        setToggleTab(index);
    }
    return (
        <div >
            
            <ul className="Top-list">
                <li><Link to='Home' className={toggleTab === 1 ?'active':''} onClick={() => tabToggle(1)} >
                    Home
                </Link></li>
                <li><Link to='Menu' className={toggleTab === 2 ? 'active' : ''} onClick={() => tabToggle(2)}>
                    
                    Menu
                </Link></li>
                <li><Link to='AboutUs' className={toggleTab === 3 ?'active':''}  onClick={() => tabToggle(3)}>
                    About Us
                </Link></li>
            </ul>
        </div>
    )
}

export default BottomMenu;