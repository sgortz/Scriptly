import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage1 from './LandingPages/LandingPage1.jsx';
import LandingPage2 from './LandingPages/LandingPage2.jsx';
import LandingPage3 from './LandingPages/LandingPage3.jsx';

function Carousel() {
  const [landingPage, setLandingPage] = useState(0);
  let carousel;

  const nextSlide = () => {
    setLandingPage(landingPage === 2 ? 0 : landingPage + 1);
  };

  const prevSlide = () => {
    setLandingPage(landingPage === 0 ? 2 : landingPage - 1);
  };

  const changeOverTime = () => {
    if(landingPage < 2){
     setLandingPage(landingPage+1)
   } else {
    setLandingPage(0)
   }
    }

   useEffect(() => {
     const interval = setInterval(() => {changeOverTime()}, 5000);
           return () => clearInterval(interval)
   }, [changeOverTime]);

  if (landingPage === 0) {
    carousel = <LandingPage1 />;
  } else if (landingPage === 1) {
    carousel = <LandingPage2 />;
  } else if (landingPage === 2) {
    carousel = <LandingPage3 />;
  }

  return (
    <>
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {carousel}
    </>
  );
}

export default Carousel;
