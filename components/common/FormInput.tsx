interface FormInputProps {
  id: string;
  required?: boolean;
}

const FormInput = ({ ...rest }: FormInputProps) => {
  return (
    <input
      {...rest}
      type="text"
      className="h-fit w-full rounded-sm border border-borderColor bg-transparent py-[0.1rem] px-1 outline-none"
    />
  );
};

export default FormInput;
