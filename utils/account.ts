import { UserJoinFormType } from "@typings/account";
import { ERROR_MESSAGE } from "@constants/account";

const regExp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/,
};

export default function validate(values: UserJoinFormType) {
  const { email, password, passwordCheck } = values;
  const errors = {
    email: "",
    password: "",
    passwordCheck: "",
  };

  const isEmailValid = regExp.email.test(email);
  const isPasswordValid = regExp.password.test(password);
  const isPasswordCheckValid = password === passwordCheck;

  if (!isEmailValid) errors.email = ERROR_MESSAGE.email;
  if (!isPasswordValid) errors.password = ERROR_MESSAGE.password;
  if (!isPasswordCheckValid) errors.passwordCheck = ERROR_MESSAGE.passwordCheck;

  return errors;
}
