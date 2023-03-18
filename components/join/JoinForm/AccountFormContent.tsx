import { MouseEvent, Dispatch, SetStateAction } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

import Input from "@components/common/LoginInput";
import Tab from "@components/join/Tab";

import { ERROR_MESSAGE, regExp } from "@constants/account";
import { Position, UserFormType } from "@typings/account";

interface AccountFormContentProps {
  fields: UserFormType;
  errors: FieldErrors<UserFormType>;
  position: Position;
  register: UseFormRegister<UserFormType>;
  reset: UseFormReset<UserFormType>;
  setPosition: Dispatch<SetStateAction<string>>;
}

const AccountFormContent = ({
  fields,
  errors,
  position,
  register,
  reset,
  setPosition,
}: AccountFormContentProps) => {
  const { email, name, password, passwordCheck } = fields;

  const changeTab = (e: MouseEvent<HTMLButtonElement>) => {
    const newPosition = e.currentTarget.id;

    setPosition(newPosition);
    reset();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold">회원가입</h2>
      <div>
        <Tab id="boss" isActive={position === "boss"} handleClick={changeTab} />
        <Tab
          id="employee"
          isActive={position === "employee"}
          handleClick={changeTab}
        />
      </div>
      <Input
        type="email"
        placeholder="이메일 *"
        value={email}
        register={register("email", {
          required: true,
          pattern: {
            value: regExp.email,
            message: ERROR_MESSAGE.JOIN.INVALID_EMAIL,
          },
        })}
        error={errors?.email?.message}
      />
      <Input
        type="text"
        placeholder="이름 *"
        value={name}
        register={register("name", {
          required: true,
        })}
        error={errors?.name?.message}
      />
      <Input
        type="password"
        placeholder="비밀번호 *"
        value={password}
        register={register("password", {
          required: true,
          pattern: {
            value: regExp.password,
            message: ERROR_MESSAGE.JOIN.INVALID_PASSWORD,
          },
        })}
        error={errors?.password?.message}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인 *"
        value={passwordCheck || ""}
        register={register("passwordCheck", {
          required: true,
          validate: (value, formValues) =>
            value === formValues.password ||
            ERROR_MESSAGE.JOIN.INVALID_PASSWORD_CHECK,
        })}
        error={errors?.passwordCheck?.message}
      />
    </div>
  );
};

export default AccountFormContent;
