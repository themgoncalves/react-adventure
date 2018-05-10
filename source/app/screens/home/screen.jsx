/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import animate from 'decorators/animate';
import { signoutUser } from '../../actions';
import ProjectInfo from '../../../../package.json';

import Background from 'static/images/background/pure-minimal.png';
import TheMgoncavesLogoImage from 'static/images/themgoncalves.png';

/* eslint-disable jsx-a11y/anchor-is-valid */

@animate
class Home extends Component {
  handleLogout = () => {
    this.props.signoutUser();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home | {ProjectInfo.description}</title>
        </Helmet>
        <div className="container-fluid">
          <HeaderWrapper className="col-12">
            <TheMgoncalvesLogo src={TheMgoncavesLogoImage} />
          </HeaderWrapper>
          <Menu>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/restricted-area">Restricted Area</Link></MenuItem>
            <MenuItem><Link to="/not-exiting-route">Not Found Page (404)</Link></MenuItem>
            {!this.props.auth.isAuthenticated ?
              (
                <MenuItem><Link to="/login">Login</Link></MenuItem>
              ) : 
              (
                <MenuItem><a href="javascript:void(0);" onClick={this.handleLogout}>Logout</a></MenuItem>
              )
            }
            <MenuItem><a href="https://github.com/themgoncalves/react-redux-async-starter-kit" target="_black">GitHub</a></MenuItem>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

injectGlobal`
  body {
    background: white url(${Background}) no-repeat center center fixed;
    background-size: cover;
  }
`;

const HeaderWrapper = styled.div`
  background-color: #F3F1F1;
  height: 100%;
  margin: 120px 0 80px;
`;

const TheMgoncalvesLogo = styled.img`
  display: block;
  max-width: 420px;
  margin: 0 auto;
`;

const Menu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding:0;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

const MenuItem = styled.li`
  display: inline-block;
  padding: 0 10px;
  border-right: solid 1px #000;
  > a {
    color: black;
  }

  &:last-child{
    border-right: none;
  }
`;

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { signoutUser })(Home);
