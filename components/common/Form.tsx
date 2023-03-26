import { ReactNode } from "react";
import { cls } from "@utils/styles";

interface FormProps {
  id: string;
  rowCount: number;
  children: ReactNode;
  onSubmit?: any;
}

interface GridRowsType {
  [key: number]: string;
}

const gridRowStyles: GridRowsType = {
  0: "",
  3: "grid-rows-[repeat(3,_auto)]",
  4: "grid-rows-[repeat(4,_auto)]",
};

const gridBorderStyles: GridRowsType = {
  0: "",
  3: "[&>div:nth-child(3)]:border-none",
  4: "[&>div:nth-child(4)]:border-none",
};

const Form = ({ id, rowCount, children, onSubmit }: FormProps) => {
  return (
    <form id={id} onSubmit={onSubmit}>
      <div
        className={cls(
          `grid grid-flow-col grid-cols-2 overflow-hidden rounded-md border border-borderColor text-sm`,
          gridRowStyles[rowCount],
          gridBorderStyles[rowCount]
        )}
      >
        {children}
      </div>
    </form>
  );
};

export default Form;
