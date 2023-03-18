import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import usersAPI from "@api/users";
import { FormType, Position, UserFormType } from "@typings/account";
import AccountFormContent from "./AccountFormContent";
import FormButton from "@components/common/FormButton";
import CompanyFormContent from "./CompanyFormContent";

const JoinFormContent = () => {
  const [position, setPosition] = useState<Position>("boss");
  const [formType, setFormType] = useState<FormType>("account");
  const { register, formState, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "all",
  });
  const { errors, isValid, isSubmitting } = formState;
  const fields = watch();
  const router = useRouter();

  const goAccountForm = () => setFormType("account");

  const onValid = async (values: UserFormType) => {
    if (formType === "account") {
      const result = await usersAPI.validateAccount(values);

      if (result && result.ok) return setFormType("company");

      return null;
    }

    doSignUp(values);
  };

  const doSignUp = async (values: UserFormType) => {
    if (isSubmitting) return;

    const result = await usersAPI.signUp(values);

    if (result && result.ok) router.replace("/login");
  };

  return (
    <form
      className="flex w-full flex-col space-y-6"
      onSubmit={handleSubmit(onValid)}
    >
      {formType === "account" ? (
        <AccountFormContent
          fields={fields}
          errors={errors}
          position={position}
          reset={reset}
          register={register}
          setPosition={setPosition}
        />
      ) : (
        <CompanyFormContent
          fields={fields}
          errors={errors}
          position={position}
          register={register}
          goBack={goAccountForm}
        />
      )}
      <FormButton
        name={formType === "account" ? "다음" : "회원 가입"}
        disabled={!isValid}
      />
    </form>
  );
};

export default JoinFormContent;
