import React from 'react';

import { Container, DateInput } from './styles';

export const DatePicker: React.FC = () => {
  return (
    <Container>
      <DateInput 
        onChange={console.log}
      />
    </Container>
  )
};

