import React from 'react';
import {IncomeObject} from '../types'

type IncomeRowProps = {
  income: IncomeObject;
}

export const IncomeRow: React.FC<IncomeRowProps> = ({income}) => {
  return (
      <tr>
        <td>{income.name}</td>
        <td>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(income.value)
          }</td>
        <td>{income.firstDueDate}</td>
        <td>{income.lastDueDate} </td>
        <td>{income.createdAt} </td>
      </tr>
  );
}

