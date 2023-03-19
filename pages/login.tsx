import Card from "@components/common/Card";
import JoinButton from "@components/login/JoinButton";
import LogInForm from "@components/login/LogInForm";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <Card>
        <LogInForm />
        <JoinButton />
      </Card>
    </div>
  );
};

export default LoginPage;
