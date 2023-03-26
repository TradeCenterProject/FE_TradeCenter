import { ChangeEvent } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import readXlsxFile from "read-excel-file";
import { useForm } from "react-hook-form";

import { currentIdxState, uploadDataListState } from "@states/products";
import stocksAPI from "@api/stocks";
import { ERROR_MESSAGE, PRODUCT_LIST_INFO } from "@constants/products";
import { ProductType } from "@typings/products";

interface MapType {
  [key: string]: string;
}

const useProductUpload = () => {
  const [dataList, setDataList] = useRecoilState(uploadDataListState);
  const [currentIdx, setCurrentIdx] = useRecoilState<number>(currentIdxState);
  const resetCurrentIdx = useResetRecoilState(currentIdxState);
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

  const onValid = (data: ProductType) => addData(data);

  const addData = (data: ProductType) => {
    const { idx, ...rest } = data;

    setDataList(
      (prev) =>
        prev && [
          ...prev,
          {
            idx: currentIdx,
            ...rest,
          },
        ]
    );

    setCurrentIdx((prev) => prev + 1);
    reset();
  };

  const uploadDataList = async (data: ProductType[]) => {
    if (!data.length) return alert(ERROR_MESSAGE.NULL_DATA);

    const result = await stocksAPI.addStocks(data);
    if (result && result.ok) {
      setDataList([]);
      resetCurrentIdx();
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
    const indexedRows = rows.map(({ idx, ...rest }, i) => ({
      idx: currentIdx + i,
      ...rest,
    }));
    setCurrentIdx((prev) => prev + rows.length);

    setDataList((prev) => prev && [...prev, ...indexedRows]);

    target.value = "";
  };

  return {
    currentIdx,
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
