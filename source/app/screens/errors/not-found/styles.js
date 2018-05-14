/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color from 'color';
import mediaBreakpoint from 'hoc/media-breakpoint';

const MainWrapper = styled.div`
  background-color: ${props => props.theme.colors.palette.color6};
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
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  padding: 10px 36px;
  margin-top: 30px;
  text-decoration: none !important;
  text-transform: capitalize;
  border-radius: 6px;
  transition: all ease 0.3s;

  &:focus,
  &:hover {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => color(props.theme.colors.secondary).fade(0.6).toString()};
  }
  &:active {
    background-color: ${color('#fff').darken(0.1).toString()}; 
  }
`;

export {
  MainWrapper,
  ErrorImageWrapper,
  ErrorInfoWrapper,
  ErrorTitle,
  GoBackButton,
};
