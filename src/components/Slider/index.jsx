import React, {useEffect, useState} from 'react';
import SliderLine from "../SliderLine";
import SliderControl from "../SliderControl";
import classes from './Slider.module.scss'
import {nextSlide} from "../../functions/nextSlide";
const Slider = () => {
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000);
        setIntervalId(interval);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const stopInterval = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const startInterval = () => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000);

        setIntervalId(interval);
    };


    return (
        <div className={classes.slider}>
            <SliderLine onStart={startInterval} onStop={stopInterval}/>
            <SliderControl onStart={startInterval} onStop={stopInterval}/>
        </div>
    );
};

export default Slider;