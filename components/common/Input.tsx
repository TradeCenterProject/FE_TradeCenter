import { useState } from "react";
import { cls } from "@utils/styles";

import PasswordOpenIcon from "@public/password_open_icon.svg";
import PasswordCloseIcon from "@public/password_close_icon.svg";

interface InputProps {
  type: string;
  [key: string]: any;
}

const Input = ({ type: initialType, ...rest }: InputProps) => {
  const [type, setType] = useState(initialType);

  const onTogglePasswordOpen = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="relative">
      <input
        type={type}
        {...rest}
        className={cls(
          "w-full rounded-lg bg-slate-50 py-3 px-4 text-sm outline-none placeholder:text-gray-400",
          initialType === "password" ? "pr-10" : ""
        )}
      />
      <div className="absolute right-3 top-4" onClick={onTogglePasswordOpen}>
        {initialType === "password" &&
          (type === "password" ? (
            <PasswordOpenIcon width="16" className="pt-[1px]" />
          ) : (
            <PasswordCloseIcon width="16" />
          ))}
      </div>
    </div>
  );
};

export default Input;
