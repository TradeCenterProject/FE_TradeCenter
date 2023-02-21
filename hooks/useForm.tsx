import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

import validate from "@utils/account";
import { UserFormType } from "@typings/account";

interface FormErrorProps {
  [name: string]: string;
}

const useForm = (initialValues: UserFormType) => {
  const { pathname } = useRouter();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrorProps>();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const newValues = { ...values, [name]: value };

    if (pathname === "/join") setErrors(validate(newValues));
    setValues(newValues);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, onValid: () => void) => {
    e.preventDefault();
    onValid();
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
