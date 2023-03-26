import { atom } from "recoil";

import { ProductType } from "@typings/products";

export const uploadDataListState = atom<ProductType[]>({
  key: "uploadDataListState",
  default: [],
});

export const currentIdxState = atom<number>({
  key: "currentIdxState",
  default: 1,
});
