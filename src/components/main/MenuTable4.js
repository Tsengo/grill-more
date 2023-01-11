import React from "react";
import './MainMenu.css';
import {MainMenuData} from './MainMenuData'; 
import './../../App.css';
import './MenuTable1.css';


const MenuTable1 = () => {
    return (
        <div className="menu-table">
            
                {MainMenuData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={`steak steak${index}` }>
                                <img src={item.image} alt={item.heading} />
                                <div className="steak-information">
                                    <h2>{item.heading}</h2>
                                    <hr />
                                    <p className="review">{item.review}</p>
                                    <p className="price">{item.price }</p>
                                </div>
                            </div>
                    </div>
                    )
                })}

            </div>
    )
}
export default MenuTable1;