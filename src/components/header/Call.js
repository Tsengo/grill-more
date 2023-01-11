import React from "react";
import './Call.css';
import phone from '../../img/phone.png';

const Call = () => {
    return (
        <div className="Phone_Number">
            <img src={ phone} alt="phone"/>
            <p>032 283 83 80</p>
        </div>
    )
}

export default Call;