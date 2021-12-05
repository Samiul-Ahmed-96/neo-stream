import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Featured from '../Featured/Featured';
import List from '../List/List';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
            
        </div>
    );
};

export default Home;