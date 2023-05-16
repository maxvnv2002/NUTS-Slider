import React, {useRef, useState} from 'react';
import classes from './SliderItem.module.scss'
import image from '../../assets/img-template.png'


const SliderItem = ({item}) => {
    return (
        <a className={classes.cell} href={item.link} >
            <img src={image} alt="photo"/>
            <p className={classes.date}>{ item.date } г.</p>
            <h6 className={classes.title}>
                { item.title }
            </h6>
            <p>{ item.description }</p>
        </a>
    );
};

export default SliderItem;