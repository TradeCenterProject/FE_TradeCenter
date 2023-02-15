import Button from "components/common/Button";
import Table from "@components/common/Table";
import Layout from "@components/layout";
import SearchBox from "@components/products/SearchBox";
import { PRODUCT_LIST_THEADS } from "@constants/products";

const ProductListPage = () => {
  return (
    <Layout title="재고 목록">
      <div>
        <div className="mb-2 flex justify-end space-x-6">
          <SearchBox />
          <Button value="엑셀" color="green" />
        </div>
        <div>
          <Table thead={PRODUCT_LIST_THEADS} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductListPage;
