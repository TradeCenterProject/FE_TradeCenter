import Button from "@components/common/Button";
import Table from "@components/common/Table";
import Layout from "@components/layout";
import SearchBox from "@components/products/SearchBox";
import Filter from "@components/tasks/Filter";

const taskListThead = [
  "업무 코드",
  "등록일",
  "업무 종류",
  "업무 제목",
  "검수자",
  "담당자",
  "완료 여부",
];

const taskCategory = {
  description: "업무 종류",
  options: ["입고", "출고", "기타"],
};

const taskSituation = {
  description: "업무 종류",
  options: ["완료", "미완료"],
};

const TaskListPage = () => {
  return (
    <Layout title="업무 목록">
      <div>
        <div className="mb-2 flex justify-end space-x-4">
          <div className="space-x-2">
            <Filter
              description={taskCategory.description}
              options={taskCategory.options}
            />
            <Filter
              description={taskSituation.description}
              options={taskSituation.options}
            />
          </div>
          <Button value="엑셀" color="green" />
        </div>
        <div>
          <Table thead={taskListThead} />
        </div>
      </div>
    </Layout>
  );
};

export default TaskListPage;
