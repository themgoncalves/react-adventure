/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import ProjectInfo from '../../../../package.json';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | {ProjectInfo.description}</title>
      </Helmet>
      Home Component<br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/this-page-do-not-exists">Not Found</Link>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
