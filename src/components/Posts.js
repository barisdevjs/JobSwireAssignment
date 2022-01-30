import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Posts = () => {
  // write a function to handleToggle on selected div
  const [isActive, setIsActive] = useState(null);
  const handleToggle = (id) => {
    setIsActive(isActive === id ? null : id);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="posts">
        <div onClick={() => [handleToggle(1), navigate('/')]} className={isActive === 1 ? 'gönderiler selected' : 'gönderiler'}>
          <img src={require('../Images/Kullanılacak assetler/gönder_1.png')} alt="symbol" />
          <h3>Gönderiler</h3>
        </div>
        <div onClick={() => [handleToggle(2), navigate('/reels')]} className={isActive === 2 ? 'reelsMain selected' : 'reelsMain'}>
          <img src={require('../Images/Kullanılacak assetler/video.png')} alt="symbol" />
          <h3>Reels</h3>
        </div>
        <div onClick={() => [handleToggle(3), navigate('/tagged')]} className={isActive === 3 ? 'taggedMain selected' : 'taggedMain'}>
          <img src={require('../Images/Kullanılacak assetler/tag.png')} alt="symbol" />
          <h3>Tagged</h3>
        </div>
      </div>
    </>
  )
};

export default Posts;
