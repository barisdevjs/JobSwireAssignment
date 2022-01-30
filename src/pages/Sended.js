import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { randomNumber } from './Tagged';

const Sended = () => {
    const array = ['sended-1', 'sended-2', 'sended-3', 'sended-4', 'sended-5', 'sended-6'];
    const [image,setImage] = React.useState(array[0]);

    const handleClick = (e,i) => {
        e.preventDefault();
        const parent = e.target.parentNode;
        const sended =parent.parentNode.parentElement;
        const sendedSize = [sended.clientWidth, sended.clientHeight];
        const popup = document.getElementsByClassName(image)
        const img = popup[0].getElementsByTagName('img')[0]
        console.log(img,sended, sendedSize)
        sended.style.background ='url(' + img.src + ')';
        sended.style.backgroundSize = 'cover';
        sended.style.backgroundPosition = 'center';
        sended.style.backgroundRepeat = 'no-repeat';
        sended.classList.add('index');
    }

    return (
        <>
            <div className="sended index">
                <div className="sended-1 " onClick={handleClick}>
                    <div className="child" >
                        <img src={require('../Images/Gönderiler/g1.jpg')} alt="" />
                        <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
                        <span>
                            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
                            {randomNumber()}
                            <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
                            {randomNumber()}
                        </span>
                    </div>
                </div>
                <div className="sended-2 ">
                    <div className="child">
                        <img src={require('../Images/Gönderiler/g2.jpg')} alt="" />
                        <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
                        <span>
                            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
                            {randomNumber()}
                            <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
                            {randomNumber()}
                        </span>
                    </div>
                </div>
                <div className="sended-3 ">
                    <div className="child">
                        <img src={require('../Images/Gönderiler/g3.jpg')} alt="" />
                        <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
                        <span>
                            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
                            {randomNumber()}
                            <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
                            {randomNumber()}
                        </span>
                    </div>
                </div>
                <div className="sended-4 ">
                    <div className="child">
                        <img src={require('../Images/Gönderiler/g4.jpg')} alt="" />
                        <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
                        <span>
                            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
                            {randomNumber()}
                            <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
                            {randomNumber()}
                        </span>
                    </div>
                </div>
                <div className="sended-5 ">
                    <div className="child">
                        <img src={require('../Images/Gönderiler/g5.jpg')} alt="" />
                        <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
                        <span>
                            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
                            {randomNumber()}
                            <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
                            {randomNumber()}
                        </span>
                    </div>
                </div>
                <div className="sended-6 ">
                    <div className="child">
                        <img src={require('../Images/Gönderiler/g6.jpg')} alt="" />
                        <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
                        <span>
                            <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
                            {randomNumber()}
                            <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
                            {randomNumber()}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sended;
