import { InfoOutlined, PlayCircle } from '@mui/icons-material';
import React from 'react';
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
        <img style={{width:'100%'}} src="https://images.pexels.com/photos/9469740/pexels-photo-9469740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />

        <div className="featured-content">
        <img src="https://lh3.googleusercontent.com/jf2whyXNr7YwYm3zA7nGHzBQ4IrgOLIq2T4hp9MJXTU5pulTCpQwA6LdcDAzY8aJdpZj-KGq892ZBgh9QunwXzBtvQrmFvdUFL6bMveZQn7T8JHOedONpNQPYntCiQQ0GGsybG4O7c6QxNIq6OkUamvc_QV4uFx1SsNwrBGeLvRZV9tfma4LExDtolU_y1HOge8JJ0XpTexntu1Wkbb9Vjy1Sn4yUa82-wcjdka46QuJAAM0veUxYFgBlihQzSd3USvlmgf6HghjBL94SnL3mbFEMv-5keK1nZjAos_B8_AjlgmbbS7N-rabenoCDJQ6qq8LMrxZ8RgDbD9Ov6-1hzgi5_dVLoUBPryqk_7uVR6U_X966yI47zcd7qpjk0kZz1O7ZpaFUmOmOQai29pUTClzIcaRry3viKrgO_hWW20UlUfJGl8rbrHyxIbuhQHoFk6SDnVLSM9e7pvMy3Kt9kS6qx3UPCDI3x8Bw2EB9dn3tzSAd0KVq_t0mu8Dj7tjXt4h4EOWjZtDJZwrpX5j4YNd5Jf1cPC5k988n7eBErXYSwWJQgtqsB5O3gPF3OS63qRWDjA7tkwviyrg86KmyKK7LafLzOU503-dWOZultkrsxxbGB1JbPNx0skMRpqlyhxa8oxRvTGLm4mweFzFHkvuMK5s26Hf41BkfCiOoNYLgro5-yZHBhKN87NczpbMUlhv9uhKCD9umc_RO1TCPcQ=w666-h375-no?authuser=0" alt="" />
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