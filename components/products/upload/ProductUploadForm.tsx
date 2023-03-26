import useProductUpload from "@hooks/useProductUpload";

import Form from "@components/common/Form";
import FormItem from "@components/common/FormItem";
import FormInput from "@components/common/FormInput";

const ProductUploadForm = () => {
  const { currentIdx, register, handleSubmit, onValid } = useProductUpload();

  return (
    <Form id="productUpload" rowCount={4} onSubmit={handleSubmit(onValid)}>
      <FormItem id="productCode" label="제품 코드">
        <FormInput
          id="productCode"
          register={register("productCode", { required: true })}
        />
      </FormItem>
      <FormItem id="productName" label="제품 이름">
        <FormInput
          id="productName"
          register={register("productName", { required: true })}
        />
      </FormItem>
      <FormItem id="productCategory" label="제품 분류">
        <FormInput
          id="productCategory"
          register={register("productCategory", { required: true })}
        />
      </FormItem>
      <FormItem id="price" label="단가">
        <FormInput
          id="price"
          register={register("price", {
            required: true,
            valueAsNumber: true,
          })}
        />
      </FormItem>
      <FormItem id="listOrder" label="No.">
        <span className="px-1">{currentIdx}</span>
      </FormItem>
      <FormItem id="productCompany" label="생산처">
        <FormInput
          id="productCompany"
          register={register("productCompany", { required: true })}
        />
      </FormItem>
      <FormItem id="location" label="저장 위치">
        <FormInput
          id="location"
          register={register("location", { required: true })}
        />
      </FormItem>
      <FormItem id="quantity" label="수량">
        <FormInput
          id="quantity"
          register={register("quantity", {
            required: true,
            valueAsNumber: true,
          })}
        />
      </FormItem>
    </Form>
  );
};

export default ProductUploadForm;
