import Layout from "@components/layout";

import ProductUploadForm from "@components/products/upload/ProductUploadForm";
import ProductUploadButtonBox from "@components/products/upload/ProductUploadButtonBox";
import UploadPreviewTable from "@components/products/upload/UploadPreviewTable";

const ProductUploadPage = () => {
  return (
    <Layout title="물품 등록">
      <div className="space-y-10">
        <div>
          <ProductUploadButtonBox />
          <ProductUploadForm />
        </div>
        <UploadPreviewTable />
      </div>
    </Layout>
  );
};

export default ProductUploadPage;
