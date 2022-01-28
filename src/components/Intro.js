import React from 'react';

const Intro = () => {
    let url ='https://www.instagram.com/jobswireapp/'
    return (
        <div className="intro">
            <div className="intro-logo">
                <img src={require('../Images/Kullanılacak assetler/jobswire.png')} alt="logo" />
                <p>Jobswire</p>
            </div>
            <div className="intro-text">
                <p>jobswireapp</p>
                <button> Takip Et </button>
                <button> ↓ </button>
                <button> ... </button>
                <p>51 gönderi</p>
                <p>206 takipçi</p>
                <p>7 Takip</p>
                <p><b>JobSwire</b>
                    <br></br>
                    <em>İnternet Şirketi</em>
                    <br></br>
                    Yenilikçi, Kullanıcı Odaklı, Uçtan Uca İK Deneyimi
                    Karakter Testini Çöz İş Hayatındaki "Sen"i Keşfet! 👇
                    <a style={{textDecoration: 'none'}} href={url}><b>www.jobswireapp.com</b></a></p>
            </div>
        </div>
    )
};

export default Intro;
