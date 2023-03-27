import Button from "components/common/Button";
import Layout from "@components/layout";
import SearchBox from "@components/products/SearchBox";
import ProductListTable from "@components/products/lists/ProductListTable";

const ProductListPage = () => {
  return (
    <Layout title="재고 목록">
      <div>
        <div className="mb-2 flex justify-end space-x-6">
          <SearchBox />
          <Button value="엑셀" color="green" />
        </div>
        <div>
          <ProductListTable />
        </div>
      </div>
    </Layout>
  );
};

export default ProductListPage;
