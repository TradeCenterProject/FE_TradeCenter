const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 py-20">
      <div className="flex w-full max-w-md flex-col items-center rounded-lg bg-white py-10 px-9 shadow-[0px_0px_20px_rgba(0,0,0,0.03)] shadow-slate-100">
        <form className="flex w-full flex-col space-y-6">
          <h2 className="text-center text-2xl font-bold">로그인</h2>
          <input
            type="email"
            className="rounded-lg bg-slate-50 py-3 px-4 text-sm outline-none placeholder:text-gray-400 "
            placeholder="이메일"
          />
          <input
            type="password"
            className="rounded-lg bg-slate-50 py-3 px-4 text-sm outline-none placeholder:text-gray-400"
            placeholder="비밀번호"
          />
          <label className="flex p-1 text-sm leading-4 text-gray-400">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 inline-block h-4 w-4 rounded accent-green-600"
            />
            로그인 상태 유지
          </label>
          <input
            type="submit"
            value="로그인"
            disabled={false}
            className="w-full rounded-lg bg-primary py-2 font-semibold text-white disabled:bg-gray-200"
          />
        </form>
        <button className="pt-4 text-sm text-gray-400 underline">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
