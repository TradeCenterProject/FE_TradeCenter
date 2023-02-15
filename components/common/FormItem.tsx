import { ReactNode } from "react";
import { cls } from "@utils/styles";

interface FormItemProps {
  id: string;
  isWide?: boolean;
  label: string;
  children: ReactNode;
}

const FormItem = ({ id, isWide, label, children }: FormItemProps) => {
  return (
    <div
      className={cls(
        `flex items-center border-b border-borderColor last:border-none`,
        isWide ? "col-span-2" : ""
      )}
    >
      <label
        htmlFor={id}
        className="block w-36 bg-primary py-1 text-center leading-normal text-white"
      >
        {label}
      </label>
      <div className="w-[calc(100%-9rem)] px-1">{children}</div>
    </div>
  );
};

export default FormItem;
