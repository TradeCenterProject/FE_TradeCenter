import { MouseEvent } from "react";

import { cls } from "@utils/styles";
import { POSITION } from "@constants/account";

interface TabProps {
  id: string;
  isActive: boolean;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tab = ({ id, isActive, handleClick }: TabProps) => {
  return (
    <button
      id={id}
      className={cls(
        "w-1/2 border-b-2 p-2",
        isActive
          ? "border-primary text-primary"
          : "border-gray-200 text-gray-400"
      )}
      onClick={handleClick}
    >
      {POSITION[id]}
    </button>
  );
};

export default Tab;
