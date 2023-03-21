import { cls } from "@utils/styles";

interface ButtonProps {
  color?: "green" | "red";
  value: string;
  form?: string;
  handleClick?: () => void;
}

const Button = ({ color, value, form, handleClick }: ButtonProps) => {
  return (
    <button
      form={form}
      className={cls(
        "cursor-pointer rounded-[3px] border border-borderColor py-[1.6px] px-5 text-[0.8rem] font-semibold leading-normal outline-0",
        color === "green"
          ? "bg-primary text-white active:bg-green-600"
          : color === "red"
          ? "bg-[#D9736F] text-white active:bg-red-600"
          : "bg-gray-100 text-gray-700 active:bg-gray-300"
      )}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
