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
      <div className="fixed top-16">
        <Aside />
      </div>
      <div className="fixed left-64 top-16 h-screen w-[calc(100%_-_16rem)] p-5">
        {children}
      </div>
    </div>
  );
};

export default Layout;
