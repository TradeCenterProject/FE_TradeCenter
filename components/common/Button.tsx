import { cls } from "@libs/utils";

interface ButtonProps {
  color?: "green" | "red";
  value: string;
}

const Button = ({ color, value }: ButtonProps) => {
  return (
    <button
      className={cls(
        "cursor-pointer rounded-[3px] border border-borderColor py-[1.6px] px-4 text-sm font-semibold leading-normal",
        color === "green"
          ? "bg-primary text-white active:bg-green-600"
          : color === "red"
          ? "bg-[#D9736F] text-white active:bg-red-600"
          : "bg-gray-100 text-gray-700 active:bg-gray-300"
      )}
    >
      {value}
    </button>
  );
};

export default Button;
