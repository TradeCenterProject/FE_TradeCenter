import { ReactNode } from "react";
import { cls } from "@utils/styles";
import Button from "./Button";

interface FormProps {
  id: string;
  rowCount: number;
  submittable?: boolean;
  children: ReactNode;
  onSubmit?: any;
}

interface GridRowsType {
  [key: number]: string;
}

const gridBorderStyles: GridRowsType = {
  0: "",
  3: "[&>div:nth-child(3)]:border-none",
  4: "[&>div:nth-child(4)]:border-none",
};

const Form = ({ id, rowCount, submittable, children, onSubmit }: FormProps) => {
  return (
    <form id={id} onSubmit={onSubmit}>
      {submittable && (
        <div className="mb-2 flex justify-end">
          <Button color="green" value="추가" />
        </div>
      )}
      <div
        className={cls(
          `grid grid-flow-col grid-cols-2 overflow-hidden rounded-md border border-borderColor text-sm`,
          `grid-rows-[repeat(${rowCount ?? 0},_auto)]`,
          // `[&>div:nth-child(${rowCount ?? 0})]:border-none`,
          gridBorderStyles[rowCount]
        )}
      >
        {children}
      </div>
    </form>
  );
};

export default Form;
