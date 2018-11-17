/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.1
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'enhancers/animate';
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
  /** If there was an error during loading */
  error: PropTypes.bool,
  /** If the loading had timed out */
  timedOut: PropTypes.bool,
  /** If the loading has past delay */
  pastDelay: PropTypes.bool,
};

Loading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
};

export default Loading;
