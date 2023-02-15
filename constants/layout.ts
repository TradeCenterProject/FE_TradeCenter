import { AsideMenuType } from "@typings/index";

export const ASIDE_MENU: AsideMenuType = {
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
