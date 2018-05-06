import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return (
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
  )
};

const ButtonStyled = styled.button`
  background-color: ${props => props.theme.colors.warning}; 
  color: white;
  width: 100%;
  margin-top: 20px;
  padding: 10px 26px;
  border: none;
  border-radius: 4px;
  transition: all ease 0.3s;

  &:focus,
  &:hover {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.warning).fade(0.6).toString()};
  }
  &:active {
    background-color: ${props => color(props.theme.colors.warning).darken(0.2).toString()}; 
  }
`;

Button.propTypes = {
  primary: PropTypes.bool, // eslint-disable-line react/forbid-prop-types
  secondary: PropTypes.bool, // eslint-disable-line react/forbid-prop-types
  info: PropTypes.bool, // eslint-disable-line react/forbid-prop-types
  warning: PropTypes.bool, // eslint-disable-line react/forbid-prop-types
  danger: PropTypes.bool, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

Button.defaultProps = {
  primary: true,
  secondary: false,
  info: false,
  warning: false,
  danger: false,
  children: null,
}
