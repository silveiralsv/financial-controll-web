import React from 'react';

import { PrimaryButtonContainer, SecondaryButtonContainer } from './styles';

type ButtonProps = {
  label: string;
  onClick: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <PrimaryButtonContainer onClick={onClick} type="button">{label}</PrimaryButtonContainer>
  );
}


export const SecondaryButton: React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <SecondaryButtonContainer onClick={onClick} type="button">{label}</SecondaryButtonContainer>
  );
}
