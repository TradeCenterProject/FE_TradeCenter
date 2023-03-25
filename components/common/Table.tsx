import { ProductType } from "@typings/products";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";

interface TableProps<T> {
  dataList: T[];
  checkable?: boolean;
  thead: string[];
  checkedIds?: Set<number>;
  setDataList: Dispatch<SetStateAction<T[]>>;
  handleUpload: () => void;
}

const Table = <T extends ProductType>({
  dataList,
  checkable,
  thead,
  setDataList,
  handleUpload,
}: TableProps<T>) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());

  const onToggleCheckAll = () => {
    if (!setCheckedIds) return;
    const numberArray = Array.from({ length: dataList.length }, (_, i) => i);
    const newSet = new Set(numberArray);

    if (isCheckedAll) newSet.clear();

    setCheckedIds(newSet);
    setIsCheckedAll((prev) => !prev);
  };

  const onToggleCheck = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!checkedIds || !setCheckedIds) return;
    const id = Number(target.id);
    const isChecked = checkedIds.has(id);
    const newSet = new Set<number>(checkedIds);

    isChecked ? newSet.delete(id) : newSet.add(id);
    newSet.size === dataList.length
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
    setCheckedIds(newSet);
  };

  const onDeleteRow = () => {
    const newDataList = dataList.filter(({ idx }) => {
      if (!idx) return;
      return checkedIds.has(idx) ? false : true;
    });

    setDataList(newDataList);
  };

  return (
    <div className="h-[calc(100vh-25rem)] space-y-2 overflow-hidden overflow-y-auto rounded-sm">
      <div className="flex justify-end gap-2">
        <Button color="red" value="선택 삭제" handleClick={onDeleteRow} />
        <Button color="green" value="등록하기" handleClick={handleUpload} />
      </div>
      <table className="w-full rounded-sm text-center text-sm">
        <thead className="sticky top-[-1px] bg-primary text-white">
          <tr className="[&>th]:border [&>th]:border-borderColor [&>th]:py-1 [&>th]:font-semibold">
            {checkable && (
              <th className="w-7">
                <input
                  type="checkbox"
                  checked={isCheckedAll}
                  onChange={onToggleCheckAll}
                />
              </th>
            )}
            <th>No.</th>
            {thead.map((text, i) => (
              <th key={i}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList?.map((row, i) => (
            <tr
              key={i}
              className="[&>td]:border [&>td]:border-borderColor [&>td]:py-1 [&:last-child>td]:rounded-lg"
            >
              {checkable && (
                <td>
                  <input
                    id={row.idx?.toString()}
                    type="checkbox"
                    checked={checkedIds?.has(row.idx || -1)}
                    onChange={onToggleCheck}
                  />
                </td>
              )}
              {Object.values(row).map((data, i) => (
                <td key={i}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
