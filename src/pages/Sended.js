import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { randomNumber } from './Tagged';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Sended = () => {

    return (
        <>
            <div className="sended ">
                <Zoom zoomMargin={600} transitionDuration={2000}
                    zoomZindex={500} overlayBgColor='rgba(0, 0, 0, 0.5)'
                    onhoverStop={false}
                >
                    <div className="sended-1 " >
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
                </Zoom>
                <Zoom zoomMargin={600} transitionDuration={2000}
                    zoomZindex={500} overlayBgColor='rgba(0, 0, 0, 0.5)'
                    onhoverStop={false}
                >
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
                </Zoom>
                <Zoom zoomMargin={600} transitionDuration={2000}
                    zoomZindex={500} overlayBgColor='rgba(0, 0, 0, 0.5)'
                    onhoverStop={false}
                >
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
                </Zoom>
                <Zoom zoomMargin={600} transitionDuration={2000}
                    zoomZindex={500} overlayBgColor='rgba(0, 0, 0, 0.5)'
                    onhoverStop={false}
                >
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
                </Zoom>
                <Zoom zoomMargin={600} transitionDuration={2000}
                    zoomZindex={500} overlayBgColor='rgba(0, 0, 0, 0.5)'
                    onhoverStop={false}
                >
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
                </Zoom>
                <Zoom zoomMargin={600} transitionDuration={2000}
                    zoomZindex={500} overlayBgColor='rgba(0, 0, 0, 0.5)'
                    onhoverStop={false}
                >
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
                </Zoom>
            </div>
        </>
    );
};

export default Sended;
