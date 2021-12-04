import { Notifications, Search } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="" />
                    <div className="menu">
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                    </div>
                </div>
                <div className="right">
                    <Search/>
                    <Notifications></Notifications>
                    <img src="https://lh3.googleusercontent.com/TBTxvAhDtk4YpFz7kCTq6kB7Xcqe7gy9ZSO9ichsjsyIwTmcGZX8qgTq-tFP6JnRLwGV1wbCPsNfMvaqQ18aVZWuHt5J-0aU5CNw86BI6KcoBgCPdYYXsSY6qNfZwzN3mfqEkO3T0zNJKjj-3A_nFjh1r1yiKRPjmNV6GQ3Jzp1TtlYbEEC5UlqSC5hwEHodlcpOu4v4iPhLIAoagIJDFoPosBwxmxT0e7qgShv3QvS3o_iPtKCKJGwN0bEdDDPZ8elcBgDOBhmo0NR5b3RV9LRo11jFyIJ3fr-EMX39UaHgIfnyjQNpX_RBj9jeuV02C0HvYiQO15xei0gnPI5gOCAEkTLH7-98j2KxsLoHXwWhPtS1EvJmNBtomIu63dTuRYe5W9yPmUUp-P2CfQnC8zw6R15yTPO6SpdvCLg2cQIdDXrx-DQcPspWWCnRx_Kl8WXp1xrZymPvcK8MwHCYYKWrXfGioEGiFIPCLeUf-42MImoKw-VV_ZBd4tQ0MegElL8rxXJtNWXpUnwdw0Y4Uxt0I2hlFXs81eiWPUGQglly2P7xhas-QlZNc1BiktbskhTdtt9-MIFoFAjfgzHq4geI-QJupVwTSbMbmGMHellVj1GXVMsCwNDResg7n-GkSzH9D7zNucXz22DkUc3AOu-ct6JyzTKUlA3GjtbmQUAdwh_2vWe2-iK_E_R08Yj6NT2ZM9skuuedWV7ZBsX_yvg=w328-h354-no?authuser=0" alt="" />
                    
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