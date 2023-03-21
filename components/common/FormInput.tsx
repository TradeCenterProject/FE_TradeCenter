import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  id: string;
  required?: boolean;
  register: UseFormRegisterReturn;
}

const FormInput = ({ register, ...rest }: FormInputProps) => {
  return (
    <input
      {...register}
      {...rest}
      type="text"
      className="h-fit w-full rounded-sm border border-borderColor bg-transparent py-[0.1rem] px-1 outline-none"
    />
  );
};

export default FormInput;
