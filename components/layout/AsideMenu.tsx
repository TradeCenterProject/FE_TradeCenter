import { ReactNode } from "react";
import { useRouter } from "next/router";
import { cls } from "@utils/styles";

interface AsideMenu {
  path: string;
  children: ReactNode;
}

const AsideMenu = ({ path, children }: AsideMenu) => {
  const router = useRouter();

  const onMenuClick = () => router.push(path);

  return (
    <button
      className={cls(
        "w-full px-5 py-2.5 text-left text-sm text-gray-800",
        router.pathname === path ? "bg-gray-200" : ""
      )}
      onClick={onMenuClick}
    >
      {children}
    </button>
  );
};

export default AsideMenu;
