export type IncomeObject = {
  name: string;
  value: number;
  firstDueDate: string;
  lastDueDate: string;
  createdAt: string;
};

export type NewIncomeInputs = 'name' | 'value' | 'firstDueDate' | 'lastDueDate';

export type NewIncomeErrorFields = {
  name:string;
  value:string;
  firstDueDate:string;
  lastDueDate:string;
}