interface FormInputProps {
  id: string;
}

const FormInput = ({ id }: FormInputProps) => {
  return (
    <input
      id={id}
      type="text"
      className="h-fit w-full rounded-sm border border-borderColor bg-transparent py-[0.1rem] px-1 outline-none"
    />
  );
};

export default FormInput;
