import { ChangeEvent } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import readXlsxFile from "read-excel-file";
import { useForm } from "react-hook-form";

import stocksAPI from "@api/stocks";
import { currentIdxState, uploadDataListState } from "@states/products";
import {
  ERROR_MESSAGE,
  PRODUCT_LIST_INFO,
  SUCCESS_MESSAGE,
} from "@constants/products";
import { ProductType } from "@typings/products";

interface MapType {
  [key: string]: string;
}

const PRODUCT_QUERY_KEY = "products";

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
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (data: ProductType[]) => stocksAPI.addStocks(data),
    {
      onMutate: (data) => {
        const oldData = queryClient.getQueriesData([PRODUCT_QUERY_KEY]);

        queryClient.cancelQueries([PRODUCT_QUERY_KEY]);
        queryClient.setQueryData([PRODUCT_QUERY_KEY], [...oldData, data]);

        return () => queryClient.setQueryData([PRODUCT_QUERY_KEY], oldData);
      },
      onSuccess: ({ status }) => {
        switch (status) {
          case 200:
            setDataList([]);
            resetCurrentIdx();
            alert(SUCCESS_MESSAGE.UPLOAD);
            break;
        }
      },
      onError: () => {
        alert(ERROR_MESSAGE.UPLOAD);
      },
    }
  );

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

    mutate(data);
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
