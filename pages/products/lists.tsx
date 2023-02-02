import Button from "../../components/common/Button";
import Table from "../../components/common/Table";
import Layout from "../../components/layout";
import SearchBox from "../../components/products/SearchBox";

const productListThead = [
  "제품 코드",
  "제품 이름",
  "생산처",
  "제품 분류",
  "저장 위치",
  "단가",
  "수량",
];

const ListPage = () => {
  return (
    <Layout title="재고 목록">
      <div>
        <div className="mb-2 flex justify-end space-x-6">
          <SearchBox />
          <Button value="엑셀" color="green" />
        </div>
        <div>
          <Table thead={productListThead} />
        </div>
      </div>
    </Layout>
  );
};

export default ListPage;
