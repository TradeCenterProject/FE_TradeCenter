import Card from "../components/common/Card";
import FormButton from "../components/common/FormButton";
import Input from "../components/common/Input";

const JoinPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <Card>
        <form className="flex w-full flex-col space-y-6">
          <h2 className="text-center text-2xl font-bold">회원가입</h2>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="password" placeholder="비밀번호 확인" />
          <Input type="text" placeholder="회사 코드 (선택)" />
          <FormButton name="회원가입" disabled={false} />
        </form>
      </Card>
    </div>
  );
};

export default JoinPage;
