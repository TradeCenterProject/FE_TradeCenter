import type { FieldErrors, UseFormRegister } from "react-hook-form";

import Input from "@components/common/LoginInput";
import { UserFormType } from "@typings/account";

import BackArrowIcon from "@public/images/back_arrow_icon.svg";

interface CompanyFormContentProps {
  fields: UserFormType;
  errors: FieldErrors<UserFormType>;
  register: UseFormRegister<UserFormType>;
  goBack: () => void;
}

const CompanyFormContent = ({
  fields,
  errors,
  register,
  goBack,
}: CompanyFormContentProps) => {
  const { companyName } = fields;

  return (
    <div className="relative space-y-6">
      <button className="absolute top-[-10px] left-[-10px]" onClick={goBack}>
        <BackArrowIcon />
      </button>
      <h2 className="text-center text-2xl font-bold">회사 등록</h2>
      <Input
        type="text"
        placeholder="회사명 *"
        value={companyName || ""}
        register={register("companyName", {
          required: true,
        })}
        error={errors?.companyName?.message}
      />
    </div>
  );
};

export default CompanyFormContent;
