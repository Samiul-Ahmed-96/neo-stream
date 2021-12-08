import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React from 'react';
import './ListItem.scss';

const ListItem = () => {
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="list-item">
            <div  className="item-img">
                <img src="https://images.hdqwalls.com/download/terminator-arnold-7q-1920x1080.jpg" alt="" />
                <div className="item-actions">
                <ThumbUpOutlined/>
                <ThumbDownOffAltOutlined/>
                <PlayArrow/>
                <Add/>
                <div className="item-info">
                    <span>1 hr 30 mins</span>
                    <span>+16</span>
                    <span>1997</span>
                </div>
                <div className="item-des">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nihil.</span>
                </div>
                <div className="genre">
                    Action
                </div>
                <div className="trailer">
                    <video src={trailer} autoPlay={true} loop />
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default ListItem;