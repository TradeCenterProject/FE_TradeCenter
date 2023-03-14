import Card from "@components/common/Card";
import JoinForm from "@components/join/JoinForm";

const JoinPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <Card>
        <JoinForm />
      </Card>
    </div>
  );
};

export default JoinPage;
