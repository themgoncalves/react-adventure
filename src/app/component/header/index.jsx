/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */

import React from 'react';
import { NavLink } from 'react-router-dom';


/**
 * Header stateless component
 * @function
 * @public
 * @see {@link https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless} for further information
 */
function Header() {
  /**
   * Render JSX
   * @function
   * @public
   * @return {Any} React Element
   */
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#appNavbar" aria-controls="appNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">&nbsp;</span>
        </button>
        <div className="collapse navbar-collapse" id="appNavbar">
          <div className="navbar-nav">
            <NavLink to="/" exact className="nav-item nav-link">Home</NavLink>
            <NavLink to="/awesome" className="nav-item nav-link">Awesome Page</NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
