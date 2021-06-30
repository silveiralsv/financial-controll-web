import { toast } from "react-toastify"

type ValidateObj = {
  fieldName: string;
  trigger: boolean;
  toastMessage: string;
  errorMessage: string;
}

type ResultObject = {
  errorMessage: string;
  fieldName: string;
}

export function validate(validade : ValidateObj[]): ResultObject[] {
  toast.dismiss();

  const result = validade
    .filter(eaValidation => eaValidation.trigger)
    .map(eaValidation => {
      toast.error(eaValidation.toastMessage);
      return {
        fieldName: eaValidation.fieldName,
        errorMessage: eaValidation.errorMessage,
      };
    });

  return result;
}