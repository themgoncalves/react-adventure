/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import {
  MainWrapper,
  ErrorImageWrapper,
  ErrorInfoWrapper,
  ErrorTitle,
  GoBackButton,
} from './styles';

function NotFound() {
  return (
    <MainWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ErrorImageWrapper>
              <div>
                <img src={require('static/images/not-found/4.png')} className="img-responsive" alt="404" />
              </div>
              <div>
                <img src={require('static/images/not-found/0.png')} className="img-responsive" alt="404" />
              </div>
              <div>
                <img src={require('static/images/not-found/4.png')} className="img-responsive" alt="404" />
              </div>
            </ErrorImageWrapper>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ErrorInfoWrapper>
              <ErrorTitle>Something is Wrong</ErrorTitle>
              <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
              <GoBackButton to="/">Go Home</GoBackButton>
            </ErrorInfoWrapper>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default NotFound;
