import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    return (
        <div className="header" onClick={() => navigate('/')}>
            <div className="header-symbol">
                <img src={require('../Images/Kullanılacak assetler/instagramLogo.png')} alt="logo" />
            </div>
            <div className="header-search">
                <input type="text" placeholder="Ara" autoFocus='autoFocus' />
            </div>
            <div className="header-logos">
            <img src={require('../Images/Kullanılacak assetler/grid.png')} alt="grid" />
            <img src={require('../Images/Kullanılacak assetler/gönder_1.png')} alt="gönder" />
            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="begen" />
            </div>
        </div>
    )
};

export default Header;
