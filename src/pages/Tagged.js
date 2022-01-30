import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Intro from '../components/Intro';
import Posts from '../components/Posts';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const randomNumber = () => Math.ceil(Math.random() * 100);
const Tagged = () => {

  return (
    <>
      <Intro />
      <Posts />
      <div className="tagged">
        <div className="tagged-1 ">
          <div className="child">
            <img src={require('../Images/Etiketlenenler/e1.jpg')} alt="" />
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

export default Tagged;
