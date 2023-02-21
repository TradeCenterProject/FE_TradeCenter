import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useCallback,
} from "react";

import validate from "@utils/account";
import { UserJoinFormType } from "@typings/account";

interface UseFormProps {
  initialValues: UserJoinFormType;
}

interface FormErrorProps {
  [name: string]: string;
}

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrorProps>();
  const [isSubmitable, setIsSubmitable] = useState(false);

  const checkSubmitable = useCallback(() => {
    if (!errors) return false;

    const invalidValues = Object.keys(values).filter((name) => {
      return (
        errors[name] !== undefined &&
        (values[name] === "" || errors[name] !== "")
      );
    });

    setIsSubmitable(!Boolean(invalidValues.length));
  }, [errors, values]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const newValues = { ...values, [name]: value };

    setValues(newValues);
    setErrors(validate(newValues));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sign up
  };

  useEffect(() => {
    checkSubmitable();
  }, [values, checkSubmitable]);

  return {
    values,
    errors,
    isSubmitable,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
