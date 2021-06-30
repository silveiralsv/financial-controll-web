import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  display: block;
  padding: 8px 8px 8px 32px;
  
  font-size: 25px;

  cursor: pointer;
  color: var(--gray-100);
  &:hover {
    color: ${darken(0.25, '#a8a8b3')}
  }
  transition: color 0.2s;

  svg {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    
  }

`;

export const ItemName = styled.a`
  margin-left: 30px;
  
  
`;