import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slideshow = ({ images, isMobile }) => {

  const getImageSource = (imageName) => {
    const imageSuffix = isMobile ? '-mobile' : ''; // Add '-mobile' if isMobile is true
    return `../static/images/${imageName}${imageSuffix}.jpg`;
  }

  return (
    <div className="w-full">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={4000}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="hidden"
              src={getImageSource(image)}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;





