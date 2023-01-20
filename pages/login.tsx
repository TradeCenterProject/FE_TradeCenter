import Card from "../components/common/Card";
import FormButton from "../components/common/FormButton";
import Input from "../components/common/Input";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <Card>
        <form className="flex w-full flex-col space-y-6">
          <h2 className="text-center text-2xl font-bold">로그인</h2>
          <Input required type="email" placeholder="이메일" />
          <Input required type="password" placeholder="비밀번호" />
          <label className="flex p-1 text-sm leading-4 text-gray-400">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 inline-block h-4 w-4 rounded accent-green-600"
            />
            로그인 상태 유지
          </label>
          <FormButton name="로그인" disabled={false} />
        </form>
        <button className="pt-4 text-sm text-gray-400 underline">
          회원가입
        </button>
      </Card>
    </div>
  );
};

export default LoginPage;
