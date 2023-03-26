import useProductUpload from "@hooks/useProductUpload";
import { PRODUCT_LIST_THEADS } from "@constants/products";

import Table from "@components/common/Table";

const UploadPreviewTable = () => {
  const { dataList, setDataList, uploadDataList } = useProductUpload();

  return (
    <Table
      uploadable
      checkable
      thead={PRODUCT_LIST_THEADS}
      dataList={dataList}
      setDataList={setDataList}
      handleUpload={uploadDataList}
    />
  );
};

export default UploadPreviewTable;
