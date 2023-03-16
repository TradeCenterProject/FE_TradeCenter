import type { FieldErrors, UseFormRegister } from "react-hook-form";

import Input from "@components/common/LoginInput";
import { Position, UserFormType } from "@typings/account";

import BackArrowIcon from "@public/images/back_arrow_icon.svg";

interface CompanyFormContentProps {
  fields: UserFormType;
  errors: FieldErrors<UserFormType>;
  position: Position;
  register: UseFormRegister<UserFormType>;
  goBack: () => void;
}

const CompanyFormContent = ({
  fields,
  errors,
  position,
  register,
  goBack,
}: CompanyFormContentProps) => {
  const { companyName, companyCode } = fields;

  return (
    <div className="relative space-y-6">
      <button className="absolute top-[-10px] left-[-10px]" onClick={goBack}>
        <BackArrowIcon />
      </button>
      <h2 className="text-center text-2xl font-bold">회사 등록</h2>
      {position === "boss" ? (
        <Input
          type="text"
          placeholder="회사명 (띄어쓰기 없이) *"
          value={companyName || ""}
          register={register("companyName", {
            required: true,
          })}
          error={errors?.companyName?.message}
        />
      ) : (
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

export default CompanyFormContent;
