import styled from 'styled-components';

const LoadingWrapper = styled.div`
  background-color: ${props => props.theme.colors.palette.color6};
  width: 100%;
  height: 100%;
  text-align: right;
`;

const LoadingText = styled.span`
  background-color: white;
  color: ${props => props.theme.colors.palette.color6};
  padding: 4px 12px;
  text-align: center;
  border-radius: 0 0 0 3px;
`;

export { LoadingWrapper, LoadingText };
