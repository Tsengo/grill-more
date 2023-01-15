import React from "react";
import Pin from './../../img/marker-02.png'
import './Address.css';

const Address = () => {
    return (
        <div >
            <ul className="address">
                <li><img src={Pin} alt="" /><p
                >
                    Company Address
                    {/* Chavchavadze Ave. N10 */}
                </p></li>
                <li><img src={Pin} alt="" /><p>
                    Company Address
                    {/* Kavtaradze st. N39 */}
                </p></li>
            </ul>
        </div>
    )
}

export default Address;