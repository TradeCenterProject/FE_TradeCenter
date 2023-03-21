import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface TableProps<T> {
  dataList: T[];
  checkable?: boolean;
  thead: string[];
  checkedIds?: Set<number>;
  setCheckedIds?: Dispatch<SetStateAction<Set<number>>>;
}

const Table = <T extends object>({
  dataList,
  checkable,
  thead,
  checkedIds,
  setCheckedIds,
}: TableProps<T>) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);

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

  return (
    <div className="h-[calc(100vh-25rem)] overflow-hidden overflow-y-auto rounded-sm">
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
                    id={i.toString()}
                    type="checkbox"
                    checked={checkedIds?.has(i)}
                    onChange={onToggleCheck}
                  />
                </td>
              )}
              <td>{i + 1}</td>
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
