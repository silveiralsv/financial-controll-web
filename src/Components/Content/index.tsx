import React from 'react';

import { Container, ContentContainer } from './styles';

export const Content: React.FC = ({children}) => {
  return (
    <Container >
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
  );
}

