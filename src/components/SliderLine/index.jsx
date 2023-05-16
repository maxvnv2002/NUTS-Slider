import React, {useRef, useState} from 'react';
import classes from './SliderLine.module.scss'
import SliderItem from "../SliderItem";
import {useSelector} from "react-redux";
import {useSwipeable} from "react-swipeable";
import {nextSlide} from "../../functions/nextSlide";
import {prevSlide} from "../../functions/prevSlide";


const SliderLine = ({ onStart, onStop }) => {
    const offsetState = useSelector(state => state.offset)
    const cellsState = useSelector(state => state.cells)

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            onStop()
            nextSlide()
            onStart()
        },
        onSwipedRight: () => {
            onStop()
            prevSlide()
            onStart()
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    })

    return (
        <div className={classes.sliderLine}
             style={{transform: `translateX(-${offsetState.offset}px)`}}
             {...swipeHandlers}
        >
            { cellsState.map((item, index) => (
                <SliderItem item={item} key={index}/>
            )) }
            </div>

    );
};

export default SliderLine;