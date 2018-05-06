import styled from 'styled-components';
import color from 'color';

const MainWrapper = styled.div`
  background: ${props => props.theme.gradients.expresso.baseColor}; 
  background: ${props => props.theme.gradients.expresso.gradient}; 
  height: 100%;
`;

const LoginWrapper = styled.div`
  background-color: transparent;
  margin-top: 180px;
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
  text-align: ${props => props.textAlign = 'right' ? 'right' : 'left'};
  > input[type=text],
  > input[type=password] {
    background-color: white;
    width: 100%;
    padding: 8px 16px;
    outline: none;
    border-radius: 3px;
    border: solid 1px #54265A;
    transition: all ease 0.3s;
    &:focus {
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

const ForgotPassword = styled.a`
  color: white;
  font-size: 12px;
  &:hover{
    color: white;
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
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

export {
  MainWrapper,
  LoginWrapper,
  TheMgoncalvesLogo,
  FormWrapper,
  FormItem,
  ForgotPassword,
  LoginButton,
};
