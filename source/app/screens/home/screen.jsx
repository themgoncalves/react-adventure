/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(props) {
  return (
    <div>
      Home Component
      <Link to="/login">Login</Link>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
