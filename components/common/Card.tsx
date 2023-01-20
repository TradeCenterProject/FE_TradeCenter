import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex w-full max-w-md flex-col items-center rounded-lg bg-white py-10 px-9 shadow-[0px_0px_20px_rgba(0,0,0,0.03)] shadow-slate-100">
      {children}
    </div>
  );
};

export default Card;
