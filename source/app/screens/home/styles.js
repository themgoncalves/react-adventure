import styled, { injectGlobal } from 'styled-components';

import Background from 'static/images/background/pure-minimal.png';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    background: white url(${Background}) no-repeat center center fixed;
    background-size: cover;
  }
`;
/* eslint-enable no-unused-expressions */

const HeaderWrapper = styled.div`
  background-color: #F3F1F1;
  height: 100%;
  margin: 120px 0 80px;
`;

const TheMgoncalvesLogo = styled.img`
  display: block;
  max-width: 420px;
  margin: 0 auto;
`;

const Menu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding:0;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

const MenuItem = styled.li`
  display: inline-block;
  padding: 0 10px;
  border-right: solid 1px #000;
  > a {
    color: black;
  }

  &:last-child{
    border-right: none;
  }
`;

export { HeaderWrapper, TheMgoncalvesLogo, Menu, MenuItem };
