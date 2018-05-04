/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import mediaBreakpoint from 'hoc/media-breakpoint';

function NotFound() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ErrorWrapper>
              <ErrorItem>
                <img src={require('static/not-found/4.png')} className="img-responsive" alt="404" />
              </ErrorItem>
              <ErrorItem >
                <img src={require('static/not-found/0.png')} className="img-responsive" alt="404" />
              </ErrorItem>
              <ErrorItem>
                <img src={require('static/not-found/4.png')} className="img-responsive" alt="404" />
              </ErrorItem>
            </ErrorWrapper>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ErrorBottomWrapper>
              <ErrorTitle>Something is Wrong</ErrorTitle>
              <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
              <GoBackLink to="/">Go Home</GoBackLink>
            </ErrorBottomWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.warning};
  height: 100%;
`;

const ErrorWrapper = styled.div`
  display: flex;
  padding: 110px 0;
`;

const ErrorBottomWrapper = styled.div`
  color: #FFF;
  text-align: center;
`;

const ErrorItem = styled.div`
  flex: 1;
  ${mediaBreakpoint.min.lg`
    &:first-child {
      padding-left: 100px;
    }
    &:last-child {
      padding-right: 100px;
    }
  `}
`;

const ErrorTitle = styled.h2`
  font-size: 34px;
  font-weight: ${props => props.theme.fontNormal};
`;

const GoBackLink = styled(Link)`
  background-color: white;
  display: inline-block;
  padding: 10px 36px;
  margin-top: 30px;
  text-decoration: none !important;
  text-transform: capitalize;
  border-radius: 6px;
  transition: all ease 0.3s;
  &:hover{
    box-shadow: 0 10px 12px -6px #c09c14;
  }
`;

export default NotFound;
