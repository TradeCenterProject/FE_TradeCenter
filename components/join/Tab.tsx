import { cls } from "@utils/styles";
import { ReactNode, MouseEvent } from "react";

interface TabProps {
  isActive: boolean;
  value: string;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tab = ({ isActive, value, handleClick }: TabProps) => {
  return (
    <button
      id={value}
      className={cls(
        "w-1/2 border-b-2 p-2",
        isActive
          ? "border-primary text-primary"
          : "border-gray-200 text-gray-400"
      )}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Tab;
