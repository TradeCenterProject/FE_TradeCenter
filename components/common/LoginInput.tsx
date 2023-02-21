import { ChangeEvent, useRef, useState } from "react";
import { cls } from "@utils/styles";

import PasswordOpenIcon from "@public/images/password_open_icon.svg";
import PasswordCloseIcon from "@public/images/password_close_icon.svg";

interface InputProps {
  type: string;
  error?: string;
  required?: boolean;
  value: string;
  placeholder: string;
  onChangeHandler: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const Input = ({
  type: initialType,
  error,
  required,
  placeholder,
  value,
  onChangeHandler,
  ...rest
}: InputProps) => {
  const [isTypedOnce, setIsTypedOnce] = useState(false);
  const [type, setType] = useState(initialType);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e);
    if (e.target.value.trim() !== "") setIsTypedOnce(true);
  };

  const onTogglePasswordOpen = () => {
    setType(type === "password" ? "text" : "password");
  };

  const onClickPlaceholder = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="relative flex flex-col">
      <input
        ref={inputRef}
        type={type}
        value={value}
        {...rest}
        className={cls(
          "peer w-full rounded-lg border-2 border-slate-50 bg-slate-50 px-[0.875rem] pt-5 pb-[0.1rem] text-sm outline-none focus:border-gray-500",
          initialType === "password" ? "pr-10" : ""
        )}
        onChange={onChangeInput}
      />
      <label
        className={cls(
          "absolute left-4 top-3 text-sm text-gray-400 transition-all peer-focus:top-[0.2rem] peer-focus:text-xs",
          value !== "" ? "top-[0.2rem] text-xs" : ""
        )}
        onClick={onClickPlaceholder}
      >
        {placeholder}
      </label>
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
