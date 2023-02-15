import { ReactNode } from "react";
import { cls } from "@utils/styles";
import Button from "./Button";

interface FormProps {
  rowCount: number;
  submittable?: boolean;
  children: ReactNode;
}

// interface GridRowsType {
//   [key: number]: string;
// }

// const gridStyles: GridRowsType = {
//   0: "",
//   3: "grid-rows-[repeat(3,_auto)]",
//   4: "grid-rows-[repeat(4,_auto)]",
// };

// const gridBorderStyles: GridRowsType = {
//   0: "",
//   3: "[&:nth-child(3)]:border-none",
//   4: "[&:nth-child(4)]:border-none",
// };

const Form = ({ rowCount, submittable, children }: FormProps) => {
  return (
    <form>
      {submittable && (
        <div className="mb-2 flex justify-end">
          <Button color="green" value="추가" />
        </div>
      )}
      <div
        className={cls(
          `grid grid-flow-col grid-cols-2 overflow-hidden rounded-md border border-borderColor text-sm`,
          `grid-rows-[repeat(${rowCount ?? 0},_auto)]`,
          `[&>div:nth-child(${rowCount ?? 0})]:border-none`
        )}
      >
        {children}
      </div>
    </form>
  );
};

export default Form;
