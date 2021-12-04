import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <img style={{width:'100%'}} src="https://images.pexels.com/photos/9469740/pexels-photo-9469740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            
        </div>
    );
};

export default Home;