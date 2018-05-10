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
import auth from 'decorators/auth';
import animate from 'decorators/animate';
import ProjectInfo from '../../../../package.json';

import Background from 'static/images/background/pure-minimal.png';
import TheMgoncavesLogoImage from 'static/images/themgoncalves.png';

/* eslint-disable jsx-a11y/anchor-is-valid */
@auth
@animate
class Home extends Component {
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
          </Message>
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

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
