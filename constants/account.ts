import { Position } from "@typings/account";

interface ErrorMessageType {
  [key: string]: string;
}

export const ERROR_MESSAGE: ErrorMessageType = {
  EMAIL: "이메일 형식이 올바르지 않습니다.",
  PASSWORD: "영문자, 숫자, 특수문자 조합의 8~20자리를 사용해야 합니다.",
  PASSWORD_CHECK: "비밀번호가 일치하지 않습니다.",
};

export const POSITION: { [key: Position]: string } = {
  boss: "사장",
  employee: "직원",
};
