import { ChangeEvent, useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import { useForm } from "react-hook-form";

import stocksAPI from "@api/stocks";
import {
  ERROR_MESSAGE,
  PRODUCT_LIST_INFO,
  PRODUCT_LIST_THEADS,
} from "@constants/products";
import { ProductType } from "@typings/products";

interface MapType {
  [key: string]: string;
}

const useProductUpload = () => {
  const [dataList, setDataList] = useState<ProductType[]>([]);
  const { register, reset, handleSubmit } = useForm<ProductType>({
    defaultValues: {
      productCode: "",
      productName: "",
      productCompany: "",
      productCategory: "",
      location: "",
      price: "",
      quantity: "",
    },
  });
  const currentIdx = useRef<number>(1);

  const onValid = (data: ProductType) => addData(data);

  const addData = (data: ProductType) => {
    const { idx, ...rest } = data;

    setDataList(
      (prev) =>
        prev && [
          ...prev,
          {
            idx: currentIdx.current++,
            ...rest,
          },
        ]
    );

    reset();
  };

  const uploadDataList = async (data: ProductType[]) => {
    if (!data.length) return alert(ERROR_MESSAGE.NULL_DATA);

    const result = await stocksAPI.addStocks(data);
    if (result && result.ok) {
      setDataList([]);
      currentIdx.current = 1;
    }
  };

  const addExcelFileData = async ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const fileData = target.files && target.files[0];
    if (!fileData) return;

    const ProductInfoEntries = Object.entries(PRODUCT_LIST_INFO);
    const map: MapType = {};

    ProductInfoEntries.map(([key, value]) => (map[value] = key));

    const { rows } = await readXlsxFile<ProductType>(fileData, { map });
    const indexedRows = rows.map(({ idx, ...rest }) => ({
      idx: currentIdx.current++,
      ...rest,
    }));

    setDataList((prev) => prev && [...prev, ...indexedRows]);

    target.value = "";
  };

  return {
    currentIdx: currentIdx.current,
    dataList,
    setDataList,
    register,
    handleSubmit,
    onValid,
    addExcelFileData,
    uploadDataList,
  };
};

export default useProductUpload;
