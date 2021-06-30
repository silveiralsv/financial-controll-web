import React from 'react';
import { useRouter } from 'next/router';

import {IncomeTable} from '../../Components/Income/Table';
import {PrimaryButton, SecondaryButton} from '../../Components/Button';
import {Container, TitleContainer  ,Title} from './styles';

const Income: React.FC = () => {
  const router = useRouter();
  
  const handleNewIncomeClick = () => {
    router.push('income/new');
  }
  
  return (
    <Container> 
      <TitleContainer>
        <Title> Entradas</Title>
        <PrimaryButton onClick={handleNewIncomeClick} label="Adicionar Entrada"/>
      </TitleContainer>
      <IncomeTable />
    </Container>
  );
}

export default Income;

