import React, { useState } from "react";
import './MainMenu.css';
// import {MainMenuData} from './MainMenuData'; 
import './../../App.css';
import MenuTable1 from "./MenuTable1";
import MenuTable2 from "./MenuTable2";
import MenuTable3 from "./MenuTable3";
import MenuTable4 from "./MenuTable4";

const MainMenu = () => {
    const [mainToggle, setMainToggle] = useState(1);
    const mainTabToggle = (index) => {
        setMainToggle(index);
    }
    return (
        <div className="main-menu">
            <ul >
                <li className={mainToggle === 1 ?'main-active':''} onClick={() => mainTabToggle(1)}><p>Burgers</p></li>
                <li className={mainToggle === 2 ?'main-active':''} onClick={() => mainTabToggle(2)}><p>Dishes</p></li>
                <li className={mainToggle === 3 ?'main-active':''} onClick={() => mainTabToggle(3)}><p>Deserts</p></li>
                <li className={mainToggle === 4 ?'main-active':''} onClick={() => mainTabToggle(4)}><p>Drinks</p></li>
            </ul>
            <div className="MenuTables">
                <div className={mainToggle === 1 ? "content  active-content" : "content"}>
                    <MenuTable1 />    
                </div>
                <div className={mainToggle === 2 ? "content  active-content" : "content"}>
                    <MenuTable2 />    
                </div>
                <div className={mainToggle === 3 ? "content  active-content" : "content"}>
                    <MenuTable3 />    
                </div>
                <div className={mainToggle === 4 ? "content  active-content" : "content"}>
                    <MenuTable4 />    
                </div>
            </div>
            

        </div>
    )
}

export default MainMenu;