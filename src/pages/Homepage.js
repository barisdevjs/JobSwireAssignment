import React from 'react';
import Intro from '../components/Intro';
import Posts from '../components/Posts';
import Sended from './Sended';

const Homepage = () => {
  return (
    <>
      <Intro />
      <Posts />
      <Sended />
    </>
  )
};

export default Homepage;
