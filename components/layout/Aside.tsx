import { useRouter } from "next/router";
import Image from "next/image";
import AsideMenu from "./AsideMenu";
import { ASIDE_MENU } from "@constants/layout";

const Aside = () => {
  const router = useRouter();
  const currentPage = router.pathname?.split("/")[1];

  return (
    <div className="h-screen w-64 bg-gray-100">
      <div className="flex items-center space-x-2 px-5 py-4">
        <Image
          src={`/${currentPage}_icon.svg`}
          className="mt-[2px]"
          alt="asideIcon"
          width="18"
          height="17"
        />
        <span className="h-fit font-bold">{ASIDE_MENU[currentPage]?.name}</span>
      </div>
      <ul>
        {ASIDE_MENU[currentPage]?.submenus?.map((submenu, i) => (
          <li key={i}>
            <AsideMenu path={submenu.path}>{submenu.name}</AsideMenu>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
