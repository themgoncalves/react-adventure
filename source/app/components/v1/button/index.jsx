/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */


import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken, rgba } from 'polished';

function Button(props) {
  return (
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ secondary }) => secondary && css`
    background-color: ${props => props.theme.colors.secondary}; 
    color: ${props => darken(0.6, props.theme.colors.secondary)};
  `};
  ${({ primary }) => primary && css`
    background-color: ${props => props.theme.colors.primary}; 
    color: white;
  `};
  ${({ info }) => info && css`
    background-color: ${props => props.theme.colors.info}; 
    color: white;
  `};
  ${({ warning }) => warning && css`
    background-color: ${props => props.theme.colors.warning}; 
    color: white;
  `};
  ${({ danger }) => danger && css`
    background-color: ${props => props.theme.colors.danger}; 
    color: white;
  `};
  width: 100%;
  margin-top: 20px;
  padding: 10px 26px;
  border: none;
  border-radius: 3px;
  transition: all ease 0.3s;

  &:focus,
  &:hover {
    outline: 0;
    ${({ secondary }) => secondary && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.secondary, 0.6)};
    `};
    ${({ primary }) => primary && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.primary, 0.6)};
    `};
    ${({ info }) => info && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.info, 0.6)};
    `};
    ${({ warning }) => warning && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.warning, 0.6)};
    `};
    ${({ danger }) => danger && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.danger, 0.6)};
    `};
  }
  &:active {
    ${({ secondary }) => secondary && css`
      background-color: ${props => darken(0.2, props.theme.colors.secondary)};
    `};
    ${({ primary }) => primary && css`
      background-color: ${props => darken(0.2, props.theme.colors.primary)};
    `};
    ${({ info }) => info && css`
      background-color: ${props => darken(0.2, props.theme.colors.info)};
    `};
    ${({ warning }) => warning && css`
      background-color: ${props => darken(0.2, props.theme.colors.warning)};
    `};
    ${({ danger }) => danger && css`
      background-color: ${props => darken(0.2, props.theme.colors.danger)};
      color: ${props => darken(0.2, props.theme.colors.secondary)};
    `};
  }
  &[disabled] {
    background-color: ${darken(0.3, '#FFF')};
    color: ${darken(0.46, '#FFF')};
    text-shadow: 0 1px 1px ${darken(0.15, '#FFF')};
    &:focus,
    &:hover {
      outline: 0;
      box-shadow: none;
    }
  }
`;
Button.propTypes = {
  /** Primary style */
  primary: PropTypes.bool,
  /** Secondary style */
  secondary: PropTypes.bool,
  /** Info style */
  info: PropTypes.bool,
  /** Warning style */
  warning: PropTypes.bool,
  /** Danger style */
  danger: PropTypes.bool,
  /** Button label */
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  secondary: true,
  info: false,
  warning: false,
  danger: false,
};

/** @component */
export default Button;
