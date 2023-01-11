import React, { useState, useEffect } from "react";
import { SliderData } from "./Slider-Data";
import "./Slider.css";
import './Menu.css';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)    
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto();
        }    
        return () => clearInterval(slideInterval);
    }, [currentSlide])
    
    return (
        <div className="slider">
            <div >

                <span className="arrow prev" onClick={prevSlide}/>
                <span className="arrow next" onClick={nextSlide}/>
            </div>
            
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current": "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide" />
                                {/* {console.log(slide.image)} */}
                                <div className="contents">
                                    <div className="info">
                                        <h1 className="head-info">{slide.heading}</h1>
                                        <p>{slide.text}</p>
                                    </div>
                                    <a>{slide.link}</a>
                                </div>
                            </>
                            
                        )}
                    </div>
                )
            })}

        </div>
    )
}
export default Slider