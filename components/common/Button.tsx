import { cls } from "@utils/styles";

interface ButtonProps {
  color?: "green" | "red" | "yellow";
  outline?: boolean;
  value: string;
  form?: string;
  handleClick?: () => void;
}

const Button = ({ color, outline, value, form, handleClick }: ButtonProps) => {
  return (
    <button
      form={form}
      className={cls(
        "cursor-pointer rounded-[3px] border border-borderColor py-[1.6px] px-5 text-[0.8rem] font-semibold leading-normal outline-0",
        color === "green"
          ? outline
            ? "border-primary bg-slate-100 text-primary"
            : "bg-primary text-white active:bg-green-600"
          : color === "red"
          ? "bg-[#D9736F] text-white active:bg-red-600"
          : color === "yellow"
          ? "bg-mutedYellow text-white"
          : "bg-gray-100 text-gray-700 active:bg-gray-300"
      )}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
