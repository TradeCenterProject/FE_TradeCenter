import { Dispatch, SetStateAction, useState } from "react";
import Button from "@components/common/Button";
import Modal from "@components/common/Modal";
import Table from "@components/common/Table";
import SearchBox from "@components/products/SearchBox";
import { PRODUCT_LIST_THEADS } from "@constants/products";

interface ProductSelectModalProps {
  setIsProductSelectModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductSelectModal = ({
  setIsProductSelectModalOpen,
}: ProductSelectModalProps) => {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());

  return (
    <Modal setIsOpenModal={setIsProductSelectModalOpen}>
      <div>
        <h3 className="mb-2 text-lg font-extrabold">재고 목록</h3>
        <div>
          <div className="mb-2 flex justify-end space-x-6">
            <SearchBox />
            <Button value="추가" color="green" />
          </div>
          <div>
            <Table
              checkable
              thead={PRODUCT_LIST_THEADS}
              checkedIds={checkedIds}
              setCheckedIds={setCheckedIds}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductSelectModal;
