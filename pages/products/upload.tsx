import { ChangeEvent, useRef, useState } from "react";
import readXlsxFile from "read-excel-file";

import stocksAPI from "@api/stocks";
import {
  ERROR_MESSAGE,
  PRODUCT_LIST_INFO,
  PRODUCT_LIST_THEADS,
} from "@constants/products";
import { ProductType } from "@typings/products";

import Button from "@components/common/Button";
import Form from "@components/common/Form";
import FormInput from "@components/common/FormInput";
import FormItem from "@components/common/FormItem";
import Table from "@components/common/Table";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";

interface MapType {
  [key: string]: string;
}

const ProductUploadPage = () => {
  const { register, reset, handleSubmit } = useForm<ProductType>({
    defaultValues: {
      productCode: "",
      productName: "",
      productCompany: "",
      productCategory: "",
      location: "",
      price: 0,
      quantity: 0,
    },
  });
  const [dataList, setDataList] = useState<ProductType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentIdx = useRef<number>(1);

  const onValid = (data: ProductType) => addData(data);

  const addData = (data: ProductType) => {
    setDataList(
      (prev) =>
        prev && [
          ...prev,
          {
            idx: currentIdx.current++,
            ...data,
          },
        ]
    );

    reset();
  };

  const uploadDataList = async () => {
    if (!dataList.length) return alert(ERROR_MESSAGE.NULL_DATA);

    const result = await stocksAPI.addStocks(dataList);
    if (result && result.ok) setDataList([]);
  };

  const handleClickExcelUpload = () =>
    inputRef.current && inputRef.current.click();

  const addExcelFileData = async ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const fileData = target.files && target.files[0];
    if (!fileData) return;

    const ProductInfoEntries = Object.entries(PRODUCT_LIST_INFO);
    const map: MapType = {};

    ProductInfoEntries.map(([key, value]) => (map[value] = key));

    const { rows } = await readXlsxFile<ProductType>(fileData, { map });
    const indexedRows = rows.map((row) => ({
      idx: currentIdx.current++,
      ...row,
    }));

    setDataList((prev) => prev && [...prev, ...indexedRows]);

    target.value = "";
  };

  return (
    <Layout title="물품 등록">
      <div className="space-y-10">
        <div>
          <div className="mb-2 flex justify-end gap-2">
            <Button color="green" value="엑셀 양식" />
            <input
              type="file"
              accept=".xlsx"
              ref={inputRef}
              onChange={addExcelFileData}
              className="hidden"
            />
            <Button
              color="green"
              value="엑셀 등록"
              handleClick={handleClickExcelUpload}
            />
            <Button color="green" value="추가" form="productUpload" />
          </div>
          <Form
            id="productUpload"
            rowCount={4}
            onSubmit={handleSubmit(onValid)}
          >
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
              <span className="px-1">{currentIdx.current}</span>
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
        </div>
        <Table
          uploadable
          checkable
          thead={PRODUCT_LIST_THEADS}
          dataList={dataList}
          setDataList={setDataList}
          handleUpload={uploadDataList}
        />
      </div>
    </Layout>
  );
};

export default ProductUploadPage;
