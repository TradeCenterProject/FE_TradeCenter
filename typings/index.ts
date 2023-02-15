export type AsideMenuType = {
  [key: string]: {
    name: string;
    submenus: { name: string; path: string }[];
  };
};

export interface FormLabel {
  id: string;
  name: string;
  type?: "static" | "select";
  isWide?: boolean;
}
