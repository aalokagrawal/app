import React from 'react';
import './Home.css';
import Navbar from './Navbar'

function Home() {
  return (
    <div className="Home">
    <div ><Navbar /></div>
    <div className="title">
    <h1>Tutoria</h1>
    <h3>A platform to manage your online coaching</h3>
    </div>
    </div>
  
    
  );
}

export default Home;