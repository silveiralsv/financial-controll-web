import styled from 'styled-components';
import { shade } from 'polished';

export const PrimaryButtonContainer = styled.button`
  padding: 12px 25px;
  background-color: var(--ocean-blue-300);
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-100);
  font-weight: bold;

  &:hover {
    background-color: ${shade(0.2, '#247BA0')};
  }

  transition: background-color 0.2s;

`;

export const SecondaryButtonContainer = styled(PrimaryButtonContainer)`
  background-color: var(--gray-100);
  color: var(--ocean-blue-300);

  &:hover {
    background-color: ${shade(0.2, '#e1e1e6')};
  }

  transition: background-color 0.2s;

`;