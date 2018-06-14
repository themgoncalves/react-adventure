/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
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
  ${({ primary }) => primary && css`
    background-color: ${props => props.theme.colors.primary}; 
    color: white;
  `};
  ${({ secondary }) => secondary && css`
    background-color: ${props => props.theme.colors.secondary}; 
    color: ${props => darken(0.6, props.theme.colors.secondary)};
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
    ${({ primary }) => primary && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.primary, 0.6)};
    `};
    ${({ secondary }) => secondary && css`
      box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.secondary, 0.6)};
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
    ${({ primary }) => primary && css`
      background-color: ${props => darken(0.2, props.theme.colors.primary)};
    `};
    ${({ secondary }) => secondary && css`
      background-color: ${props => darken(0.2, props.theme.colors.secondary)};
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
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  primary: false,
  secondary: true,
  info: false,
  warning: false,
  danger: false,
  children: null,
};

export default Button;
