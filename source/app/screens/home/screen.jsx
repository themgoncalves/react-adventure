/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import animate from 'decorators/animate';
import PropTypes from 'prop-types';
import { unauthenticateUser } from 'actions';
import TheMgoncavesLogoImage from 'static/images/themgoncalves-white.png';
import GitHubIcon from 'static/images/icons/github.svg';

import ProjectInfo from '../../../../package.json';

import {
  MainWrapper,
  HeaderWrapper,
  Logo,
  Menu,
  MenuItem,
} from './styles';


/* eslint-disable jsx-a11y/anchor-is-valid */
@animate
class Home extends Component {
  static propTypes = {
    unauthenticateUser: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array,
      isAuthenticated: PropTypes.bool,
    }).isRequired,
  }

  handleLogout = () => {
    this.props.unauthenticateUser();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home | {ProjectInfo.description}</title>
        </Helmet>
        <MainWrapper>
          <div className="container">
            <div className="row">
              <HeaderWrapper className="col-12">
                <Link to="/">
                  <Logo src={TheMgoncavesLogoImage} alt="TheMgoncalves logo" />
                </Link>
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
                    <MenuItem><a href="javascript:void(0);" onClick={this.handleLogout}>Logout</a></MenuItem> // eslint-disable-line no-script-url
                  )
                }
                <MenuItem>
                  <a href="https://github.com/themgoncalves/react-redux-async-starter-kit" target="_black"> {/* eslint-disable-line no-script-url */}
                    <img src={GitHubIcon} height={16} alt="GitHub icon" style={{ marginRight: '6px' }} />
                    GitHub
                  </a>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { unauthenticateUser })(Home);
