import { useRouter } from "next/router";
import AsideMenu from "./AsideMenu";

const menu: AsideMenuType = {
  products: {
    name: "물품 관리",
    submenus: [
      { name: "재고 목록", path: "/products/lists" },
      { name: "물품 등록", path: "/products/upload" },
    ],
  },
  tasks: {
    name: "업무 관리",
    submenus: [
      { name: "업무 관리", path: "/tasks/lists" },
      { name: "업무 등록", path: "/tasks/upload" },
    ],
  },
  company: {
    name: "회사 관리",
    submenus: [{ name: "직원 관리", path: "/company/employee" }],
  },
};

type AsideMenuType = {
  [key: string]: {
    name: string;
    submenus: { name: string; path: string }[];
  };
};

const Aside = () => {
  const router = useRouter();
  const currentPage = router.pathname?.split("/")[1];

  return (
    <div className="h-screen w-64 bg-gray-100">
      <div className="px-5 py-4">
        <span className="font-bold text-gray-900">
          {menu[currentPage]?.name}
        </span>
      </div>
      <ul>
        {menu[currentPage]?.submenus?.map((submenu, i) => (
          <li key={i}>
            <AsideMenu path={submenu.path}>{submenu.name}</AsideMenu>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
