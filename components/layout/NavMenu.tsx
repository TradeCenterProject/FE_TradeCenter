import { ReactNode } from "react";
import { useRouter } from "next/router";
import { cls } from "@libs/utils";

interface NavMenuProps {
  path: string;
  children: ReactNode;
}

const NavMenu = ({ path, children }: NavMenuProps) => {
  const router = useRouter();
  const currentPage = router?.pathname?.split("/")[1];

  const onMenuClick = () => router.push(path);

  return (
    <button
      className={cls(
        "font-bold",
        path.includes(currentPage) ? "text-primary" : ""
      )}
      onClick={onMenuClick}
    >
      {children}
    </button>
  );
};

export default NavMenu;
