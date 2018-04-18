/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */

import React, { Component } from 'react';
import { connect } from "react-redux";

/**
 * Home stateless component
 * @function
 * @public
 * @see {@link https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless} for further information
 */
class Home extends Component {
  /**
   * Render JSX
   * @function
   * @public
   * @return {Any} React Element
   */
  render() {
    return (
      <div className="col-12 mt-4">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple demo of the awesomeness of React Redux Async Component Starter Kit!</p>
          <hr className="my-4"/>
          <p>Before you click in any link, please, open your Developer Tool and go to the <i>Network tab</i>, you will
            see component being load by demand!</p>
          <p><strong>THIS IS AWESOME!</strong> Async Components rules!</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ router }) {
  return {
    router,
  };
}

export default connect(mapStateToProps)(Home);
