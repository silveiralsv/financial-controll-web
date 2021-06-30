import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const TesteContainer = styled.div`
  padding: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 45%;
  }

  & + & {
    margin-top: 30px;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  margin-top: 30px;

  button {
    width: 30%
  }
`