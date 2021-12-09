import React from 'react';
import watchVideo from '../../Videos/pexels-kelly-lacy-9722139.mp4';
import './Watch.scss';
const Watch = () => {
    return (
        <div className="watch">
            <video src={watchVideo} className="video" autoPlay progress controls ></video>
        </div>
    );
};

export default Watch;