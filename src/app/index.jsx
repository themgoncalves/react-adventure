/**
 * React Redux Async starter kit
 * @author Marcons Goncalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */

import React from 'react';
import { Route } from 'react-router';

//Components import
import Header from './component/header';
import { AsyncHome, AsyncAwesome } from './routes';

/**
 * RootApp stateless component
 * @function
 * @public
 * @see {@link https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless} for further information
 */
function RootApp() {

  /**
   * Render JSX
   * @function
   * @public
   * @return {Any} React Element
   */
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <Route path="/" exact component={AsyncHome} />
        <Route path="/awesome" exact component={AsyncAwesome} />
      </div>
    </React.Fragment>
  );
}

export default RootApp;
