import api from "@api/instance";
import { ProductType } from "@typings/products";

const url = "/stocks";

const stocksAPI = {
  addStocks: async (dataList: ProductType[]) => {
    return await api.post(`${url}`, dataList);
  },
  getStockLists: async () => {
    return await api.get(`${url}`);
  },
};

export default stocksAPI;
