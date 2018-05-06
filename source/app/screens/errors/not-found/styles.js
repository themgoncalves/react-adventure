import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mediaBreakpoint from 'hoc/media-breakpoint';

const MainWrapper = styled.div`
  background: ${props => props.theme.gradients.expresso.baseColor}; 
  background: ${props => props.theme.gradients.expresso.gradient}; 
  height: 100%;
`;

const ErrorImageWrapper = styled.div`
  display: flex;
  padding: 110px 0;
  > div {
    flex: 1;
    > img {
      margin: 0 auto;
    }
    ${mediaBreakpoint.min.lg`
      &:first-child {
        padding-left: 100px;
      }
      &:last-child {
        padding-right: 100px;
      }
    `}
    ${mediaBreakpoint.min.xl`
      &:first-child {
        padding-left: 140px;
      }
      &:last-child {
        padding-right: 140px;
      }
    `}
  }
`;

const ErrorInfoWrapper = styled.div`
  color: #FFF;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  font-size: 34px;
  font-weight: ${props => props.theme.fontNormal};
`;

const GoBackButton = styled(Link)`
  background-color: white;
  color: ${props => props.theme.colors.warning};
  display: inline-block;
  padding: 10px 36px;
  margin-top: 30px;
  text-decoration: none !important;
  text-transform: capitalize;
  border-radius: 6px;
  transition: all ease 0.3s;
  &:hover{
    box-shadow: 0 10px 12px -6px #c09c14;
  }
`;

export {
  MainWrapper,
  ErrorImageWrapper,
  ErrorInfoWrapper,
  ErrorTitle,
  GoBackButton,
};
