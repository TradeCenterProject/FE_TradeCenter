import Link from "next/link";

const JoinButton = () => {
  return (
    <Link href="/join">
      <button className="pt-4 text-sm text-gray-400 underline">회원가입</button>
    </Link>
  );
};

export default JoinButton;
