import { ReactNode } from "react";
import { useRouter } from "next/router";
import { cls } from "../../libs/utils";

interface NavMenuProps {
  menuPath: string;
  children: ReactNode;
}

const NavMenu = ({ menuPath, children }: NavMenuProps) => {
  const router = useRouter();

  const onMenuClick = () => router.push(menuPath);

  return (
    <button
      className={cls(
        "font-bold",
        router.pathname === menuPath ? "text-primary" : ""
      )}
      onClick={onMenuClick}
    >
      {children}
    </button>
  );
};

export default NavMenu;
