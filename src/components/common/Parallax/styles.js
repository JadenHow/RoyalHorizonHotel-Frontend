import { Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  20% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(.9, .9, .9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(.97, .97, .97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

export const ParallaxWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const AnimatedContainer = styled(Container)`
  text-align: center;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  animation: ${bounceIn} 1s ease-in-out;
`;

export const AnimatedH1 = styled.h1`
  animation: ${fadeInDown} 1s ease-in-out;
`;

export const AnimatedH3 = styled.h3`
  animation: ${fadeInUp} 1s ease-in-out;
`;

export const HotelColor = styled.span`
  color: #DAA520;
`;
