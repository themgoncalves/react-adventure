/**
 * React Redux Async starter kit
 * @author Marcons Goncalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */

import React from 'react';
import { Helmet } from 'react-helmet';

  /**
   * App stateless component
   * @function
   * @public
   * @see {@link https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless} for further information
   */
function App() {
  /**
   * Handles button click in async operation
   * @private
   */
  const handleButtonClick = async () => {
    document.querySelector('body').style.backgroundColor = '#117bf3';
    document.querySelector('body').style.color = '#ffffff';
  };

  /**
   * Render JSX
   * @function
   * @public
   * @return {Any} React Element
   */
  return (
    <div>
      <Helmet>
        <title>React Redux Starter Pack</title>
      </Helmet>
      App works!<br />
      <button onClick={handleButtonClick}>Async button</button>
    </div>
  );
};

export default App;
