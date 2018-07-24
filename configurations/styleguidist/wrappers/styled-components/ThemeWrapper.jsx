import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_vars.scss');

export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
