import React from "react";
import {format} from 'date-fns'

import {IncomeRow} from '../Row'
import { Container } from "./styles";

export const IncomeTable: React.FC = () => {
  const itemsMock = [
    {
      name: "Salário",
      value: 15,
      firstDueDate: format(new Date("2050-05-25 00:00:00"), 'dd/MM/yyyy'),
      lastDueDate: format(new Date("2050-05-25 00:00:00"), 'dd/MM/yyyy'),
      createdAt: format(new Date("2050-05-25 00:00:00"), 'dd/MM/yyyy'),
    },
  ];
  return (
      <Container>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <th>Primeira cobrança</th>
          <th>Última cobrança</th>
          <th>Data de Criação</th>
        </tr>
        {itemsMock.map((income) => (
          <IncomeRow key={income.name} income={income}/>
        ))}
      </Container>
  );
};