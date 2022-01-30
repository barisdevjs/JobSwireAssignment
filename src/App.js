import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Reels from './pages/Reels';
import Tagged from './pages/Tagged';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes >
      <Route path="/" element={<Homepage />} exact />
      <Route path="/reels" element={<Reels />} exact />
      <Route path="/tagged" element={<Tagged />} exact />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

/* const handleClick = (e,i) => {
  e.preventDefault();
  const parent = e.target.parentNode;
  const sended =parent.parentNode.parentElement;
  const sendedSize = [sended.clientWidth, sended.clientHeight];
  const popup = document.getElementsByClassName('sended-1')
  const img = popup[0].getElementsByTagName('img')[0]
  console.log(img,sended, sendedSize)
  sended.style.background ='url(' + img.src + ')';
  sended.style.backgroundSize = 'cover';
  sended.style.backgroundPosition = 'center';
  sended.style.backgroundRepeat = 'no-repeat';

  img.addEventListener('click', () => {
      sended.style.background = 'none';
  })
  
} */