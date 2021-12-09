import { Notifications, Search } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [isScrolled , setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null;
    }
    
    return (
        <div className={isScrolled ? "navbar scroll" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="" />
                    <div className="menu">
                    <Link to="/home"><span>Homepage</span></Link>
                    <Link to="/series"><span>Series</span></Link>
                    <Link to="/movies"><span>Movies</span></Link>
                    <Link to="/newAndPopular"> <span>New and Popular</span></Link>
                    <Link to="/myList"><span>My List</span></Link>
                    </div>
                </div>
                <div className="right">
                <Link to="/login"><span>Login</span></Link>
                <Link to="/Watch"><span>Watch</span></Link>
                    <Search/>
                    <Notifications></Notifications>
                    <img src="https://lh3.googleusercontent.com/95_1Sv0twkSjCZPmu71u81-GNVYg5w5h2NmFsYbKavfn4Ei3lLARzJ1Xo6am81vgZBfjIjuxKlAy1faJcud6Zgej6c5_G3cxcNi-tsQ80QjJN36HlPbzpl2XV_CB87Q2FDY3BFRCMkdZMh3diNefI-y8IpQ_zcDqFTNdibD4h5fAPmQfLvll4T2_gIhLkL9dOj1QIovv7pksW-_lN6-RkbrOieYJD9pdX6wwP3itaZDbZTxwCvZb59Dp-G4gzxb7PVv72VmLlRMIzBDfkVV0AzQH0fqrB1_Py76G-07fA38ev12HBf3OsOiHpmrlGwMN2UtQ_4JMAP8-TA-_EbqRBTb4D8t0d10M5fleEv8PO37fCciHMvhWS08iHaYsqjm0a4FcVSkYbI3FYT7VEWqQqpsfH0tS3dF0zvT6-k9_Lh1M9xcS6tA62yj5YdOC6K0e07xcJzw_RaRxOYPT7Xzmm_Bccb2izyfFT2eOr536hISIMXWNiMfs5qdP3VFmvim9YKZRe63iwPYbRborwMyyO6ckL05u1EqZNocL4VkSmQ5yacDkcQnUrjfiieobQqauCBIsLQbnlwPkt7PNHFseMsmr8QeDNT6VKoP28iPP0ty0b08K7UeUbt2S3mby740Qyukk_KHzJpzcejqRfqD7s4CfUY9-wSvJVLolqH6KHACR8pzNfLP36ZO660BvIW2f0bF0Mh0QxnkfDsAjWEJG3hQ=w709-h766-no?authuser=0" alt="" />
                    
                    <div className="profile">
                    <ArrowDropDownIcon/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;