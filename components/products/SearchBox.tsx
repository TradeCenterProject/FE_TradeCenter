import ComboBox from "../common/ComboBox";

const searchOptions = [
  "제품 코드",
  "제품 이름",
  "생산처",
  "제품 분류",
  "저장 위치",
  "단가",
  "수량",
];

const SearchBox = () => {
  return (
    <div className="flex gap-2">
      <ComboBox options={searchOptions} />
      <form className="space-x-2">
        <input
          type="text"
          className="w-56 rounded-[3px] border border-gray-400 py-[1.2px] px-[0.5rem] text-sm leading-normal outline-none"
        />
        <input
          type="submit"
          value="검색"
          className="cursor-pointer rounded-[3px] border border-gray-400 bg-gray-100 py-[1.6px] px-4 text-sm font-semibold leading-normal text-gray-700 hover:bg-slate-200 active:bg-gray-300"
        />
      </form>
    </div>
  );
};

export default SearchBox;
