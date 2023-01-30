import { ReactNode } from "react";
import Aside from "./Aside";
import Header from "./Header";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className="h-screen">
      <div className="fixed">
        <Header />
      </div>
      <div className="fixed top-[4.5rem]">
        <Aside />
      </div>
      <div className="fixed left-64 top-[4.5rem] h-screen w-[calc(100%_-_16rem)] bg-slate-50 py-4 px-6">
        <h3 className="mb-2 text-lg font-extrabold">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Layout;
