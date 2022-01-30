import React from 'react';
import Intro from '../components/Intro';
import Posts from '../components/Posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { randomNumber } from '../pages/Tagged';
const Reels = () => {
  return (
    <>
      <Intro />
      <Posts />
      <div className="reels">
        <div className="reels-1 ">
          <div className="child">
            <img src={require('../Images/Reels/r1.jpg')} alt="" />
            <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
            <span>
              <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
              {randomNumber()}
              <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
              {randomNumber()}
            </span>
          </div>
        </div>
        <div className="reels-2 ">
          <div className="child">
            <img src={require('../Images/Reels/r2.jpg')} alt="" />
            <FontAwesomeIcon icon={faPlay} className="svg"></FontAwesomeIcon>
            <span>
              <img src={require('../Images/Kullanılacak assetler/begen.png')} alt="" title='15' value={100} />
              {randomNumber()}
              <img src={require('../Images/Kullanılacak assetler/yorum_1.png')} alt="" />
              {randomNumber()}
            </span>
          </div>
        </div>
        <div className="reels-3 ">
          <div className="child">
            <img src={require('../Images/Reels/r3.jpg')} alt="" />
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
  )
};

export default Reels;
