/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */


import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import routes from './routes';

// Application Theme
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_vars.scss'); // eslint-disable-line import/no-webpack-loader-syntax

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          {renderRoutes(routes)}
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
