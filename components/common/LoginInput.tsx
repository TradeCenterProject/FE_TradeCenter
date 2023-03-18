import { useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { cls } from "@utils/styles";
import PasswordOpenIcon from "@public/images/password_open_icon.svg";
import PasswordCloseIcon from "@public/images/password_close_icon.svg";

interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const Input = ({
  type: initialType,
  placeholder,
  value,
  register,
  error,
}: InputProps) => {
  const [type, setType] = useState(initialType);
  const inputRef = useRef<HTMLInputElement>(null);

  const onTogglePasswordOpen = () => {
    setType(type === "password" ? "text" : "password");
  };

  const onClickPlaceholder = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="relative flex flex-col">
      <input
        type={type}
        {...register}
        className={cls(
          "peer w-full rounded-lg border-2 border-slate-50 bg-slate-50 px-[0.875rem] pt-5 pb-[0.1rem] text-sm outline-none focus:border-gray-500",
          initialType === "password" ? "pr-10" : ""
        )}
      />
      <label
        className={cls(
          "pointer-events-none absolute left-4 top-3 text-sm text-gray-400 transition-all peer-focus:top-[0.2rem] peer-focus:text-xs",
          value !== "" ? "top-[0.2rem] text-xs" : ""
        )}
        onClick={onClickPlaceholder}
      >
        {placeholder}
      </label>
      {initialType === "password" && (
        <div className="absolute right-3 top-4" onClick={onTogglePasswordOpen}>
          {type === "password" ? (
            <PasswordOpenIcon width="16" className="pt-[1px]" />
          ) : (
            <PasswordCloseIcon width="16" />
          )}
        </div>
      )}
      {Boolean(error) && (
        <small
          className={cls(
            "mt-2 ml-[0.5rem] text-[0.8rem]",
            Boolean(error) ? "text-red-500" : ""
          )}
        >
          {error?.toString()}
        </small>
      )}
    </div>
  );
};

export default Input;
