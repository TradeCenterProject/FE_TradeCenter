export interface UserJoinFormType {
  email: string;
  password: string;
  passwordCheck: string;
  companyCode?: string;
  [key: string]: string | undefined;
}
