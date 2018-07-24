/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.1.0
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
  box-sizing: border-box;
  transition: all ease 0.3s;
  &:focus,
  &:active {
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
`;

Input.propTypes = {
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
  /** Input type */
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
