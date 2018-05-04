import { css } from 'styled-components';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_vars.scss');

const breakpoint = type => Object.keys(theme.gridBreakpoints).reduce((accumulator, label) => {
  const emUnit = theme.gridBreakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (${type}-width: ${emUnit}em) {
    ${css(...args)}
    }
  `;

  return accumulator;
}, {});

export default {
  min: breakpoint('min'),
  max: breakpoint('max'),
};
