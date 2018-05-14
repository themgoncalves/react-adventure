/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: ${props => props.theme.colors.palette.color6};
  height: 100%;
`;

const LoginWrapper = styled.div`
  background-color: transparent;
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 8px;
`;

const TheMgoncalvesLogo = styled.img`
  display: block;
  max-width: 320px !important;
  margin: 40px auto;
`;

const FormWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FormItem = styled.li`
  width: 100%;
  margin-bottom: 16px;
  text-align: ${props => (props.textAlign === 'right' ? 'right' : 'left')};
`;

const ForgotPassword = styled.a`
  color: white;
  font-size: 12px;
  &:hover{
    color: white;
    text-decoration: underline;
  }
`;

export {
  MainWrapper,
  LoginWrapper,
  TheMgoncalvesLogo,
  FormWrapper,
  FormItem,
  ForgotPassword,
};
