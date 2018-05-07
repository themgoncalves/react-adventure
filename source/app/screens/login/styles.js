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
  text-align: ${props => (props.textAlign === 'right' ? 'right' : 'left')};
  > input[type=text],
  > input[type=password] {
    background-color: white;
    width: 100%;
    padding: 8px 16px;
    border-radius: 3px;
    border: solid 1px #54265A;
    transition: all ease 0.3s;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.colors.warning};
      box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.warning).fade(0.6).toString()};
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

export {
  MainWrapper,
  LoginWrapper,
  TheMgoncalvesLogo,
  FormWrapper,
  FormItem,
  ForgotPassword,
};
