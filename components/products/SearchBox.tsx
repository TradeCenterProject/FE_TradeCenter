import Button from "../common/Button";
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
          className="w-56 rounded-[3px] border border-borderColor py-[1.2px] px-[0.5rem] text-sm leading-normal outline-none"
        />
        <Button value="검색" />
      </form>
    </div>
  );
};

export default SearchBox;
