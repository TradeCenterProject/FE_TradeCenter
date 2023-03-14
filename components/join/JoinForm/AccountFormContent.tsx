import { MouseEvent, Dispatch, SetStateAction } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

import Input from "@components/common/LoginInput";
import Tab from "@components/join/Tab";

import { ERROR_MESSAGE } from "@constants/account";
import { Position, UserFormType } from "@typings/account";

interface AccountFormContentProps {
  fields: UserFormType;
  errors: FieldErrors<UserFormType>;
  position: string;
  register: UseFormRegister<UserFormType>;
  reset: UseFormReset<UserFormType>;
  setPosition: Dispatch<SetStateAction<string>>;
}

const regExp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/,
};

const AccountFormContent = ({
  fields,
  errors,
  position,
  register,
  reset,
  setPosition,
}: AccountFormContentProps) => {
  const { email, name, password, passwordCheck, companyCode } = fields;

  const changeTab = (e: MouseEvent<HTMLButtonElement>) => {
    setPosition(e.currentTarget.id);
    reset();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold">회원가입</h2>
      <div>
        <Tab
          value="사장"
          isActive={position === "사장"}
          handleClick={changeTab}
        />
        <Tab
          value="직원"
          isActive={position === "직원"}
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
            message: ERROR_MESSAGE.EMAIL,
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
            message: ERROR_MESSAGE.PASSWORD,
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
            value === formValues.password || ERROR_MESSAGE.PASSWORD_CHECK,
        })}
        error={errors?.passwordCheck?.message}
      />
      {position == "직원" && (
        <Input
          type="text"
          placeholder="회사 코드 *"
          value={companyCode || ""}
          register={register("companyCode", {
            required: true,
          })}
          error={errors?.companyCode?.message}
        />
      )}
    </div>
  );
};

export default AccountFormContent;
