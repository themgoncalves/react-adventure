/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animate from 'decorators/animate';

@animate
class Loading extends Component  {
  render() {
    if (this.props.error) {
      return (<LoadingWrapper><LoadingText>Error!</LoadingText></LoadingWrapper>);
    } else if (this.props.timedOut) {
      return (<LoadingWrapper><LoadingText>Loading... it's taking a while now...</LoadingText></LoadingWrapper>);
    } else if (this.props.pastDelay) {
      return (<LoadingWrapper><LoadingText>Loading...</LoadingText></LoadingWrapper>);
    }
  
    return <LoadingWrapper><LoadingText>Loading...</LoadingText></LoadingWrapper>;
  }
}

const LoadingWrapper = styled.div`
  background: ${props => props.theme.gradients.expresso.baseColor}; 
  background: ${props => props.theme.gradients.expresso.gradient}; 
  display: table;
  width: 100%;
  height: 100%;
`;

const LoadingText = styled.span`
  color: white;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

Loading.propTypes = {
  error: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
};

Loading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
};

export default Loading;
