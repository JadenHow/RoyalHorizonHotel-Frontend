import React from 'react';
import { ParallaxWrapper, AnimatedContainer, AnimatedH1, AnimatedH3, HotelColor } from './styles';

const Parallax = () => {
  return (
    <ParallaxWrapper>
      <AnimatedContainer>
        <div>
          <AnimatedH1>
            Experience the Best hospitality at <HotelColor>Royal Horizon Hotel</HotelColor>
          </AnimatedH1>
          <AnimatedH3>We offer the best services for all your needs.</AnimatedH3>
        </div>
      </AnimatedContainer>
    </ParallaxWrapper>
  );
};

export default Parallax;
