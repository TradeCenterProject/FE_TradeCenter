import api from "@api/instance";
import { ProductType } from "@typings/products";

const url = "/stocks";

const stocksAPI = {
  addStocks: async (dataList: ProductType[]) => {
    return await api.post(`${url}`, dataList);
  },
};

export default stocksAPI;
