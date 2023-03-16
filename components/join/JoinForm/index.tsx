import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormType, Position, UserFormType } from "@typings/account";

import AccountFormContent from "./AccountFormContent";
import FormButton from "@components/common/FormButton";
import CompanyFormContent from "./CompanyFormContent";
import usersAPI from "@api/users";

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

  const onValid = async (values: UserFormType) => {
    if (formType === "account") {
      const { ok } = await usersAPI.validateAccount(values);

      if (ok) return setFormType("company");
    }

    doSignUp(values);
  };

  const doSignUp = (values: UserFormType) => {
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
