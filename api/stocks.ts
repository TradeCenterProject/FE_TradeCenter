import api from "@api/instance";
import { ProductType } from "@typings/products";
import { ERROR_MESSAGE } from "@constants/products";
import { SUCCESS_MESSAGE } from "@constants/products";

const url = "/stocks";

const stocksAPI = {
  addStocks: async (dataList: ProductType[]) => {
    return await api
      .post(`${url}`, dataList)
      .then((res) => {
        switch (res.status) {
          case 200:
            alert(SUCCESS_MESSAGE.UPLOAD);
            break;
        }

        return { ok: true };
      })
      .catch(() => {
        return alert(ERROR_MESSAGE.UPLOAD);
      });
  },
};

export default stocksAPI;
