/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import auth from 'decorators/auth';
import animate from 'decorators/animate';

import TheMgoncavesLogoImage from 'static/images/themgoncalves-white.png';

import {
  MainWrapper,
  HeaderWrapper,
  Logo,
  Message,
} from './styles';

import ProjectInfo from '../../../../package.json';

/* eslint-disable jsx-a11y/anchor-is-valid */
@auth
@animate
class RestrictedArea extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Restricted Area | {ProjectInfo.description}</title>
        </Helmet>
        <MainWrapper>
          <div className="container">
            <div className="row">
              <HeaderWrapper className="col-12">
                <Logo src={TheMgoncavesLogoImage} alt="TheMgoncalves logo" />
              </HeaderWrapper>
              <Message className="col-12">
                Welcome to the <span>restricted area</span>
              </Message>
            </div>
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default RestrictedArea;
