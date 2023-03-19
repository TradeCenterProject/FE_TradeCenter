import { Position } from "@typings/account";

interface MessageType {
  [key: string]: string;
}

interface PositionType {
  [key: Position]: string;
}

interface SuccessMessageType {
  JOIN: string;
}

interface ErrorMessageType {
  JOIN: MessageType;
  LOGIN: string;
}

export const regExp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/,
};

export const SUCCESS_MESSAGE: SuccessMessageType = {
  JOIN: "회원가입이 완료 되었습니다. 로그인 페이지로 이동합니다.",
};

export const ERROR_MESSAGE: ErrorMessageType = {
  JOIN: {
    INVALID_EMAIL: "이메일 형식이 올바르지 않습니다.",
    ALREADY_EXIST_EMAIL: "이미 사용중이거나 중복된 이메일입니다.",
    INVALID_PASSWORD:
      "영문자, 숫자, 특수문자 조합의 8~20자리를 사용해야 합니다.",
    INVALID_PASSWORD_CHECK: "비밀번호가 일치하지 않습니다.",
    ALREADY_EXIST_COMPANY_NAME: "이미 등록된 회사입니다.",
    NOT_EXIST_COMPANY_CODE: "존재하지 않는 회사 코드입니다.",
    INVALID_COMPANY_NAME: "회사 이름은 띄어쓰기 없이 입력해주세요.",
  },
  LOGIN: "이메일 또는 비밀번호가 일치하지 않습니다.",
};

export const POSITION: PositionType = {
  boss: "사장",
  employee: "직원",
};
