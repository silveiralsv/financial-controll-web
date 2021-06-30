import React from 'react';

import { InputContainer, Container, MoneyIcon, ErrorContainer } from './styles';


type InputProps = {
  label: string;
  name: string;
  error?: boolean;
  errorMessage?:string;
  placeholder?: string;
  value: string | number;
  type?: 'number' | 'text' | 'currency' | 'date';
  onChange: (value: string, name: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  name, 
  error = false,
  errorMessage,
  type = 'text', 
  placeholder,
  value,
  onChange
  }) => {
  
  const renderInputByType = () => {
    switch (type) {
      case 'currency':
        return (
          <>
            <MoneyIcon />
            <InputContainer 
              hasError={errorMessage ? true : false}
              onChange={(event) => onChange(event.target.value, name)}
              type="number"
              value={value ?? ''}
            />
          </>
        );
      default:
        return (
          <InputContainer 
            hasError={!!errorMessage}
            onChange={(event) => onChange(event.target.value, name)}
            type={type}
            value={value ?? ''}
            placeholder={placeholder ?? ''}
          />
        );
    }
  }
  
  console.log('@@@error', !!errorMessage)
  console.log('@@@error2', errorMessage)
  
  return (
    <Container hasError={!!errorMessage}>
      <span>{label}</span>
      {renderInputByType()}
      {!!errorMessage && (
        <ErrorContainer >
          {errorMessage}
        </ErrorContainer>
      )}
    </Container>
  ); 
}

