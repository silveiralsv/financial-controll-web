import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
      color: var(--ocean-blue-100);
      font-weight: 600;
      padding: 1rem 1rem;
      text-align: left;
      line-height:1.5rem;
    }

  td {
    padding: 1rem 1rem;
    border: 0;
    /* background: var(--shape); */
    color: var(--gray-100);
    border-radius: 0.25rem;

    &:first-child {
      /* color: var(--text-title) */
    }
    

    &.deposit{
    }

    &.withdraw{
      /* color: var(--red) */
    }
  }

`;