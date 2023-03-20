import { ChangeEvent, useRef, useState } from "react";
import readXlsxFile from "read-excel-file";

import { PRODUCT_LIST_INFO, PRODUCT_LIST_THEADS } from "@constants/products";
import { ProductType } from "@typings/products";

import Button from "@components/common/Button";
import Form from "@components/common/Form";
import FormInput from "@components/common/FormInput";
import FormItem from "@components/common/FormItem";
import Table from "@components/common/Table";
import Layout from "@components/layout";

interface MapType {
  [key: string]: string;
}

const ProductUploadPage = () => {
  const [dataList, setDataList] = useState<ProductType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickExcelUpload = () =>
    inputRef.current && inputRef.current.click();

  const parseExcelFile = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    const fileData = target.files && target.files[0];
    if (!fileData) return;

    const ProductInfoEntries = Object.entries(PRODUCT_LIST_INFO);
    const map: MapType = {};

    ProductInfoEntries.map(([key, value]) => (map[value] = key));

    const { rows } = await readXlsxFile<ProductType>(fileData, { map });
    setDataList((prev) => prev && [...prev, ...rows]);

    target.value = "";
  };

  return (
    <Layout title="물품 등록">
      <div className="space-y-10">
        <Form id="productUpload" submittable rowCount={4}>
          <FormItem id="productCode" label="제품 코드">
            <FormInput id="productCode" />
          </FormItem>
          <FormItem id="productName" label="제품 이름">
            <FormInput id="productName" />
          </FormItem>
          <FormItem id="productCategory" label="제품 분류">
            <FormInput id="productCategory" />
          </FormItem>
          <FormItem id="price" label="단가">
            <FormInput id="price" />
          </FormItem>
          <FormItem id="listOrder" label="No.">
            <span className="px-1">11</span>
          </FormItem>
          <FormItem id="productCompany" label="생산처">
            <FormInput id="productCompany" />
          </FormItem>
          <FormItem id="location" label="저장 위치">
            <FormInput id="location" />
          </FormItem>
          <FormItem id="quantity" label="수량">
            <FormInput id="quantity" />
          </FormItem>
        </Form>
        <div className="space-y-2">
          <div className="flex justify-end gap-2">
            <input
              type="file"
              accept=".xlsx"
              ref={inputRef}
              onChange={parseExcelFile}
              className="hidden"
            />
            <Button
              color="green"
              value="엑셀 등록"
              handleClick={handleClickExcelUpload}
            />
            <Button color="green" value="등록하기" />
          </div>
          <Table thead={PRODUCT_LIST_THEADS} dataList={dataList} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductUploadPage;
