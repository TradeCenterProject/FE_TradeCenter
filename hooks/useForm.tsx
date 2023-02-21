import { ChangeEvent, useState } from "react";

import validate from "@utils/account";
import { UserJoinFormType } from "@typings/account";

interface UseFormProps {
  initialValues: UserJoinFormType;
}

interface FormErrorProps {
  email: string;
  password: string;
  passwordCheck: string;
}

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrorProps>();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    setErrors(validate(newValues));
  };

  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
