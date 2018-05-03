/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ProjectInfo from '../../../../package.json';

/* eslint-disable func-names */
export default function seo({ title = '', description = '', robots = 'index, follow', ...args } = {}) {
  return function (WrappedComponent) {
    return function (props) {
      return (
        <React.Fragment>
          <Helmet>
            <meta name="description" content={description} />
            <title>{ProjectInfo.description}</title>
            <meta name="robots" content={robots} />
          </Helmet>
          <WrappedComponent {...props} />
        </React.Fragment>
      );
    };
  };
}
