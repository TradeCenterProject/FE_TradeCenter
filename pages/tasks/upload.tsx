import { FormEvent, useState } from "react";

import Button from "@components/common/Button";
import ComboBox from "@components/common/ComboBox";
import Form from "@components/common/Form";
import FormInput from "@components/common/FormInput";
import FormItem from "@components/common/FormItem";
import Table from "@components/common/Table";
import Layout from "@components/layout";
import { TASK_LIST_THEADS, TASK_CATEGORY } from "@constants/tasks";
import ProductSelectModal from "@components/tasks/ProductSelectModal";

const TaskUploadPage = () => {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());
  const [isProductSelectModalOpen, setIsProductSelectModalOpen] =
    useState(false);

  const onOpenProductSelectModal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProductSelectModalOpen(true);
  };

  return (
    <>
      <Layout title="업무 등록">
        <div className="mt-6 space-y-8">
          <Form
            id="taskUpload"
            rowCount={3}
            onSubmit={onOpenProductSelectModal}
          >
            <FormItem isWide id="taskTitle" label="업무 제목">
              <FormInput required id="taskTitle" />
            </FormItem>
            <FormItem id="listOrder" label="No.">
              <span className="px-1">11</span>
            </FormItem>
            <FormItem id="inspector" label="검수자">
              <span className="px-1">이상준</span>
            </FormItem>
            <FormItem id="taskCategory" label="업무 종류">
              <ComboBox options={TASK_CATEGORY.options} />
            </FormItem>
            <FormItem id="PIC" label="담당자">
              <ComboBox options={["name1", "name2"]} />
            </FormItem>
          </Form>
          <div className="space-y-2">
            <div className="flex justify-end gap-2">
              <Button color="red" value="선택 삭제" />
              <Button color="green" value="추가" form="taskUpload" />
            </div>
            <Table
              checkable
              thead={TASK_LIST_THEADS}
              checkedIds={checkedIds}
              setCheckedIds={setCheckedIds}
            />
          </div>
        </div>
      </Layout>
      {isProductSelectModalOpen && (
        <ProductSelectModal
          setIsProductSelectModalOpen={setIsProductSelectModalOpen}
        />
      )}
    </>
  );
};

export default TaskUploadPage;
