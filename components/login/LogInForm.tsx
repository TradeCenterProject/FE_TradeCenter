import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";

import usersAPI from "@api/users";
import FormButton from "@components/common/FormButton";
import Input from "@components/common/LoginInput";
import { ERROR_MESSAGE, regExp } from "@constants/account";
import { UserFormType } from "@typings/account";

const LogInForm = () => {
  const { register, formState, handleSubmit, watch, reset } =
    useForm<UserFormType>({
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "all",
    });
  const { isSubmitting } = formState;
  const { email, password } = watch();

  const onValid = (values: UserFormType) => doSignIn(values);

  const onInvalid = () => alert(ERROR_MESSAGE.LOGIN);

  const doSignIn = async (values: UserFormType) => {
    if (isSubmitting) return;

    const result = await usersAPI.signIn(values);

    if (result && result.ok) {
      setCookie("sessionId", result.sessionId, {
        path: "/",
      });
      window.location.href = "/products/lists";
    }
  };

  return (
    <form
      className="flex w-full flex-col space-y-6"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h2 className="text-center text-2xl font-bold">로그인</h2>
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        register={register("email", {
          required: true,
          pattern: {
            value: regExp.email,
            message: ERROR_MESSAGE.LOGIN,
          },
        })}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        register={register("password", {
          required: true,
          pattern: {
            value: regExp.password,
            message: ERROR_MESSAGE.LOGIN,
          },
        })}
      />
      {/* <label className="flex p-1 text-sm leading-4 text-gray-400">
        <input
          type="checkbox"
          id="rememberMe"
          className="mr-2 inline-block h-4 w-4 rounded accent-green-600"
        />
        로그인 상태 유지
      </label> */}
      <FormButton name="로그인" disabled={false} />
    </form>
  );
};

export default LogInForm;
