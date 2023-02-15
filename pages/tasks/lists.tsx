import Button from "@components/common/Button";
import Table from "@components/common/Table";
import Layout from "@components/layout";
import Filter from "@components/tasks/Filter";
import {
  TASK_CATEGORY,
  TASK_LIST_THEADS,
  TASK_SITUATION,
} from "@constants/tasks";

const TaskListPage = () => {
  return (
    <Layout title="업무 목록">
      <div>
        <div className="mb-2 flex justify-end space-x-4">
          <div className="flex items-center space-x-2">
            <Filter
              description={TASK_CATEGORY.description}
              options={TASK_CATEGORY.options}
            />
            <Filter
              description={TASK_SITUATION.description}
              options={TASK_SITUATION.options}
            />
          </div>
          <Button value="엑셀" color="green" />
        </div>
        <div>
          <Table thead={TASK_LIST_THEADS} />
        </div>
      </div>
    </Layout>
  );
};

export default TaskListPage;
