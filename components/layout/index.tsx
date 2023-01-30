import { ReactNode } from "react";
import Aside from "./Aside";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen">
      <div className="fixed">
        <Header />
      </div>
      <div className="fixed top-[4.5rem]">
        <Aside />
      </div>
      <div className="fixed left-64 top-[4.5rem] h-screen w-[calc(100%_-_16rem)] bg-slate-50 p-5">
        {children}
      </div>
    </div>
  );
};

export default Layout;
