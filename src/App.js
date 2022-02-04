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

