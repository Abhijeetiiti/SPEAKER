import React from "react";
import DomeGallery from './DomeGallery';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
  

      <div style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery
          fit={1}
          minRadius={1000}
          maxVerticalRotationDeg={3}
          dragDampening={3}
          grayscale={false}
          auto rotate={true}
        />
      </div>


      <nav className="right-navbar">
        <Link to="/">2026</Link> 
        <Link to="/speaker2025">2025</Link>
        <Link to="/speaker2024">2024</Link>
        <Link to="/speaker2023">2023</Link>
        <Link to="/gallery">Gallery</Link>  
      </nav>
    </>
  );
};

export default Gallery;
