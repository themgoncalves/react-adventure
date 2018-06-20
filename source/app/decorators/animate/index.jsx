/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.2
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';

function animate(WrappedComponent) {
  return function (props) { // eslint-disable-line func-names
    return (
      <PageFadeInWrapper>
        <WrappedComponent {...props} />
      </PageFadeInWrapper>
    );
  };
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PageFadeInWrapper = styled.div`
  height: 100%;
  width: 100%;
  animation: ${fadeIn} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

export default animate;
