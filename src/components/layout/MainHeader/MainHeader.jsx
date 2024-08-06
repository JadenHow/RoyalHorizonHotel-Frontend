import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Frame1 from 'assets/Asset_Main.jpg';
import { useWindowSize } from 'contexts/WindowSizeContext';

const BootstrapCarousel = () => {
  const { isXSmall, isSmall } = useWindowSize();
  const small = isXSmall || isSmall;

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item style={{ position: 'relative' }}>
        <Image src={Frame1} fluid style={{ height: small ? '50vh' : '80vh', width: '100%', objectFit: 'cover' }} />
        <Carousel.Caption style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', width: '100%' }}>
          <div className="d-flex align-items-center justify-content-center h-100" style={{ color: 'white' }}>
            <h1>Welcome to <span style={{ color: '#DAA520' }}>Royal Horizon Hotel</span></h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
