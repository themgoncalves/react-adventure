/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
  if (props.error) {
    return (<div>Error! <button onClick={props.retry}>Retry</button></div>);
  } else if (props.timedOut) {
    return (<div>Taking a long time... <button onClick={props.retry}>Retry</button></div>);
  } else if (props.pastDelay) {
    return (<div>Loading...</div>);
  }

  return null;
};

Loading.propTypes = {
  error: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
};

Loading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
  retry: () => false,
};

export default Loading;
