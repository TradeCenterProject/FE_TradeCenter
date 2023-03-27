import { PRODUCT_LIST_THEADS } from "@constants/products";

import Table from "@components/common/Table";
import { useProductListsQuery } from "@api/queries/useProductListsQuery";

const ProductListTable = () => {
  const { data } = useProductListsQuery();

  return <Table thead={PRODUCT_LIST_THEADS} dataList={data} />;
};

export default ProductListTable;
