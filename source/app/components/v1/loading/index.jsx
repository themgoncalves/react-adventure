/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.2
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'decorators/animate';
import { LoadingWrapper, LoadingText } from './styles';

@animate
class Loading extends Component {
  render() {
    if (this.props.error) {
      return (
        <LoadingWrapper>
          <LoadingText>Error!</LoadingText>
        </LoadingWrapper>
      );
    } else if (this.props.timedOut) {
      return (
        <LoadingWrapper>
          <LoadingText>Loading... it is taking a while now...</LoadingText>
        </LoadingWrapper>
      );
    } else if (this.props.pastDelay) {
      return (
        <LoadingWrapper>
          <LoadingText>Loading...</LoadingText>
        </LoadingWrapper>
      );
    }

    return (
      <LoadingWrapper>
        <LoadingText>Loading...</LoadingText>
      </LoadingWrapper>
    );
  }
}

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
