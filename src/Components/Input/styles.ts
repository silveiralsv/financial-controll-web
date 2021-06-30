import styled from 'styled-components';
import {FaMoneyBillAlt} from 'react-icons/fa';
import { shade } from 'polished';

type ErrorProps = {
  hasError: boolean;
}

export const Container = styled.div<ErrorProps>`
  display: flex;
  flex-direction: column;
  
  position: relative;

  span { 
    margin-bottom: 8px;
    color: var(--gray-100);
    font-size:16px;
    font-weight: 500;
  } 

`;



export const InputContainer = styled.input<ErrorProps>`
  padding: 12px 25px;
  background-color: var(--gray-300);
  outline: none;
  
  border-radius: ${props => props.hasError ? '5px 0 5px 5px' : '5px'};
  border: ${props => props.hasError ? '2px solid var(--red)' : '2px solid var(--gray-900)'};

  &[type=number], &[type=date] {
    padding: 12px 25px 12px 50px;
  }

  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }

  &[type=date]::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 10px;
    bottom: 7px;
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    

    &:hover {
      color: ${shade(0.8, '#29292e')};
    }

    transition: color 0.2s;

  }

  &::placeholder {
    color: var(--gray-800);
    opacity: 1; 
  }

`;

export const MoneyIcon = styled(FaMoneyBillAlt)`
  position: absolute;  

  height: 30px;
  width: 30px;
  color: var(--gray-800);

  left: 10px;
  bottom: 7px;
`;

export const ErrorContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  background-color: var(--red);
  width: 10px;
  height: 27px;

  align-items: center;
  
  
  margin-left: 10px;
  padding-left: 10px;
  
`;






