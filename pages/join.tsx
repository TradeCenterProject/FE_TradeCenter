import { useCallback, useEffect, useState } from "react";

import Card from "@components/common/Card";
import FormButton from "@components/common/FormButton";
import Input from "@components/common/LoginInput";
import useForm from "@hooks/useForm";

const JoinPage = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
    passwordCheck: "",
    companyCode: "",
  });
  const [isSubmitable, setIsSubmitable] = useState(false);

  const doSignUp = () => {
    // sign up code
    console.log("!");
  };

  const checkForm = useCallback(() => {
    if (!errors) return false;

    const invalidValues = Object.keys(values).filter((name) => {
      return (
        errors[name] !== undefined &&
        (values[name] === "" || errors[name] !== "")
      );
    });

    setIsSubmitable(!Boolean(invalidValues.length));
  }, [errors, values]);

  useEffect(() => {
    checkForm();
  }, [values, checkForm]);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <Card>
        <form
          className="flex w-full flex-col space-y-6"
          onSubmit={(e) => handleSubmit(e, doSignUp)}
        >
          <h2 className="text-center text-2xl font-bold">회원가입</h2>
          <Input
            required
            name="email"
            type="email"
            placeholder="이메일"
            value={values.email}
            onChangeHandler={handleChange}
            error={errors?.email}
          />
          <Input
            required
            name="password"
            type="password"
            placeholder="비밀번호"
            value={values.password}
            onChangeHandler={handleChange}
            error={errors?.password}
          />
          <Input
            required
            name="passwordCheck"
            type="password"
            placeholder="비밀번호 확인"
            value={values.passwordCheck || ""}
            onChangeHandler={handleChange}
            error={errors?.passwordCheck}
          />
          <Input
            name="companyCode"
            type="text"
            placeholder="회사 코드 (선택)"
            value={values.companyCode || ""}
            onChangeHandler={handleChange}
          />
          <FormButton name="회원가입" disabled={!isSubmitable} />
        </form>
      </Card>
    </div>
  );
};

export default JoinPage;
