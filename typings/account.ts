export interface UserFormType {
  email: string;
  name: string;
  password: string;
  passwordCheck?: string;
  companyCode?: string;
  companyName?: string;
}

export type Position = "사장" | "직원" | string;
export type FormType = "account" | "company";
