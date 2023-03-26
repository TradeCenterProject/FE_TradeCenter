import { useRef } from "react";

import useProductUpload from "@hooks/useProductUpload";
import Button from "@components/common/Button";

const ProductUploadButtonBox = () => {
  const { addExcelFileData } = useProductUpload();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickExcelUpload = () =>
    inputRef.current && inputRef.current.click();

  return (
    <div className="mb-2 flex justify-end gap-2">
      <Button color="green" value="엑셀 양식" />
      <input
        type="file"
        accept=".xlsx"
        ref={inputRef}
        onChange={addExcelFileData}
        className="hidden"
      />
      <Button
        color="green"
        value="엑셀 등록"
        handleClick={handleClickExcelUpload}
      />
      <Button color="green" value="추가" form="productUpload" />
    </div>
  );
};

export default ProductUploadButtonBox;
