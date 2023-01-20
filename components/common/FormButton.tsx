import { cls } from "../../libs/utils";

interface FormButtonProps {
  name: string;
  disabled?: boolean;
}

const FormButton = ({ name, disabled }: FormButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cls(
        "w-full rounded-lg py-2 text-[15px] font-semibold text-white disabled:bg-gray-200",
        disabled ? "bg-slate-200" : "bg-primary"
      )}
    >
      {name}
    </button>
  );
};

export default FormButton;
