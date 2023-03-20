export interface UserFormType {
  email: string;
  userName: string;
  password: string;
  passwordCheck?: string;
  companyCode?: string;
  companyName?: string;
}

export type Position = "boss" | "employee" | string;
export type FormType = "account" | "company";
