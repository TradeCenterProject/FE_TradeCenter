import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormType, Position } from "@typings/account";

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

  const goAccountForm = () => setFormType("account");

  const onValid = () => {
    if (position === "boss" && formType === "account")
      return setFormType("company");

    doSignUp();
  };

  const doSignUp = () => {
    if (isSubmitting) return;
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
          register={register}
          goBack={goAccountForm}
        />
      )}
      <FormButton
        name={
          position === "boss" && formType === "account" ? "다음" : "회원 가입"
        }
        disabled={!isValid}
      />
    </form>
  );
};

export default JoinFormContent;
