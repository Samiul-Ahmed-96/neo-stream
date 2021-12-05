import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.scss';

const List = () => {
    return (
        <div className="list">
            <span className="list-title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className="slider-arrow left"/>
                <div className="container">
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
                <ArrowForwardIosOutlined className="slider-arrow right"/>
            </div>
        </div>
    );
};

export default List;