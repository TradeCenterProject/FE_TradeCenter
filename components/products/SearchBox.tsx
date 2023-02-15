import Button from "@components/common/Button";
import ComboBox from "@components/common/ComboBox";
import { SEARCH_OPTIONS } from "@constants/products";

const SearchBox = () => {
  return (
    <div className="flex gap-2">
      <ComboBox options={SEARCH_OPTIONS} />
      <form className="flex items-center space-x-2">
        <input
          type="text"
          className="w-56 rounded-[3px] border border-borderColor px-[0.5rem] py-[0.1rem] text-sm outline-none"
        />
        <Button value="검색" />
      </form>
    </div>
  );
};

export default SearchBox;
