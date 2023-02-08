interface FormButtonProps {
  name: string;
  disabled?: boolean;
}

const FormButton = ({ name, disabled }: FormButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="w-full rounded-lg bg-primary py-2 text-[15px] font-semibold text-white disabled:bg-gray-200"
    >
      {name}
    </button>
  );
};

export default FormButton;
