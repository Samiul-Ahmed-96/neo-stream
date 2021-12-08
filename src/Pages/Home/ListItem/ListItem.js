import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React from 'react';
import './ListItem.scss';

const ListItem = () => {
    return (
        <div className="list-item">
            <div className="item-img">
                <img src="https://images.hdqwalls.com/download/terminator-arnold-7q-1920x1080.jpg" alt="" />
                <div className="item-actions">
                <ThumbUpOutlined/>
                <ThumbDownOffAltOutlined/>
                <PlayArrow/>
                <Add/>
            </div>
            </div>
           
        </div>
    );
};

export default ListItem;