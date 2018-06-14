/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

function Input(props) {
  return (
    <InputStyled {...props} />
  );
}

const InputStyled = styled.input`
  background-color: white;
  width: 100%;
  padding: 8px 14px;
  border: none;
  border-radius: 3px;
  transition: all ease 0.3s;
  &:focus,
  &:active {
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
`;

Input.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'search',
    'tel',
    'time',
    'date',
  ]).isRequired,
};

Input.defaultProps = {
  primary: false,
  secondary: true,
  info: false,
  warning: false,
  danger: false,
};

export default Input;
