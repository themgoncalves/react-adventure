/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */


import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import color from 'color';

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
    color: ${props => color(props.theme.colors.secondary).darken(0.6).toString()};
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
      box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.primary).fade(0.6).toString()};
    `};
    ${({ secondary }) => secondary && css`
      box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.secondary).fade(0.6).toString()};
    `};
    ${({ info }) => info && css`
      box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.info).fade(0.6).toString()};
    `};
    ${({ warning }) => warning && css`
      box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.warning).fade(0.6).toString()};
    `};
    ${({ danger }) => danger && css`
      box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.danger).fade(0.6).toString()};
    `};
  }
  &:active {
    ${({ primary }) => primary && css`
      background-color: ${props => color(props.theme.colors.primary).darken(0.2).toString()};
    `};
    ${({ secondary }) => secondary && css`
      background-color: ${props => color(props.theme.colors.secondary).darken(0.2).toString()};
    `};
    ${({ info }) => info && css`
      background-color: ${props => color(props.theme.colors.info).darken(0.2).toString()};
    `};
    ${({ warning }) => warning && css`
      background-color: ${props => color(props.theme.colors.warning).darken(0.2).toString()};
    `};
    ${({ danger }) => danger && css`
      background-color: ${props => color(props.theme.colors.danger).darken(0.2).toString()};
      color: ${props => color(props.theme.colors.secondary).darken(0.2).toString()};
    `};
  }
  &[disabled] {
    background-color: ${color('#fff').darken(0.3).toString()};
    color: ${color('#fff').darken(0.46).toString()};
    text-shadow: 0 1px 1px ${color('#fff').darken(0.15).toString()};
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
