import { ChangeEvent, useEffect, useState } from "react";
import { cls } from "@utils/styles";

import PasswordOpenIcon from "@public/images/password_open_icon.svg";
import PasswordCloseIcon from "@public/images/password_close_icon.svg";

interface InputProps {
  name: string;
  type: string;
  error?: string;
  required?: boolean;
  onChangeHandler: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const Input = ({
  type: initialType,
  error,
  required,
  value,
  onChangeHandler,
  ...rest
}: InputProps) => {
  const [isTypedOnce, setIsTypedOnce] = useState(false);
  const [type, setType] = useState(initialType);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e);
    if (e.target.value.trim() !== "") setIsTypedOnce(true);
  };

  const onTogglePasswordOpen = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="relative flex flex-col">
      <input
        type={type}
        value={value}
        {...rest}
        className={cls(
          "w-full rounded-lg border-2 border-slate-50 bg-slate-50 py-[0.7rem] px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500",
          initialType === "password" ? "pr-10" : ""
        )}
        onChange={onChangeInput}
      />
      <div className="absolute right-3 top-4" onClick={onTogglePasswordOpen}>
        {initialType === "password" &&
          (type === "password" ? (
            <PasswordOpenIcon width="16" className="pt-[1px]" />
          ) : (
            <PasswordCloseIcon width="16" />
          ))}
      </div>
      {required && Boolean(error) && isTypedOnce && (
        <span
          className={cls(
            "mt-2 ml-[0.5rem] text-[0.8rem]",
            Boolean(error) ? "text-red-500" : ""
          )}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
