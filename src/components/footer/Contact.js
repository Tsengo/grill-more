import React from "react";
import Post from '../../img/Vector.png';
import Phone from '../../img/phone.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <ul>
                <li><img src={Post} alt="Gmail"/><p>
                info.grillmore@gmail.com
                </p></li>
                <li><img src={Phone} alt="Phone"/><p>
                032 283 83 80
                </p></li>
            </ul>
        </div>
    )
}

export default Contact;