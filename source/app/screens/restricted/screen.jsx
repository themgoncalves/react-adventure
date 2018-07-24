/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.1.0
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
export class RestrictedArea extends Component {
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
                <Link to="/">
                  <Logo src={TheMgoncavesLogoImage} alt="TheMgoncalves logo" />
                </Link>
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
