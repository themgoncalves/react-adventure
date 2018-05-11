import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: ${props => props.theme.colors.palette.color6};
  height: 100%;
  color: white;
`;

const HeaderWrapper = styled.div`
  height: 100%;
  margin: 120px 0 80px;
`;

const Logo = styled.img`
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
  padding: 0 20px;
  margin-bottom: 10px;
  border-right: solid 1px #606368;
  > a {
    color: white;
  }

  &:last-child{
    border-right: none;
  }
`;

export { MainWrapper, HeaderWrapper, Logo, Menu, MenuItem };
