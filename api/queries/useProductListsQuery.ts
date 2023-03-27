import stocksAPI from "@api/stocks";
import { useQuery } from "@tanstack/react-query";

export const useProductListsQuery = () => {
  return useQuery(["products"], stocksAPI.getStockLists, {
    select: ({ data }) => data,
  });
};
