interface ErrorMessageType {
  [key: string]: string;
}

export const ERROR_MESSAGE: ErrorMessageType = {
  email: "이메일 형식이 올바르지 않습니다.",
  password: "영문자, 숫자, 특수문자 조합의 8~20자리를 사용해야 합니다.",
  passwordCheck: "비밀번호가 일치하지 않습니다.",
};
