import React , {useState}from 'react';

import {api} from '../../../services/api'
import {toast} from 'react-toastify'

import {validate} from '../../../utils/Validator'
import {IncomeObject, NewIncomeErrorFields} from '../../../types/Income'
import {Title} from '../../../Components/Title'
import {PrimaryButton} from '../../../Components/Button'
import {Input} from '../../../Components/Input'
import { Container, InputContainer, ButtonContainer, TesteContainer } from './styles';

const NewIncome: React.FC = () => {

  const [newIncome, setNewIncome] = useState<IncomeObject>({} as IncomeObject);
  const [errorFields, setErrorFields] = useState({} as NewIncomeErrorFields)

  const handleInputChange = (value: string, name: string) => {
    const mapped: any = {
      ...newIncome
    };
    mapped[name] = value;
    setNewIncome({
      ...mapped
    })
  }

  const handleSubmit = async () => {
    try {
      if(failValidation()){
        return;
      }
      await api.post('transaction', {
        transaction: {
          ...newIncome,
          type: 'income',
          createdAt: new Date().toString(),
        }
      })
      toast.success('Income created!')
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro');
    } 
    setNewIncome({} as IncomeObject )
  }

  const failValidation = () => {
    setErrorFields({} as NewIncomeErrorFields);
    const rules = [
      {
        fieldName: 'name',
        trigger: !newIncome?.name,
        toastMessage: 'Nome é obrigatório',
        errorMessage: 'Campo obrigatório',
      },
      {
        fieldName: 'value',
        trigger: !newIncome?.value,
        toastMessage: 'Valor é obrigatório',
        errorMessage: 'Campo obrigatório',
      },
      {
        fieldName: 'firstDueDate',
        trigger: !newIncome?.firstDueDate,
        toastMessage: 'Primeira Cobrança é obrigatório',
        errorMessage: 'Campo obrigatório',
      },
      {
        fieldName: 'lastDueDate',
        trigger: !newIncome?.lastDueDate,
        toastMessage: 'Última Cobrança é obrigatório',
        errorMessage: 'Campo obrigatório',
      },
    ]

    const fieldWithErrors = validate(rules);

    if(fieldWithErrors.length > 0) {

     const mappedErrors = fieldWithErrors.reduce((acc, error) => {
      acc[error.fieldName] = error.errorMessage;
      return acc;
     }, {} as any)
      setErrorFields(mappedErrors)
      return true
    };
    return false;
  }

  
  return (
  <Container>
    <Title text="Nova Entrada"/>
    
    <TesteContainer>

    <InputContainer>
      <Input 
      label="Nome" 
      errorMessage={errorFields.name}
      placeholder="Nome da entrada"
      name="name" 
      onChange={handleInputChange}
      value={newIncome.name}
      />
      <Input label="Valor" name="value" onChange={handleInputChange} type="currency"
        value={newIncome.value}
        
      errorMessage={errorFields.value}
      />
    </InputContainer>
    
    <InputContainer>
      <Input label="Primeira Cobrança" name="firstDueDate" onChange={handleInputChange}
      value={newIncome.firstDueDate}
      type="date"
      errorMessage={errorFields.firstDueDate}
      />
      <Input label="Última Cobrança" name="lastDueDate" onChange={handleInputChange}
      value={newIncome.lastDueDate}
      type="date"
      errorMessage={errorFields.lastDueDate}
      />
    </InputContainer>
    
    <ButtonContainer>
      <PrimaryButton label="Adicionar" onClick={handleSubmit}/>
    </ButtonContainer>
    </TesteContainer>

  </Container>
  );
}

export default NewIncome;