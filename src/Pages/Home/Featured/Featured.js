import { InfoOutlined, PlayCircle } from '@mui/icons-material';
import React from 'react';
import Banner from "../../../Image/banner.png";
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
        <img style={{width:'100%'}} src="https://images.pexels.com/photos/9469740/pexels-photo-9469740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />

        <div className="featured-content">
        <img src={Banner} alt="" />
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, alias! Vitae odit provident sint quod adipisci dicta, corrupti rerum! Tempore laboriosam repudiandae, enim ut culpa quo similique ipsum labore itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur fuga doloribus, eligendi molestiae quam dolorum magnam. Itaque, fuga voluptatem.</h3>

        <div className="buttons">
            <div className="play-btn">
            <PlayCircle></PlayCircle>
            <span>Play</span>
            </div>
            <div className="info-btn">
            <InfoOutlined/>
            <span>Info</span>
            </div>
        </div>
        </div>

        
        </div>
    );
};

export default Featured;