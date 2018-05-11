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

const Message = styled.div`
  background-color: ${props => props.theme.colors.danger};
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
  padding: 2px 0;
`;

export { MainWrapper, HeaderWrapper, Logo, Message };
