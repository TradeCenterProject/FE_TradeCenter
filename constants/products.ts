import { FormLabel } from "typings/index";

export const PRODUCT_LIST_THEADS = [
  "제품 코드",
  "제품 이름",
  "생산처",
  "제품 분류",
  "저장 위치",
  "단가",
  "수량",
];

export const UPLOAD_FORM_LABELS: FormLabel[] = [
  {
    id: "productCode",
    name: "제품 코드",
  },

  {
    id: "productName",
    name: "제품 이름",
  },
  {
    id: "productCategory",
    name: "제품 분류",
  },
  {
    id: "price",
    name: "단가",
  },
  {
    id: "listOrder",
    name: "No.",
    isStatic: true,
  },
  {
    id: "productCompany",
    name: "생산처",
  },
  {
    id: "location",
    name: "저장 위치",
  },
  {
    id: "quantity",
    name: "수량",
  },
];

export const SEARCH_OPTIONS = [
  "제품 코드",
  "제품 이름",
  "생산처",
  "제품 분류",
  "저장 위치",
];
