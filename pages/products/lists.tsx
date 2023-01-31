import Layout from "../../components/layout";
import SearchBox from "../../components/products/SearchBox";

const ListPage = () => {
  return (
    <Layout title="재고 목록">
      <div>
        <div className="flex w-full justify-end">
          <SearchBox />
        </div>
      </div>
    </Layout>
  );
};

export default ListPage;
