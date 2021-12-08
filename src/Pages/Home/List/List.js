import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useRef } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.scss';

const List = () => {

    const listRef = useRef();

    const handleArrow = (direction) =>{
        let distance = listRef.current.getBoundingClientRect().x - 100;
        if(direction === "left"){
            listRef.current.style.transform = `translateX(${330 + distance}px)`
            console.log('left')
        }
        if(direction === "right"){
            listRef.current.style.transform = `translateX(${-330 + distance}px)`
            console.log('right')
        }
        
    }

    return (
        <div className="list" >
            <span className="list-title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined onClick={()=> handleArrow("left")} className="slider-arrow left"/>
                <div className="container" ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                <ArrowForwardIosOutlined onClick={()=> handleArrow("right")} className="slider-arrow right"/>
            </div>
        </div>
    );
};

export default List;