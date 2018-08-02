/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import animate from 'decorators/animate';
import PropTypes from 'prop-types';
import { unauthenticateUser } from 'actions';

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
export class Home extends Component {
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
                  <a href="https://github.com/themgoncalves/react-adventure" target="_black"> {/* eslint-disable-line no-script-url */}

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
