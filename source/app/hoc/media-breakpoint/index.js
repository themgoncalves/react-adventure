/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import { css } from 'styled-components';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_vars.scss'); // eslint-disable-line import/no-webpack-loader-syntax

const breakpoint = type => Object.keys(theme.gridBreakpoints).reduce((accumulator, label) => {
  const emUnit = theme.gridBreakpoints[label] / 16;
  /* eslint-disable no-param-reassign */
  accumulator[label] = (...args) => css`
    @media (${type}-width: ${emUnit}em) {
    ${css(...args)}
    }
  `;
  /* eslint-enable no-param-reassign */

  return accumulator;
}, {});

export default {
  min: breakpoint('min'),
  max: breakpoint('max'),
};
