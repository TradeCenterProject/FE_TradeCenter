import Table from "@components/common/Table";
import Layout from "@components/layout";
import { EMPLOYEE_INFORMATION_THEADS } from "@constants/company";

const EmployeeManagementPage = () => {
  return (
    <Layout title="직원 관리">
      <div className="mt-6">
        <Table thead={EMPLOYEE_INFORMATION_THEADS} />
      </div>
    </Layout>
  );
};

export default EmployeeManagementPage;
