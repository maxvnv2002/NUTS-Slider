import React, {useCallback, useEffect, useRef, useState} from 'react';
import classes from './SliderControl.module.scss'
import * as actionTypes from '../../store/actions'
import {store} from "../../store";
import {useSelector} from "react-redux";
import {getOffsets, getRetreat} from "../../functions/getOffsets";
import {prevSlide} from "../../functions/prevSlide";
import {nextSlide} from "../../functions/nextSlide";
import {calcOffset} from "../../functions/calcOffset";
const SliderControl = ({onStart, onStop}) => {
    const trackRef = useRef(null);
    const [thumbSize, setThumbSize] = useState(0);
    const [thumbOffset, setThumbOffset] = useState(0)
    // Actual states from Redux States
    const cellsLength = useSelector(state => state.cells.length)
    const cellSize = useSelector(state => state.offset.actualSize)
    let activeSlide = useSelector(state => state.offset.activeSlide)
    let actualRetreat = getRetreat(window.innerWidth)




    const resizeTrack = () => {
        // Получение размера classes.track
        const { clientWidth } = trackRef.current || {};
        // Размер 1й ячейки на classes.track
        let oneCellSize = clientWidth / cellsLength

        setThumbSize(oneCellSize * actualRetreat)
        setThumbOffset(oneCellSize * (activeSlide - actualRetreat))
    };


    const resizeHandler = async (e) => {
        const width = e.target.innerWidth

        const cellSize = getOffsets(width);
        actualRetreat = getRetreat(width);

        if (activeSlide < actualRetreat) activeSlide = actualRetreat

        const newOffset = calcOffset(false, activeSlide, actualRetreat, cellSize)

        store.dispatch({
            type: actionTypes.cellUpdated,
            payload: {actualSize: cellSize, actualRetreat, offset: newOffset, activeSlide: activeSlide}
        })
        resizeTrack();
    }


    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeTrack()

        return () => window.removeEventListener("resize", resizeHandler)
    }, [activeSlide])

    const nextSlideHandler = () => {
        onStop()
        nextSlide()
        onStart()
    }

    const prevSlideHandler = () => {
        onStop()
        prevSlide()
        onStart()
    }

    return (
        <div className={classes.root}>
            <div className={classes.track} ref={trackRef}>
                <div className={classes.thumb}
                     style={{
                         width: thumbSize,
                         transform: `translateX(${thumbOffset}px)`
                    }}
                >
                </div>
            </div>
            <div className={classes.buttonsWrap}>
                <div className={`${classes.button} ${classes.buttonPrev}`}
                     onClick={prevSlideHandler}>
                </div>
                <div className={`${classes.button} ${classes.buttonNext}`}
                     onClick={nextSlideHandler}>
                </div>
            </div>
        </div>
    );
};

export default SliderControl;