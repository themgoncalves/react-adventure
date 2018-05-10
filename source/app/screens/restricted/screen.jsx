/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import auth from 'decorators/auth';
import animate from 'decorators/animate';
import { signoutUser } from 'actions';

import Background from 'static/images/background/pure-minimal.png';
import TheMgoncavesLogoImage from 'static/images/themgoncalves.png';

import ProjectInfo from '../../../../package.json';

/* eslint-disable jsx-a11y/anchor-is-valid */
@auth
@animate
class RestrictedArea extends Component {
  static propTypes = {
    signoutUser: PropTypes.func.isRequired,
  }

  handleLogout = () => {
    this.props.signoutUser();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Restricted Area | {ProjectInfo.description}</title>
        </Helmet>
        <div className="container-fluid">
          <HeaderWrapper className="col-12">
            <TheMgoncalvesLogo src={TheMgoncavesLogoImage} />
          </HeaderWrapper>
          <Message>
            Welcome to the <span>restricted area</span>
            <a href="javascript:void(0);" onClick={this.handleLogout}>Logout</a> {/* eslint-disable-line no-script-url */}
          </Message>
        </div>
      </React.Fragment>
    );
  }
}
/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    background: white url(${Background}) no-repeat center center fixed;
    background-size: cover;
  }
`;
/* eslint-enable no-unused-expressions */

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

const Message = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: bold;

  > span {
    background-color: ${props => props.theme.colors.danger};
    color: white;
    padding: 2px 10px;
    font-weight: normal;
  }
`;

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signoutUser })(RestrictedArea);
