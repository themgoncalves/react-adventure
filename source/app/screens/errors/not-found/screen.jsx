/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.2
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import animate from 'decorators/animate';

// Importing images
import ImgNotFound4 from 'static/images/not-found/4.png';
import ImgNotFound0 from 'static/images/not-found/0.png';

// Importing Project Information
import ProjectInfo from '../../../../../package.json';

import {
  MainWrapper,
  ErrorImageWrapper,
  ErrorInfoWrapper,
  ErrorTitle,
  GoBackButton,
} from './styles';

@animate
export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Ops! Page Not Found | {ProjectInfo.description}</title>
        </Helmet>
        <MainWrapper>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ErrorImageWrapper>
                  <div>
                    <img src={ImgNotFound4} className="img-responsive" alt="404" />
                  </div>
                  <div>
                    <img src={ImgNotFound0} className="img-responsive" alt="404" />
                  </div>
                  <div>
                    <img src={ImgNotFound4} className="img-responsive" alt="404" />
                  </div>
                </ErrorImageWrapper>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ErrorInfoWrapper>
                  <ErrorTitle>Something is Wrong</ErrorTitle>
                  <p>The page you are looking for was moved, removed, renamed or might never existed.</p> { /* eslint-disable-line max-len  */ }
                  <GoBackButton to="/">Go Home</GoBackButton>
                </ErrorInfoWrapper>
              </div>
            </div>
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}
