import styled from 'styled-components';



export const Container = styled.div`
  height: 100%;
  width: 85px;

  position: fixed;
  top: 0;
  left:0;

  background-color: var(--gray-800);
  padding-top: 60px;

  &:hover {
    width: 250px;
  }

  z-index: 1;
  transition: 0.5s;
  white-space: nowrap;
  overflow-x: hidden;
`;

type IPageSpacer = {
  isExpanded:boolean;
}

export const PageSpacer = styled.div<IPageSpacer>`
  margin-left: ${props => props.isExpanded ? '250px' : '85px'};
  transition: 0.5s;
  height: 100vh;
  padding: 5% 5%;
`


