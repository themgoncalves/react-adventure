/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function Login() {
  return (
    <div>Login Screen <LoginButton>Olá</LoginButton></div>
  );
}

const LoginButton = styled.button`
  background-color: ${props => props.theme.primary};
`;

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Login);
