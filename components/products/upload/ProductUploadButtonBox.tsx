import { useRef } from "react";

import useProductUpload from "@hooks/useProductUpload";
import Button from "@components/common/Button";

const ProductUploadButtonBox = () => {
  const { addExcelFileData } = useProductUpload();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickExcelUpload = () =>
    inputRef.current && inputRef.current.click();

  return (
    <div className="mb-2 flex justify-between gap-2">
      <div className="space-x-2">
        <Button color="yellow" value="엑셀 양식 다운로드" />
        <input
          type="file"
          accept=".xlsx"
          ref={inputRef}
          onChange={addExcelFileData}
          className="hidden"
        />
        <Button
          outline
          color="green"
          value="엑셀 파일 불러오기"
          handleClick={handleClickExcelUpload}
        />
      </div>
      <Button color="green" value="추가" form="productUpload" />
    </div>
  );
};

export default ProductUploadButtonBox;
