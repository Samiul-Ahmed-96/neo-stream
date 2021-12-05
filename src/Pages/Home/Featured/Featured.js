import { InfoOutlined, PlayCircle } from '@mui/icons-material';
import React from 'react';
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
        <img style={{width:'100%'}} src="https://images.pexels.com/photos/9469740/pexels-photo-9469740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />

        <div className="featured-content">
        <img src="https://lh3.googleusercontent.com/ujgHgqD3Q5sCKZ3NA6mOy70qbEE66CSPVuKs5W3mVgdFnTkzoDvt5KbkF4N5AfM16FWPaXsjmxPE27sxYxlUaMzf-enbU5GIFD3_hlLGB5NJHDzVpVxVoKyE1lD2OxuQhjW_T2cgyqCQzHiVcxivDG_I5GfU8D1DGViYDv3PaZZM9bnHm6v0tREPbPbtpY0drAivOSfRSvg7twIxCM3HAYnIV9UprEPtKjv4ATEBrtHyQ-u6wgTGf-IhYvmSgV1K727ArXPSrvQysOj4Ey7qJwkA2bOdbK_hCYzNiuDdgkXmiJI_5DyHL-xtWKn_7Ye_1Po308gBm13o1xxo0tMbB-ciXHWhxaKGRwrxPcU2T_BjUbTAfoE0dEkf1yRgxp17qzOeYUirfSkuN34YP6PS3Sdq_bQrZWxcjrygFlYoBmSRzVhkKE-eA0LP1Ex125bl0TPIH_7y2iWySwbHnugRTtEsVE9sahmdS6x6RmLHYCf5J6ciMxp-SkN7jNlxqguCvqPZV8EKRkRnOOUsWxZBATOb-IZ8JUrIG0iS8Tl4Rxi_0Lob-x2VIbXDWkpTyJd1PJzTmaI7CNqh8mwUah-Mk3S84mBtJA2EtUKpWGDMAV5Uat2tp7U6ZeryZR0UWkcGTMk93I_MUnJsr46Y6WBpnuK16tWm9QqKbbRzxJTM9LD-R_DKEZAv1zlu_Nt5ZfcUJTsOtQwiRAu9WCUJLTrsXjw=w666-h375-no?authuser=0" alt="" />
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