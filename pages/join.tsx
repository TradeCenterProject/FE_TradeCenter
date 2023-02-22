import { useForm } from "react-hook-form";

import Card from "@components/common/Card";
import FormButton from "@components/common/FormButton";
import Input from "@components/common/LoginInput";
import { ERROR_MESSAGE } from "@constants/account";

const regExp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/,
};

const JoinPage = () => {
  const { register, formState, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordCheck: "",
      companyCode: "",
    },
    mode: "all",
  });
  const { errors, dirtyFields, isValid, isSubmitting } = formState;
  const { email, password, passwordCheck, companyCode } = watch();
  const isAllDirty =
    dirtyFields.email && dirtyFields.password && dirtyFields.passwordCheck;

  const doSignUp = () => {
    if (isSubmitting) return;
    // sign up code
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <Card>
        <form
          className="flex w-full flex-col space-y-6"
          onSubmit={handleSubmit(doSignUp)}
        >
          <h2 className="text-center text-2xl font-bold">회원가입</h2>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            register={register("email", {
              required: true,
              pattern: {
                value: regExp.email,
                message: ERROR_MESSAGE.email,
              },
            })}
            error={errors?.email?.message}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            register={register("password", {
              required: true,
              pattern: {
                value: regExp.password,
                message: ERROR_MESSAGE.password,
              },
            })}
            error={errors?.password?.message}
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            register={register("passwordCheck", {
              required: true,
              validate: (value, formValues) =>
                value === formValues.password || ERROR_MESSAGE.passwordCheck,
            })}
            error={errors?.passwordCheck?.message}
          />
          <Input
            type="text"
            placeholder="회사 코드 (선택)"
            value={companyCode}
            register={register("companyCode")}
          />
          <FormButton name="회원가입" disabled={!isValid || !isAllDirty} />
        </form>
      </Card>
    </div>
  );
};

export default JoinPage;
