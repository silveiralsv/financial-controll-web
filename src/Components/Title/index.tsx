import React from 'react';

import { TitleSpan, TitleContainer } from './styles';

type TitleProps = {
  text: string;
}

export const Title: React.FC<TitleProps> = ({text, children}) => {
  return (
    <TitleContainer>
      <TitleSpan>
        {text}
      </TitleSpan>
      {children}
    </TitleContainer>
  );
}

