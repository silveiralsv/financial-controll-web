import {IncomeObject} from '../Income'

export type TransactionObject =  IncomeObject & {
  type: 'income' | 'outcome';
}