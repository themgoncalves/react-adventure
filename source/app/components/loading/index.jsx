/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';

const Loading = (props) => {
  if (props.error) {
    return (<div>Error! <button onClick={ props.retry }>Retry</button></div>);
  } else if (props.timedOut) {
    return (<div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>);
  } else if (props.pastDelay) {
    return (<div>Loading...</div>);
  }

  return null;
}

export default Loading;
