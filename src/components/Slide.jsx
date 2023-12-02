import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const SlideContainer = styled.div`
  animation: ${slideAnimation} 1s ease-in-out;
`;

const Slide = ({ children }) => {
  return <SlideContainer>{children}</SlideContainer>;
};

export default Slide;
